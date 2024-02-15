const fs = require('fs');
const path = require('path');
const parse = require('csv-parse').parse;
const assetConfig = require('./config.json');

const assetsPath = '../assets';
const publicLocalesPath = '../../public/locales';

const generateTranslation = async (client, nameSpace, localeCodesConfig) => {
  const translationCsv = await fs.promises.readFile(path.resolve(__dirname, `${assetsPath}/${client}/${nameSpace}.csv`), {
    encoding: 'utf-8',
  });
  const columns = translationCsv.split(/\n/)[0].split(',');
  parse(
    translationCsv,
    {
      delimiter: ',',
      columns,
    },
    (err, res) => {
      if (err) {
        console.log(`Error parsing ${nameSpace}.csv: `, err);
        return;
      }
      /**
       * end result of parsedLocale would contain per-
       */
      const parsedLocale = res.slice(1).reduce((accumulator, localeMap) => {
        localeCodesConfig.forEach((localeCode) => {
          if (!accumulator[localeCode]) {
            accumulator[localeCode] = {};
          }
          if (!accumulator[localeCode][localeMap.Type]) {
            accumulator[localeCode][localeMap.Type] = {}
          }
          accumulator[localeCode][localeMap.Type][localeMap.Keys] = localeMap[localeCode];
        });
        return accumulator;
      }, {});
      localeCodesConfig.forEach((localeCode) => {
        fs.mkdirSync(path.resolve(__dirname, `${publicLocalesPath}/${client}/${localeCode}`), {
          recursive: true,
        });
        fs.promises
          .writeFile(
            path.resolve(__dirname, `${publicLocalesPath}/${client}/${localeCode}/${nameSpace}.json`),
            JSON.stringify(parsedLocale[localeCode]),
            { encoding: 'utf-8' }
          )
          .then(() => {
            console.log(
              `Successfully generated translations for client: ${client}, namespace: ${nameSpace}, locale: ${localeCode}`
            );
          })
          .catch((err) => {
            if (err) {
              console.log(`Error generating translations for client: ${client}, namespace: ${nameSpace}, locale: ${localeCode}: `, err);
              return;
            }
          });
      });
    }
  );
};

fs.rmSync(path.resolve(__dirname, '../../public/locales'), { recursive: true, force: true });

assetConfig.clientLocales.forEach((client) => {
  assetConfig.nameSpaces.forEach((namespace) => {
    generateTranslation(client.id, namespace, client.locales);
  });
});
