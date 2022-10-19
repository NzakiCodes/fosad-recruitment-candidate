import { User } from "./user";

export interface Experience {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  details: string;
  id?: string;
  candidate?: User;
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  id?: string;
  candidate?: User;
  fieldOfStudy: string;
}

export interface OtherInformation {
  minimumDesiredPay: string;
  yearsOfExperience: number;
  preferredEmployerSize: number;
  languages: string[];
  location: string;
  geoPreferences: string[];
  user: string;
  id?: "";
}
