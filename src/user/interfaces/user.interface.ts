import { IAddress } from './address.interface';
import { Document } from 'mongoose';

export interface IUser extends Document {
  readonly email: string;
  readonly avatar: string;
  readonly avatarId: string;
  readonly lastName: string;
  readonly firstName: string;
  readonly gender: string;
  readonly address: IAddress;
  readonly profession: string;
  readonly searchField: string;
  readonly phone: string;
  readonly roles: Array<string>;
  readonly password: string;
}
