export interface ResetPassEntity {
	oldpass: string;
	newpass: string;
	newpassconfirm: string;
  }
  
  export const createEmptyReset = (): ResetPassEntity => ({
	oldpass: "",
	newpass: "",
	newpassconfirm: ""
  });
  