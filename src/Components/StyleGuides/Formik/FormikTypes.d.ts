export type LoginFormType = {
  loginType: 'PWD' | 'MFA';
  username: string;
  password: string;
  passwordConfirm: string;
  station: string;
  loginDate1: string | number | Moment | null;
  loginDate2: string | number | Moment | null;
  mfaPin?: string;
};
