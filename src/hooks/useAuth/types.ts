export interface IUser {
  _id: string;
  phoneNumber: string;
  name: string;
  balance: number;
  status: boolean;
  role: UserRole;
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'user',
}
