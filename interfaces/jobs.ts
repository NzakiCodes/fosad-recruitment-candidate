import SuggestedJobs from "../pages/jobs/suggested";
import { User } from "./user";

export interface JobType {
  id: string;
  title: string;
  isSelected: boolean;
}

export enum JobSearchOption {
  LOOKINGFORJOB = "I'm looking for a job right now",
  LOOKINGBUTNORUSH = "I'm looking for a job, but no rush",
}

export interface JobInterests {
  id: string;
  name: string;
}

export interface SuggestedJobs {
  _id: string;
  title: string;
  description: string;
  status: string;
  location: string;
  remote: boolean;
  employment_type: string;
  from_amount: number;
  to_amount: number;
  vetting: string;
  company: Company;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface Company {
  _id: string;
  user: string[];
  number_of_employee: string;
  company_name: string;
  number_of_fill_job: string;
  hiring_need: string;
  company_website: string;
  current_title: string;
  phone_number: string;
  about_us: string;
  createdAt: string;
  updatedAt: string;
}

export interface AppliedJobs {
  code: number;
  job: SuggestedJobs;
  user: User;
}

export interface SavedJobs {
  id: string;
  candidate: User;
  job: SuggestedJobs;
}
