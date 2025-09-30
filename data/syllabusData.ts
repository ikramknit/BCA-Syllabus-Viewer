import { Syllabus } from '../types';

export const syllabusData: Syllabus = [
  {
    id: 'sem1',
    title: 'Year - I, Semester-I',
    totalCredits: 19,
    courses: [
      { 
        paper: '1', 
        courseCode: '0122301', 
        courseType: 'CCO-1', 
        courseTitle: 'Mathematics Foundations to Computer Science-I', 
        credit: '3', 
        ltp: '3-0-0', 
        marks: { ie: '25', ue: '75' }, 
        minMarks: { ue_p_ue: '25', total: '40' },
        details: {
          courseObjectives: [
            "Provide a basic understanding of fundamental mathematical concepts such as sets, functions, matrix algebra, and discrete mathematics.",
            "This course enables the students to use mathematical models and techniques to analyze and understand problems in computer science.",
            "This course demonstrates how the mathematical principles give succinct abstraction of computer science problems and help them to efficiently analyze."
          ],
          courseContent: [
            { unit: 'I', title: 'Set, Relation and Function', description: "Set, Set Operations. Properties of Set operations. Subset. Venn Diagrams. Cartesian Products. Relations on a Set, Properties of Relations, Representing Relations using matrices and digraphs, Types of Relations, Equivalence Relation. Equivalence relation and partition on set. Closures of Relations, Warshall's algorithm. Functions, properties of functions (domain, range), composition of functions, surjective (onto), injective (one-to-one) and bijective functions, inverse of functions. Some useful functions for Computer Science: Exponential and Logarithmic functions, Polynomial functions. Ceiling and Floor functions." },
            { unit: 'II', title: 'Counting and Recurrence Relation', description: "Basics of counting. Pigeonhole principle, permutation, combination. Binomial coefficients. Binomial theorem. Recurrence relations, modelling recurrence relations with examples, like Fibonacci numbers, the tower of Hanoi problem. Solving linear recurrence relation with constant coefficients using characteristic equation roots method." },
            { unit: 'III', title: 'Elementary Graph Theory', description: "Basic terminologies of graphs, connected and disconnected graphs, subgraph, paths and cycles. complete graphs, digraphs, weighted graphs. Euler and Hamiltonian graphs. Trees, properties of trees, concept of spanning tree. Planar graphs. Definitions and basic results on the topics mentioned." },
            { unit: 'IV', title: 'Matrix Algebra', description: "Types of matrices, algebra of matrices addition, subtraction, and multiplication of matrices. determinant of a matrix, symmetric and skew-symmetric matrices, orthogonal matrix, rank of a matrix, inverse of a matrix, applications of matrices to solve system of linear equations. Eigen values and Eigen vectors. Caley-Hamilton theorem." }
          ],
          textBooks: ["Garg, Reena. Engineering Mathematics, Khanna Book Publishing Company."],
          referenceBooks: [
            "Grimaldi Ralph P. and Ramana B. V., Discrete and Combinatorial Mathematics: An Applied Introduction, Fifth Edition. Pearson Education, 2007.",
            "Rosen Kenneth H. and Krithivasan Kamala, Discrete Mathematics and its Applications, McGraw Hill, India, 2019.",
            "West Douglas B., Introduction to Graph Theory, Second Edition. Pearson Education. 2015",
            "Kolman B., Busby R. and Ross S., Discrete Mathematical Structures, 6th Edition, Pearson Education, 2015.",
            "Deo Narsingh, Graph Theory with Application to Engineering and Computer Science. Prentice Hall, India. 1979.",
            "Vasishtha A. R. and Vasishtha A. K., Matrices, Krishna Prakashan, 2022."
          ]
        }
      },
      { 
        paper: '2', 
        courseCode: '0122302', 
        courseType: 'SEC', 
        courseTitle: 'Problem Solving Techniques', 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "Understand basic terminology of computers, problem solving, programming Languages and their evolution (Understand)",
            "Create specification from problem requirements by asking questions to disambiguate the requirement statement. (Create)",
            "Design the solution from specification of a problem and write pseudo code of the algorithm using basic building blocks or structured programming constructs (Sequence, Selection and Repetition statement). (Create)",
            "Translate an algorithm into a C computer program (Create)",
            "Testing and analysing programs using debugging tools. (Analyze)"
          ],
          courseContent: [
            { unit: 'I', title: '(CO-1, CO-2)', description: "Problems And Problem Instances, Generalization and Special Cases. Types of Computational Problems. Classification of Problems, Analysis of Problems. Solution Approaches, Algorithm Development. Analysis of Algorithm, Efficiency, Correctness. Role of Data Structures in Problem Solving. Problem Solving Steps (Understand the Problem, Plan, Execute, And Review). Breaking the Problem into Subproblems, Input Output Specification, Input Validation, Pre and Post Conditions." },
            { unit: 'II', title: '(CO-2, CO-3, CO-4)', description: "Structured Programming Concepts: Sequence (Input Output Assignment), Selection (If, If Else) And Repetition (For, While, Do While) Statements, Control Structure Stacking and Nesting. Different Kinds of Repetitions: Entry Controlled, Exit Controlled, Counter Controlled, Definite, Indefinite and Sentinel-Controlled Repetitions. Pseudocode and Flowcharts. Definition And Characteristics of Algorithms. Standard Algorithm Format. Problems Involving Iteration and Nesting: Displaying Different Patterns and Shapes Using Symbols and Numbers, Generating Arithmetic and Geometric Progression, Fibonacci and Other Sequences. C Language: Introduction To Programming Languages. Different Generations of Programming Languages. Typed Vs Typeless Programming Languages. History of C Language. An Empty C Program. C language Counterparts for Input(scanf()), Output (printf()) Statements. Assignment, Arithmetic, Relational and Logical Operators. If, If Else Statements. For, While, Do-While Statements. Data Types." },
            { unit: 'III', title: '(CO-2, CO-3, CO-4)', description: "Problems on Numbers: Extracting Digits of a Number (left to Right and Right to left). Palindrome, Prime Number, Prime Factors, Amicable Number, Perfect Number, Armstrong Number. Factorial, Converting Number from One Base to Another. Statistics (Maximum, Minimum, Sum and Average) on a Sequence of Numbers which are Read using Sentinel-Controlled Repetition using only a few Variables. C Language: else-if Ladder, switch Case, Increment Decrement Operators, break and continue Statements." },
            { unit: 'IV', title: '(CO-2, CO-3, CO-4, CO-5)', description: "Modular Programming. Top-Down and Bottom-Up Approaches to Problem Solving. Recursion. Problems on Arrays: Reading and Writing of Array Elements. Maximum, Minimum, Sum, Average, Median and Mode. Sequential And Binary Search. Any one Sorting Algorithm. Matrix Operations. C Language: Function Definition and Declaration (Prototype), Role of Return Statement. One Dimensional and Two-Dimensional Arrays. String Functions, Other Operators, Operator Precedence and Associativity. Debugging." }
          ],
          textBooks: [
            "Nagaraju Y. Practical C Programming for Problem Solving, Khanna Book Publishing Company, 2021.",
            "AICTE’S Programming for Problem Solving (with Lab Manual), Khanna Book Publishing Company, 2024.",
            "Harvey Deitel and Paul Deitel, C How to Program, 9th edition, Pearson India. 2015.",
            "R G Dromey, How to Solve it by Computer."
          ],
          referenceBooks: [
            "Brian W. Kernighan and Dennis Ritchie, The C Programming Language, 2nd edition, Pearson, 2015.",
            "Jeri Hanly and Elliot Koffman, Problem Solving and Program Design in C, 8th edition, Pearson, 2015."
          ],
          labPrograms: [
            {
              title: "UNIT-II",
              problems: [
                "Converting degrees Celsius to Fahrenheit and vice versa?",
                "Display three input numbers in sorted (non-decreasing) order?",
                "Given a positive integer value n (> 0) display number, square and cube of numbers from 1 to n in a tabular format?",
                "Given an input positive integer number, display odd numbers from in the range [1,n]?"
              ]
            }
          ]
        }
      },
      { paper: '3', courseCode: '0122303', courseType: 'CCO-2', courseTitle: 'Computer Architecture', credit: '5', ltp: '3-0-4', marks: { ie: '25', prc: '25', ue: '50' }, minMarks: { ue_p_ue: '8/17', total: '40' } },
      { paper: '4', courseCode: '0122304', courseType: 'AEC-1', courseTitle: 'General English - I', credit: '2', ltp: '1-1-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { 
        paper: '5', 
        courseCode: '0122305', 
        courseType: 'MDE', 
        courseTitle: 'IKS-Indian Knowledge System', 
        credit: '2', 
        ltp: '2-0-0', 
        marks: { ie: '25', ue: '75' }, 
        minMarks: { ue_p_ue: '25', total: '40' },
        details: {
          courseObjectives: [
            "To introduce students to the rich heritage of Indian Knowledge Systems (IKS).",
            "To foster an appreciation for India's foundational contributions to various fields of knowledge.",
            "To explore the relevance of traditional Indian wisdom in the contemporary world.",
            "To encourage critical thinking about the interplay between traditional and modern knowledge systems."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction to Indian Knowledge Systems', description: "Definition, scope, and significance of IKS. Sources of IKS (Vedas, Upanishads, Puranas, etc.). The concept of 'Darshana' (philosophy). Overview of different schools of Indian philosophy (Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta)." },
            { unit: 'II', title: 'Science and Technology in Ancient India', description: "Contributions to Mathematics: The concept of zero, the decimal system, algebra (Bijaganita), geometry (Sulbasutras). Astronomy: Planetary models, astronomical calculations in Siddhantic texts. Medicine: Ayurveda - principles of Tridosha, Charaka Samhita, Sushruta Samhita and its contributions to surgery. Metallurgy and Chemistry (Rasayana)." },
            { unit: 'III', title: 'Arts, Society, and Governance', description: "Indian architecture: Temple architecture, principles of Vastu Shastra, town planning in ancient India (e.g., Harappan civilization). Performing arts: Classical music (Gandharva Veda), dance (Natya Shastra), and drama. Indian literature: The Vedas, Upanishads, Epics (Ramayana, Mahabharata), and classical Sanskrit literature. Principles of governance and ethics: Concepts of Dharma, Artha, Kama, Moksha; insights from Arthashastra and Dharmaśāstras." },
            { unit: 'IV', title: 'Health, Environment, and Modern Relevance', description: "Principles of Yoga and meditation for holistic well-being as described in the Yoga Sutras of Patanjali. Traditional Indian ecological wisdom and sustainable practices. The relevance of IKS in modern fields like cognitive science, environmental studies, and management. Case studies on the application of IKS principles today." }
          ],
          textBooks: [
            "Kapoor, Kapil. Indian Knowledge Systems. D.K. Printworld (P) Ltd, 2012.",
            "Subbarayappa, B. V. A Historical Perspective of Science in India. Rupa & Co, 2013."
          ],
          referenceBooks: [
            "Basham, A.L. The Wonder That Was India. Rupa Publications, 2010.",
            "Vivekananda, Swami. Complete Works of Swami Vivekananda. Advaita Ashrama.",
            "Kautilya. The Arthashastra. Translated by L.N. Rangarajan, Penguin Classics, 1992.",
            "Patanjali. The Yoga Sutras of Patanjali. Various translations available (e.g., by Swami Satchidananda or B.K.S. Iyengar)."
          ]
        }
      },
      { paper: '6', courseCode: '0122306', courseType: 'VAC', courseTitle: 'Environmental Science and Sustainability', credit: '2', ltp: '2-0-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { paper: '7', courseCode: '0122307', courseType: 'Bridge Course', courseTitle: 'Optional: Basic Mathematics', credit: 'Qualify', ltp: '3-1-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40 N.A.' } },
    ],
  },
  {
    id: 'sem2',
    title: 'Year - I, Semester-II',
    totalCredits: 21,
    courses: [
      { 
        paper: '1', 
        courseCode: '0222301', 
        courseType: 'CCO-1', 
        courseTitle: 'Mathematics Foundations to Computer Science-II', 
        credit: '3', 
        ltp: '3-0-0', 
        marks: { ie: '25', ue: '75' }, 
        minMarks: { ue_p_ue: '25', total: '40' },
        details: {
          courseObjectives: [
            "This course helps the students to understand correct lines of arguments and proofs.",
            "This Course introduces mathematical techniques that are Foundations for understanding advanced computational methods, including numerical methods and optimization.",
            "This course helps the students to understand various problem solving strategies and methods to tackle both theoretical and practical challenges in computer science"
          ],
          courseContent: [
            { unit: 'I', title: 'Logic and Methods of Proofs', description: "Propositions, logical operations (basic connectives), compound statements, construction of truth table, quantifiers, conditional statements, tautology, contradiction, contingency, logical equivalence. Conjunctive Normal Forms (CNF) and Disjunctive Normal Forms (DNF). Methods of proofs: Rules of inference for propositional logic, modus ponens, modus tollens, syllogism, proof by contradiction, Mathematical Induction." },
            { unit: 'II', title: 'Algebraic Structures', description: "Semi-group, Monoid, Group, Subgroup, Cyclic group." },
            { unit: 'III', title: 'Numerical Methods', description: "Concept and importance of errors in numerical methods. Solution of algebraic and transcendental equations: Bisection method and Newton-Raphson methods. Numerical Interpolation: Newton's Forward and Newton's Backward interpolation Formula and Lagrange's formula. Numerical Integration: Trapezoidal rule and Simpson's 1/3 rule Only formula and problem solving for all the topics mentioned above." },
            { unit: 'IV', title: 'Optimization Techniques', description: "Linear programming: Introduction, L.P formulation, Graphical method for solving LPs with two variables. Special cases in graphical methods. Simplex method Duality. Transportation problem: Definition, Linear form, North west corner method, Least cost method, Vogel's approximation method for finding feasible solution, MODI method for finding optimum solution." }
          ],
          textBooks: [
            "Kolman B., Busby R. and Ross S., Discrete Mathematical Structures, 6th Edition."
          ]
        }
      },
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
// NOTE: Detailed content for courses in Semesters 3 through 6 has been omitted for brevity in this example,
// but can be added following the same structure as Semesters 1 and 2.
// The interactive functionality will work for any course that has a 'details' object.