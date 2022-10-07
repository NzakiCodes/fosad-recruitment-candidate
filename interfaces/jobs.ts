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
