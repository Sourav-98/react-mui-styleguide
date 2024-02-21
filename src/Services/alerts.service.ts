import moment, { Moment } from 'moment';

export type AppAlert = {
  content: React.ReactNode;
  type: 'banner' | 'popup';
  timeStamp: Moment;
};

const alertsListDummy: Array<AppAlert> = [
  {
    content:
      'This is a global nuclear strike issued in public interest. Please take immediate shelter, and brace for impact!',
    type: 'popup',
    timeStamp: moment.unix(1708531962),
  },
  {
    content:
      'This is a global nuclear strike issued in public interest. Please take immediate shelter, and brace for impact!',
    type: 'popup',
    timeStamp: moment.unix(1708535562),
  },
  {
    content:
      'All routes from the United States of America to Cuba have been paused due to an active embargo. Please cancel all flights.',
    type: 'banner',
    timeStamp: moment.unix(1708539162),
  },
  {
    content: 'A rise of global warming in the sub-Saharan regions will cause a 72H layover for all flights departing from Minneapolis to Egypt. Please re-book flights if necessary.',
    type: 'banner',
    timeStamp: moment.unix(1708540302),
  },
  {
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    type: 'banner',
    timeStamp: moment.unix(1708547502),
  },
];

export const fetchAppAlerts = async ({ signal }: { signal: AbortSignal }): Promise<Array<AppAlert>> => {
  // if (signal.aborted) {
  //   console.log('App Alerts Dummy Fetch cancelled...');
  //   return Promise.reject({
  //     code: 'ERR_CANCELED',
  //     message: 'Canceled',
  //   });
  // }
  console.log('App Alerts Dummy Fetch called...');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(alertsListDummy);
    }, 1895);
    signal.addEventListener('abort', () => {
      console.log('App Alerts Dummy Fetch cancelled...');
      reject({
        code: 'ERR_CANCELED',
        message: 'Canceled',
      });
    });
  });
};
