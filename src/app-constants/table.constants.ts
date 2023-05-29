export const initialValues = {
  id: '',
  client: '',
  pickupAddress: '',
  dropoffAddress: '',
  courier: '',
  status: '',
} as const;

export const TABLE_CONSTANTS = Object.keys(initialValues);
