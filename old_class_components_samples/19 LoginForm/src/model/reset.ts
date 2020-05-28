export interface ResetEntity {
	oldpass: string;
	newpass: string;
	newpassconfirm: string;
  }
  
  export const createEmptyReset = (): ResetEntity => ({
	oldpass: '',
	newpass: '',
	newpassconfirm: ''
  });
  