import { TStatus } from './status.type';

export interface IPackage {
  id: string,
  client: string,
  pickupAddress: string,
  dropoffAddress: string,
  courier: string,
  status: TStatus,
}
