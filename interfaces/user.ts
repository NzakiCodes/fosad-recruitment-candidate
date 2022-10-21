export interface Signup {
  fullName?: string;
  email?: string;
  password?: string;
  job_urgency?: string;
  employment_demand?: string[];
  work_model?: string[];
  work_location?: string;
  skills?: string[];
  industry_categories?: string[];
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface UserResponse {
  candidacy: UserCandidacy;
  access_token: string;
}

export interface UserRole {
  id: string;
  name: string;
  slug: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
}

export interface UserCandidacy {
  id: string;
  job_urgency: string;
  employment_demand: string;
  work_location: string;
  skills: string[];
  industry_categories: string;
  user: User;
}

export interface UserProfile {
  id: string;
  position: null;
  company: null;
  summary: string;
  skills: null;
  languages: null;
  email: string;
  contacts: null;
  profiles: null;
  minimum_desired_pay: null;
  years_of_experience: null;
  employer_size: null;
  location: null;
  geo_preference: null;
  user: User;
}
