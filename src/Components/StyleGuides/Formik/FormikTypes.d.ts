export type LoginFormType = {
  loginType: 'PWD' | 'MFA';
  username: string;
  password: string;
  passwordConfirm: string;
  station: string;
  loginDate1: string | number | Moment | Date |  null;
  loginDate2: string | number | Moment | Date | null;
  mfaPin?: string;
};
