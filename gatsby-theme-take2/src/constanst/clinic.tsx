import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IClinicInfo {
  id: number;
  name?: string;
  address?: string;
  phone?: string;
  images?: IGatsbyImageData[];
}
