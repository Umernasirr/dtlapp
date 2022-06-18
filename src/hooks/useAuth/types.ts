export interface IUser {
  _id: string;
  phoneNumber: string;
  name: string;
  status: boolean;
  location: string;
  city: string;
  email: string;
  shopNo: string;
  mechanic: string;
  role: UserRole;
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'user',
}
