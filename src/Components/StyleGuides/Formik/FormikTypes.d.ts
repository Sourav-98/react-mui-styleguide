export type LoginFormType = {
  loginType: 'PWD' | 'MFA';
  username: string;
  password: string;
  passwordConfirm: string;
  station: string;
  loginDate1: Moment | null;
  mfaPin?: string;
};
