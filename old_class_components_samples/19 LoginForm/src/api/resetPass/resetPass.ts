import { ResetEntity } from "../../model";

export const isValidReset = (resetInfo: ResetEntity): boolean => 
  (resetInfo.oldpass === 'admin' && resetInfo.newpass === resetInfo.newpassconfirm);
