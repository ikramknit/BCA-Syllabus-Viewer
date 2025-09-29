
export interface Course {
  paper: string;
  courseCode: string;
  courseType: string;
  courseTitle: string;
  options?: string[];
  credit: string;
  ltp: string;
  marks: {
    ie: string;
    prc?: string;
    ue: string;
  };
  minMarks: {
    ue_p_ue: string;
    total: string;
  };
  details?: CourseDetails;
}

export interface UnitContent {
  unit: string;
  title: string;
  description: string;
}

export interface LabProblemSection {
  title: string;
  problems: string[];
}

export interface CourseDetails {
  courseObjectives: string[];
  courseContent: UnitContent[];
  textBooks?: string[];
  referenceBooks?: string[];
  webResources?: string[];
  suggestiveLabs?: string[];
  labHardware?: string[];
  labPrograms?: LabProblemSection[];
}

export interface Semester {
  id: string;
  title: string;
  totalCredits: number;
  courses: Course[];
}

export type Syllabus = Semester[];
