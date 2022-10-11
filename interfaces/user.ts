export interface Signup {
  fullName?: string;
  email?: string;
  password?: string;
  job_urgency?: string;
  employment_demand?: string;
  work_model?: string;
  work_location?: string;
  skills?: string[];
  industry_categories?: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface UserResponse {
  candidacy: UserCandidacy;
  accessToken: string;
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
