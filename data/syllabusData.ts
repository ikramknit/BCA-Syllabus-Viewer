
import { Syllabus } from '../types';

export const syllabusData: Syllabus = [
  {
    id: 'sem1',
    title: 'Year - I, Semester-I',
    totalCredits: 19,
    courses: [
      { paper: '1', courseCode: '0122301', courseType: 'CCO-1', courseTitle: 'Mathematics Foundations to Computer Science-I', credit: '3', ltp: '3-0-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '2', courseCode: '0122302', courseType: 'SEC', courseTitle: 'Problem Solving Techniques', credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '3', courseCode: '0122303', courseType: 'CCO-2', courseTitle: 'Computer Architecture', credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '4', courseCode: '0122304', courseType: 'AEC-1', courseTitle: 'General English - I', credit: '2', ltp: '1-1-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '5', courseCode: '0122305', courseType: 'MDE', courseTitle: 'IKS-Indian Knowledge System', credit: '2', ltp: '2-0-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '6', courseCode: '0122306', courseType: 'VAC', courseTitle: 'Environmental Science and Sustainability', credit: '2', ltp: '2-0-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '7', courseCode: '0122307', courseType: 'Bridge Course', courseTitle: 'Optional: Basic Mathematics', credit: 'Qualify', ltp: '3-1-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40 N.A.' } },
    ],
  },
  {
    id: 'sem2',
    title: 'Year - I, Semester-II',
    totalCredits: 21,
    courses: [
      { paper: '1', courseCode: '0222301', courseType: 'CCO-1', courseTitle: 'Mathematics Foundations to Computer Science-II', credit: '3', ltp: '3-0-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '2', courseCode: '0222302', courseType: 'SEC', courseTitle: 'Data Structures', credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '3', courseCode: '0222303', courseType: 'CCO-2', courseTitle: 'Operating Systems', credit: '4', ltp: '3-0-2', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '4', courseCode: '0222304', courseType: 'AEC-1', courseTitle: 'Object Oriented Programming using Java', credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '5', courseCode: '0222305', courseType: 'MDE', courseTitle: 'Web Technologies', credit: '2', ltp: '1-0-2', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '6', courseCode: '0222306', courseType: 'VAC', courseTitle: 'Indian Constitution', credit: '2', ltp: '2-0-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '7', courseCode: '0222307', courseType: 'AEC-2', courseTitle: '*Additional Course - Indian or Foreign Language', credit: 'Qualify', ltp: '2-0-0', marks: { ie: '30', ue: '70' }, minMarks: { ue_p_ue: '12/28', total: '40 N.A.' } },
    ],
  },
  {
    id: 'sem3',
    title: 'Year - II, Semester-III',
    totalCredits: 20,
    courses: [
      { paper: '1', courseCode: '0322301', courseType: 'CCO', courseTitle: 'Probability and Statistics', credit: '3', ltp: '3-0-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '2', courseCode: '0322302', courseType: 'CCO', courseTitle: 'Data Base Management System', credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '3', courseCode: '0322303', courseType: 'SEC', courseTitle: 'Python Programming', credit: '4', ltp: '2-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '4', courseCode: '0322304', courseType: 'CCO', courseTitle: 'Software Engineering', credit: '3', ltp: '3-0-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '5', courseCode: '0322305-07', courseType: 'DSE-1', courseTitle: 'Any one of the following', options: ['1. Basics of Data Analytics using Spreadsheet', '2. Feature Engineering', '3. Web Programming-I'], credit: '3', ltp: '1-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '6', courseCode: 'N/A', courseType: 'VAC', courseTitle: 'Yoga/Sports/NCC/NSS/Disaster Management', credit: '2', ltp: '0-0-4', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
    ],
  },
  {
    id: 'sem4',
    title: 'Year - II, Semester-IV',
    totalCredits: 20,
    courses: [
      { paper: '1', courseCode: '0422301', courseType: 'CCO', courseTitle: 'Entrepreneurship and Startup Ecosystem', credit: '2', ltp: '1-1-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '2', courseCode: '0422302', courseType: 'CCO', courseTitle: 'Computer Networks', credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '3', courseCode: '0422303', courseType: 'CCO', courseTitle: 'Design and Analysis of Algorithm', credit: '3', ltp: '3-0-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '4', courseCode: '0422304', courseType: 'CCO', courseTitle: 'Artificial Intelligence', credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '5', courseCode: '0422305-07', courseType: 'DSE-2', courseTitle: 'Any one of the following', options: ['1. Data Visualisation', '2. Introduction to Machine Learning', '3. Web Programming-II'], credit: '3', ltp: '1-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '6', courseCode: '0422308', courseType: 'SEC', courseTitle: 'Design Thinking and Innovation', credit: '2', ltp: '1-1-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
    ],
  },
  {
    id: 'sem5',
    title: 'Year - III, Semester-V',
    totalCredits: 19,
    courses: [
      { paper: '1', courseCode: '0522301-02', courseType: 'DSE1', courseTitle: 'Any one of the following', options: ['1. Introduction to Data Science', '2. Neural Network'], credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '2', courseCode: '0522303-04', courseType: 'DSE2', courseTitle: 'Any one of the following', options: ['1. Time Series Analysis', '2. Digital Image Processing'], credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '3', courseCode: '0522305-06', courseType: 'DSE3', courseTitle: 'Any one of the following', options: ['1. Machine Learning', '2. Natural Language Processing'], credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '4', courseCode: '0522307', courseType: 'SEC1', courseTitle: 'Quantitative Techniques', credit: '2', ltp: '2-0-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '5', courseCode: '0522360', courseType: 'SEC2', courseTitle: 'Internship/Capstone Project', credit: '4', ltp: '0-0-8', marks: { ie: '50', ue: '150' }, minMarks: { ue_p_ue: '75', total: '100' } },
      { paper: '6', courseCode: '0522365', courseType: 'SEC', courseTitle: 'Major Project-I', credit: '0', ltp: 'N/A', marks: { ie: 'N/A', ue: 'N/A' }, minMarks: { ue_p_ue: 'N/A', total: 'N/A' } },
    ],
  },
  {
    id: 'sem6',
    title: 'Year - III, Semester-VI',
    totalCredits: 19,
    courses: [
      { paper: '1', courseCode: '0622301', courseType: 'CCO', courseTitle: 'Generative AI', credit: '4', ltp: '2-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '2', courseCode: '0622302-03', courseType: 'DSE1', courseTitle: 'Any one of the following', options: ['1. Big Data analytics', '2. Deep Learning for Computer Vision'], credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '3', courseCode: '0622304-05', courseType: 'DSE2', courseTitle: 'Any one of the following', options: ['1. Exploratory Data Analysis', '2. Predictive Analysis'], credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '4', courseCode: '0622306', courseType: 'AEC', courseTitle: 'Soft Skills', credit: '1', ltp: '0-1-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '5', courseCode: '0622365', courseType: 'SEC', courseTitle: 'Major Project-II', credit: '4', ltp: '0-0-8', marks: { ie: '50', ue: '150' }, minMarks: { ue_p_ue: '75', total: '100' } },
    ],
  },
];
