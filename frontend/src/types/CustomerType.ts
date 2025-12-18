export type CustomerType = {
  id: number;
  name: string;
  imageUrl: string;
  age: number;
  address: {
    city: string;
    country: string;
  }
};