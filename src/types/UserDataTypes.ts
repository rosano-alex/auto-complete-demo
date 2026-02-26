export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Geo {
  lat: string;
  lng: string;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export type User = {
  id: number
  name: string
  username: string
  email?: string
  phone?: string
  website?: string
  address: Address
  company?: Company
  // placeholder for the formatted name, which is added in the useGetUsers hook
  formattedName?: string
}






