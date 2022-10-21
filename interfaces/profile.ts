import { User } from "./user";

export interface Experience {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  details: string;
  id?: string;
  candidate?: User;
}

export interface EducationInterface {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  id?: string;
  candidate?: User;
  fieldOfStudy: string;
}

export interface OtherInformationInterface {
  minimumDesiredPay: string;
  yearsOfExperience: number;
  preferredEmployerSize: number;
  languages: string[];
  location: string;
  geoPreferences: string[];
  user?: string;
  id?: "";
}

export interface SkillsInterface {
  id?: string;
  name: string;
}

export interface AccountInterface {
  email: string;
  phone: string;
  social: SocialsInterface;
  user: User;
}

export interface SocialsInterface {
  facebook: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  github: string;
  website: string;
}
