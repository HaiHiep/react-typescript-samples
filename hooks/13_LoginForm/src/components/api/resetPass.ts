import {ResetPassEntity} from '../model/resetPass';

// Just a fake ResetPassAPI
export const isValidResetPass = (resetPassInfo : ResetPassEntity) : boolean =>
  (resetPassInfo.oldpass === 'admin' && resetPassInfo.newpass === resetPassInfo.newpassconfirm);
