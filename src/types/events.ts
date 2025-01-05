export interface Web3Event {
  name: string;
  location: string;
  start_date: string;
  end_date: string;
  coordinates?: [number, number];
  image: string;
  website?: string;
}