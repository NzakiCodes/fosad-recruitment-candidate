export interface Signup {
  fullName?: string;
  email?: string;
  password?: string;
  job_urgency?: string;
  employment_demand?: string;
  work_model?: string;
  work_location?: string;
  skills?: string;
  industry_categories?: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface IUserSignUp {
  fullName: string;
  email?: string;
  password?: string;
}
