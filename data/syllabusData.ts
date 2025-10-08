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
      { 
        paper: '3', 
        courseCode: '0122303', 
        courseType: 'CCO-2', 
        courseTitle: 'Computer Architecture', 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "To understand the structure, function and characteristics of computer systems.",
            "To understand the design of the various functional units and components of computers.",
            "To identify the elements of modern instruction sets and their impact on processor design.",
            "To explain the function of each element of a memory hierarchy, and to identify and compare the different methods for computer I/O."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction to Computer Organization', description: "Functional units of a computer: CPU, memory, I/O devices. Von Neumann architecture. Instruction execution cycle. Data representation: Binary, octal, hexadecimal number systems, fixed and floating-point numbers, character codes (ASCII, Unicode). Complements. Boolean algebra and logic gates." },
            { unit: 'II', title: 'Digital Logic Circuits', description: "Combinational circuits: Adders, subtractors, multiplexers, decoders. Sequential circuits: Flip-flops (SR, D, JK, T), registers, counters. Introduction to micro-operations: Register transfer language, bus and memory transfers." },
            { unit: 'III', title: 'CPU Organization', description: "General register organization, stack organization, instruction formats (zero, one, two, three address). Addressing modes. Data transfer and manipulation instructions. Program control instructions. Introduction to RISC and CISC architectures." },
            { unit: 'IV', title: 'Memory and I/O Organization', description: "Memory hierarchy: Main memory, cache memory, auxiliary memory. Memory mapping techniques. Virtual memory. Input-Output interface, modes of transfer: Programmed I/O, Interrupt-driven I/O, Direct Memory Access (DMA)." }
          ],
          textBooks: ["Mano, M. Morris. Computer System Architecture. 3rd ed., Pearson Education, 2007."],
          referenceBooks: [
            "Stallings, William. Computer Organization and Architecture: Designing for Performance. 10th ed., Pearson, 2016.",
            "Patterson, David A., and John L. Hennessy. Computer Organization and Design: The Hardware/Software Interface. 5th ed., Morgan Kaufmann, 2013."
          ],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "Implementation of basic logic gates.",
              "Implementation of a Full Adder and Subtractor.",
              "Design of a 4-bit magnitude comparator.",
              "Design of a 4x1 multiplexer.",
              "Simulation of a simple CPU architecture."
            ]}
          ]
        }
      },
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
      { 
        paper: '2', 
        courseCode: '0222302', 
        courseType: 'SEC', 
        courseTitle: 'Data Structures', 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "To understand the basic concepts of data structures and algorithms.",
            "To learn to implement linear and non-linear data structures.",
            "To be able to analyze the efficiency of algorithms.",
            "To choose appropriate data structures for solving problems."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction to Data Structures', description: "Abstract Data Types (ADT), Arrays: single and multi-dimensional arrays, address calculation. Linked Lists: singly, doubly and circular linked lists, basic operations (insertion, deletion, traversal)." },
            { unit: 'II', title: 'Stacks and Queues', description: "Stacks: operations, array and linked representations, applications (infix to postfix conversion, recursion). Queues: operations, array and linked representations, circular queues, priority queues, deques." },
            { unit: 'III', title: 'Trees', description: "Basic terminology, binary trees, binary tree representation, traversals (in-order, pre-order, post-order). Binary Search Trees (BST): operations (search, insert, delete). Introduction to AVL trees and B-trees." },
            { unit: 'IV', title: 'Graphs and Hashing', description: "Graphs: terminology, representation (adjacency matrix, adjacency list). Graph traversal algorithms: Breadth-First Search (BFS) and Depth-First Search (DFS). Hashing: hash functions, collision resolution techniques." }
          ],
          textBooks: ["Lipschutz, Seymour. Data Structures with C. Schaum's Outlines, McGraw Hill, 2017."],
          referenceBooks: [
            "Horowitz, Ellis, Sahni, Sartaj, and Anderson-Freed, Susan. Fundamentals of Data Structures in C. 2nd ed., Universities Press, 2008.",
            "Kruse, Robert L., Tondo, Clovis L., and Leung, Bruce P. Data Structures and Program Design in C. 2nd ed., Pearson, 2007."
          ],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "Implementation of Stack and Queue using arrays and linked lists.",
              "Implementation of Singly, Doubly, and Circular Linked Lists.",
              "Implementation of Binary Search Tree and its traversals.",
              "Implementation of BFS and DFS on a graph.",
              "Implementation of hashing with collision resolution."
            ]}
          ]
        }
      },
      { 
        paper: '3', 
        courseCode: '0222303', 
        courseType: 'CCO-2', 
        courseTitle: 'Operating Systems', 
        credit: '4', 
        ltp: '3-0-2', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "To understand the main components and services of an operating system.",
            "To study the concepts of process management, CPU scheduling, and synchronization.",
            "To learn about memory management techniques and virtual memory.",
            "To understand file systems, I/O management, and disk scheduling."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction to Operating Systems', description: "Definition, goals, and functions of an OS. Evolution of operating systems. Types of OS: Batch, Multiprogrammed, Timesharing, Real-time, Distributed. OS services and system calls." },
            { unit: 'II', title: 'Process Management', description: "Process concept, process state, Process Control Block (PCB). CPU scheduling: scheduling criteria, scheduling algorithms (FCFS, SJF, Priority, Round Robin). Interprocess communication. Process synchronization: The critical-section problem, semaphores. Deadlocks: characterization, prevention, avoidance, detection, and recovery." },
            { unit: 'III', title: 'Memory Management', description: "Logical vs. physical address space. Swapping. Contiguous memory allocation: MFT, MVT. Paging, segmentation. Virtual memory: demand paging, page replacement algorithms (FIFO, Optimal, LRU)." },
            { unit: 'IV', title: 'File and I/O Management', description: "File concept, access methods, directory structure. File system implementation. Disk structure, disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN). I/O hardware, I/O services." }
          ],
          textBooks: ["Silberschatz, Abraham, Galvin, Peter B., and Gagne, Greg. Operating System Concepts. 10th ed., Wiley, 2018."],
          referenceBooks: ["Stallings, William. Operating Systems: Internals and Design Principles. 9th ed., Pearson, 2017."],
          labPrograms: [
            { title: "Lab Exercises", problems: [
                "Implementation of CPU scheduling algorithms (FCFS, SJF, Round Robin).",
                "Implementation of the producer-consumer problem using semaphores.",
                "Implementation of a deadlock detection algorithm.",
                "Implementation of page replacement algorithms (FIFO, LRU).",
                "Implementation of disk scheduling algorithms (SCAN, C-SCAN)."
            ]}
          ]
        }
      },
      { 
        paper: '4', 
        courseCode: '0222304', 
        courseType: 'AEC-1', 
        courseTitle: 'Object Oriented Programming using Java', 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "To understand the principles of Object-Oriented Programming (OOP).",
            "To learn the syntax, features, and libraries of the Java programming language.",
            "To be able to write robust applications using exception handling and multithreading.",
            "To gain introductory knowledge of GUI programming in Java."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction to OOP and Java', description: "OOP concepts: Abstraction, Encapsulation, Inheritance, Polymorphism. History of Java, Java features (platform independence, etc.). Java Virtual Machine (JVM). Basic Java program structure. Data types, variables, operators, and control flow." },
            { unit: 'II', title: 'Classes, Objects, and Inheritance', description: "Defining classes, creating objects, constructors, methods. `this` keyword. Garbage collection. Inheritance: superclass and subclass, `super` keyword, method overriding. Abstract classes and methods, final keyword." },
            { unit: 'III', title: 'Packages, Interfaces, and Exception Handling', description: "Packages: defining, creating, and accessing packages. Interfaces: defining and implementing interfaces. Exception handling: try-catch-finally blocks, throwing and creating custom exceptions." },
            { unit: 'IV', title: 'Multithreading and Applets', description: "Multithreading: creating threads by extending Thread class and implementing Runnable interface, thread lifecycle, synchronization. Introduction to Applets: Applet lifecycle, creating and running applets." }
          ],
          textBooks: ["Schildt, Herbert. Java: The Complete Reference. 12th ed., McGraw Hill, 2021."],
          referenceBooks: ["Horstmann, Cay S. Core Java Volume I – Fundamentals. 12th ed., Prentice Hall, 2021."],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "Write a program to demonstrate class, object, and constructor.",
              "Write a program to demonstrate single and multilevel inheritance.",
              "Write a program to demonstrate method overriding and interfaces.",
              "Write a program for exception handling using try-catch blocks.",
              "Write a program to implement multithreading."
            ]}
          ]
        }
      },
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
      { 
        paper: '1', 
        courseCode: '0322301', 
        courseType: 'CCO', 
        courseTitle: 'Probability and Statistics', 
        credit: '3', 
        ltp: '3-0-0', 
        marks: { ie: '25', ue: '75' }, 
        minMarks: { ue_p_ue: '25', total: '40' },
        details: {
          courseObjectives: [
            "To understand the fundamental concepts of probability theory.",
            "To learn about various probability distributions and their properties.",
            "To apply statistical methods for data analysis and inference.",
            "To understand the concepts of correlation and regression."
          ],
          courseContent: [
            { unit: 'I', title: 'Basic Probability', description: "Sample space, events, axiomatic definition of probability. Conditional probability, independence of events, Bayes' theorem." },
            { unit: 'II', title: 'Random Variables and Distributions', description: "Discrete and continuous random variables, probability mass function (PMF), probability density function (PDF), cumulative distribution function (CDF). Expectation, variance. Common distributions: Binomial, Poisson, Normal." },
            { unit: 'III', title: 'Statistical Inference', description: "Population and sample. Sampling distributions, Central Limit Theorem. Point estimation. Interval estimation for mean. Introduction to hypothesis testing: null and alternative hypotheses, Type I and Type II errors, p-value." },
            { unit: 'IV', title: 'Correlation and Regression', description: "Bivariate data, scatter plot. Correlation: Karl Pearson's coefficient of correlation. Regression: lines of regression, principle of least squares." }
          ],
          textBooks: ["Gupta, S.C., and Kapoor, V.K. Fundamentals of Mathematical Statistics. Sultan Chand & Sons, 2020."],
          referenceBooks: ["Walpole, Ronald E., et al. Probability & Statistics for Engineers & Scientists. 9th ed., Pearson, 2012."]
        }
      },
      { 
        paper: '2', 
        courseCode: '0322302', 
        courseType: 'CCO', 
        courseTitle: 'Data Base Management System', 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "To understand the fundamental concepts of database management systems.",
            "To learn data modeling using the Entity-Relationship (ER) model.",
            "To master the use of Structured Query Language (SQL) for database manipulation.",
            "To understand the principles of database normalization and transaction management."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction to DBMS', description: "File system vs. DBMS. Three-schema architecture. Data models (relational, hierarchical, network). Database languages (DDL, DML, DCL)." },
            { unit: 'II', title: 'Relational Model and ER Diagrams', description: "Relational model concepts: relations, attributes, keys (primary, foreign, candidate). ER model: entities, attributes, relationships, mapping ER diagrams to relational schema." },
            { unit: 'III', title: 'Structured Query Language (SQL)', description: "DDL commands: CREATE, ALTER, DROP. DML commands: SELECT, INSERT, UPDATE, DELETE. Joins, aggregate functions, subqueries, views." },
            { unit: 'IV', title: 'Normalization and Transactions', description: "Functional dependencies. Normal forms: 1NF, 2NF, 3NF, BCNF. Transaction concepts, ACID properties. Introduction to concurrency control." }
          ],
          textBooks: ["Korth, Henry F., Silberschatz, Abraham, and Sudarshan, S. Database System Concepts. 7th ed., McGraw Hill, 2019."],
          referenceBooks: ["Navathe, Shamkant B., and Elmasri, Ramez. Fundamentals of Database Systems. 7th ed., Pearson, 2017."],
          labPrograms: [
            { title: "SQL Lab Exercises", problems: [
              "Creating and managing tables using DDL.",
              "Inserting, updating, and deleting data using DML.",
              "Writing simple and complex SELECT queries.",
              "Performing JOIN operations on multiple tables.",
              "Using subqueries and aggregate functions."
            ]}
          ]
        }
      },
      { 
        paper: '3', 
        courseCode: '0322303', 
        courseType: 'SEC', 
        courseTitle: 'Python Programming', 
        credit: '4', 
        ltp: '2-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "To learn the fundamentals of Python programming.",
            "To understand and use Python's built-in data structures.",
            "To learn to write functions and object-oriented programs in Python.",
            "To gain experience with file handling and standard libraries."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction to Python', description: "Python installation, interpreter. Variables, expressions, statements. Data types: integers, floats, strings. Basic operators. Input/Output." },
            { unit: 'II', title: 'Control Flow and Data Structures', description: "Conditional execution (if-elif-else). Iteration (for, while). Data Structures: lists, tuples, dictionaries, sets. Operations and methods." },
            { unit: 'III', title: 'Functions and Modules', description: "Defining and calling functions. Function arguments. Scope of variables. Importing modules. Standard library modules (math, random, os)." },
            { unit: 'IV', title: 'Object-Oriented Programming and File I/O', description: "Classes and objects. Methods, constructors (`__init__`). Inheritance. Reading and writing files. Exception handling." }
          ],
          textBooks: ["Lutz, Mark. Learning Python. 5th ed., O'Reilly Media, 2013."],
          referenceBooks: ["Downey, Allen B. Think Python: How to Think Like a Computer Scientist. 2nd ed., O'Reilly Media, 2015."],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "Programs using control flow statements.",
              "Programs demonstrating use of lists, dictionaries, and tuples.",
              "Write user-defined functions to perform specific tasks.",
              "Create a simple class with methods and objects.",
              "A program that reads from a file and writes to another."
            ]}
          ]
        }
      },
      { 
        paper: '4', 
        courseCode: '0322304', 
        courseType: 'CCO', 
        courseTitle: 'Software Engineering', 
        credit: '3', 
        ltp: '3-0-0', 
        marks: { ie: '25', ue: '75' }, 
        minMarks: { ue_p_ue: '25', total: '40' },
        details: {
          courseObjectives: [
            "To understand the principles and practices of software engineering.",
            "To learn about various software development life cycle (SDLC) models.",
            "To understand the process of requirements gathering, analysis, and design.",
            "To get an overview of software testing and quality assurance."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction to Software Engineering', description: "Software crisis, software myths. Software process. SDLC models: Waterfall, Prototyping, Spiral, Agile models (Scrum, XP)." },
            { unit: 'II', title: 'Requirements Engineering', description: "Functional and non-functional requirements. Requirements elicitation and analysis. Software Requirements Specification (SRS) document." },
            { unit: 'III', title: 'Software Design', description: "Design principles. Cohesion and coupling. Architectural design. Introduction to UML: Use Case, Class, and Sequence diagrams." },
            { unit: 'IV', title: 'Software Testing', description: "Testing objectives. Levels of testing: Unit, Integration, System, Acceptance. Testing techniques: Black-box and White-box testing. Introduction to software quality assurance (SQA)." }
          ],
          textBooks: ["Pressman, Roger S., and Maxim, Bruce R. Software Engineering: A Practitioner's Approach. 9th ed., McGraw-Hill Education, 2019."],
          referenceBooks: ["Sommerville, Ian. Software Engineering. 10th ed., Pearson, 2016."]
        }
      },
      { 
        paper: '5', 
        courseCode: '0322305-07', 
        courseType: 'DSE-1', 
        courseTitle: 'Any one of the following', 
        options: ['1. Basics of Data Analytics using Spreadsheet', '2. Feature Engineering', '3. Web Programming-I'], 
        credit: '3', 
        ltp: '1-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "**For Basics of Data Analytics using Spreadsheet:** To use spreadsheet software for data manipulation, analysis, and visualization.",
            "**For Feature Engineering:** To understand the process of creating and selecting relevant features for machine learning models.",
            "**For Web Programming-I:** To build static web pages using HTML, CSS, and basic JavaScript."
          ],
          courseContent: [
            { unit: 'Elective', title: 'Syllabus for Elective Options', description: `
---
### Option 1: Basics of Data Analytics using Spreadsheet
**Unit I: Spreadsheet Fundamentals:** Cells, formulas, functions (mathematical, statistical, logical). Data sorting and filtering.
**Unit II: Data Visualization:** Creating charts and graphs (bar, line, pie). Conditional formatting.
**Unit III: Advanced Tools:** PivotTables and PivotCharts for data summarization. What-If Analysis (Goal Seek, Scenarios).
**Unit IV: Data Analysis:** Using the Analysis ToolPak for descriptive statistics, regression. Introduction to macros.
---
### Option 2: Feature Engineering
**Unit I: Introduction:** What is a feature? Importance of feature engineering. Data types.
**Unit II: Feature Cleaning & Transformation:** Handling missing values. Outlier detection. Scaling (Standardization, Normalization). Encoding categorical variables (One-Hot, Label).
**Unit III: Feature Creation:** Creating new features from existing ones (e.g., binning, polynomial features).
**Unit IV: Feature Selection:** Filter methods (chi-squared), Wrapper methods (Recursive Feature Elimination), Embedded methods (Lasso).
---
### Option 3: Web Programming-I
**Unit I: HTML5:** Structure of a web page. Common tags (headings, paragraphs, lists, links, images, tables, forms).
**Unit II: CSS3:** Selectors, properties. Box model. Layouts (Flexbox, Grid). Responsive design with media queries.
**Unit III: JavaScript Basics:** Variables, data types, operators. Control flow. Functions.
**Unit IV: DOM Manipulation:** Accessing and modifying HTML elements. Handling events (clicks, mouseover, etc.). Basic form validation.
            ` }
          ],
          textBooks: [
            "**For Spreadsheet:** Walkenbach, John. Excel Bible. Wiley.",
            "**For Feature Engineering:** Zheng, Alice, and Casari, Amanda. Feature Engineering for Machine Learning. O'Reilly Media.",
            "**For Web Programming-I:** Duckett, Jon. HTML and CSS: Design and Build Websites. Wiley."
          ],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "**For Spreadsheet:** Creating a dashboard with PivotCharts; using Goal Seek.",
              "**For Feature Engineering:** Applying scaling and encoding techniques on a dataset using Python libraries.",
              "**For Web Programming-I:** Building a personal portfolio website."
            ]}
          ]
        }
      },
      { paper: '6', courseCode: 'N/A', courseType: 'VAC', courseTitle: 'Yoga/Sports/NCC/NSS/Disaster Management', credit: '2', ltp: '0-0-4', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
    ],
  },
  {
    id: 'sem4',
    title: 'Year - II, Semester-IV',
    totalCredits: 20,
    courses: [
      { paper: '1', courseCode: '0422301', courseType: 'CCO', courseTitle: 'Entrepreneurship and Startup Ecosystem', credit: '2', ltp: '1-1-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { 
        paper: '2', 
        courseCode: '0422302', 
        courseType: 'CCO', 
        courseTitle: 'Computer Networks', 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "To understand the fundamentals of computer networking and the layered architecture.",
            "To learn the functions and protocols of different layers in the TCP/IP and OSI models.",
            "To gain knowledge of IP addressing and routing.",
            "To understand common application layer protocols."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction and Physical Layer', description: "Network topologies. Layered architecture: OSI and TCP/IP models. Transmission media. " },
            { unit: 'II', title: 'Data Link Layer', description: "Error detection and correction. Framing. Flow and error control. Medium Access Control (MAC) protocols: ALOHA, CSMA/CD (Ethernet)." },
            { unit: 'III', title: 'Network Layer', description: "IP addressing (IPv4), subnetting. Routing algorithms (Distance Vector, Link State). Protocols: IP, ICMP, ARP." },
            { unit: 'IV', title: 'Transport and Application Layers', description: "Transport layer protocols: TCP and UDP. Congestion control. Application layer protocols: HTTP, FTP, SMTP, DNS." }
          ],
          textBooks: ["Tanenbaum, Andrew S., and Wetherall, David J. Computer Networks. 5th ed., Pearson, 2011."],
          referenceBooks: ["Kurose, James F., and Ross, Keith W. Computer Networking: A Top-Down Approach. 7th ed., Pearson, 2017."],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "Using network commands (ping, ipconfig, tracert).",
              "Simulating network topologies using tools like Cisco Packet Tracer.",
              "Implementing basic socket programming (client-server).",
              "Analyzing network packets with Wireshark."
            ]}
          ]
        }
      },
      { 
        paper: '3', 
        courseCode: '0422303', 
        courseType: 'CCO', 
        courseTitle: 'Design and Analysis of Algorithm', 
        credit: '3', 
        ltp: '3-0-0', 
        marks: { ie: '25', ue: '75' }, 
        minMarks: { ue_p_ue: '25', total: '40' },
        details: {
          courseObjectives: [
            "To learn how to analyze the time and space complexity of algorithms.",
            "To understand major algorithm design paradigms: divide-and-conquer, greedy, and dynamic programming.",
            "To gain knowledge of graph algorithms.",
            "To get an introduction to the theory of NP-completeness."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction and Analysis', description: "Role of algorithms in computing. Asymptotic notations (Big-O, Omega, Theta). Analyzing algorithms, solving recurrence relations (Master theorem)." },
            { unit: 'II', title: 'Divide and Conquer & Greedy Algorithms', description: "Divide and Conquer: Binary Search, Quick Sort, Merge Sort. Greedy Algorithms: Knapsack problem, Huffman codes." },
            { unit: 'III', title: 'Dynamic Programming', description: "Matrix-chain multiplication, Longest Common Subsequence, 0/1 Knapsack problem." },
            { unit: 'IV', title: 'Graph Algorithms and NP-Completeness', description: "Minimum Spanning Trees (Kruskal's, Prim's). Shortest Paths (Dijkstra's). Introduction to NP-completeness." }
          ],
          textBooks: ["Cormen, Thomas H., et al. Introduction to Algorithms. 3rd ed., MIT Press, 2009."],
          referenceBooks: ["Kleinberg, Jon, and Tardos, Éva. Algorithm Design. Pearson, 2006."]
        }
      },
      { 
        paper: '4', 
        courseCode: '0422304', 
        courseType: 'CCO', 
        courseTitle: 'Artificial Intelligence', 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "To understand the fundamental concepts of Artificial Intelligence.",
            "To learn about problem-solving using search techniques.",
            "To understand knowledge representation and reasoning.",
            "To get an introduction to machine learning and expert systems."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction to AI', description: "History of AI. Intelligent agents. State space search. Uninformed search algorithms (BFS, DFS)." },
            { unit: 'II', title: 'Heuristic Search Techniques', description: "Informed search algorithms: Greedy best-first search, A* search. Adversarial search: Minimax algorithm, Alpha-Beta pruning." },
            { unit: 'III', title: 'Knowledge Representation', description: "Propositional logic, first-order logic. Inference in first-order logic. Rule-based systems." },
            { unit: 'IV', title: 'Machine Learning and Expert Systems', description: "Introduction to machine learning: supervised, unsupervised, and reinforcement learning. Introduction to expert systems: architecture and applications." }
          ],
          textBooks: ["Russell, Stuart J., and Norvig, Peter. Artificial Intelligence: A Modern Approach. 4th ed., Pearson, 2020."],
          referenceBooks: ["Luger, George F. Artificial Intelligence: Structures and Strategies for Complex Problem Solving. 6th ed., Pearson, 2009."],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "Implement BFS and DFS algorithms.",
              "Implement A* search algorithm for a puzzle.",
              "Develop a simple rule-based expert system.",
              "Implement a basic machine learning algorithm (e.g., K-Nearest Neighbors)."
            ]}
          ]
        }
      },
      { 
        paper: '5', 
        courseCode: '0422305-07', 
        courseType: 'DSE-2', 
        courseTitle: 'Any one of the following', 
        options: ['1. Data Visualisation', '2. Introduction to Machine Learning', '3. Web Programming-II'], 
        credit: '3', 
        ltp: '1-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "**For Data Visualisation:** To learn the principles of effective data visualization and use tools to create insightful charts and dashboards.",
            "**For Introduction to Machine Learning:** To understand the basic concepts of ML and implement fundamental supervised and unsupervised algorithms.",
            "**For Web Programming-II:** To build dynamic, single-page web applications using a modern JavaScript framework."
          ],
          courseContent: [
            { unit: 'Elective', title: 'Syllabus for Elective Options', description: `
---
### Option 1: Data Visualisation
**Unit I: Principles of Visualization:** Grammar of Graphics. Data types. Chart types and their usage (bar, line, scatter, histogram, etc.).
**Unit II: Visualization Tools:** Introduction to tools like Tableau, Power BI, or Python libraries (Matplotlib, Seaborn).
**Unit III: Dashboard Design:** Principles of designing effective dashboards. Interactivity.
**Unit IV: Storytelling with Data:** How to present data effectively to convey a message and drive decisions.
---
### Option 2: Introduction to Machine Learning
**Unit I: Introduction:** What is ML? Supervised, unsupervised, reinforcement learning. Model evaluation metrics.
**Unit II: Supervised Learning (Regression):** Simple and Multiple Linear Regression.
**Unit III: Supervised Learning (Classification):** Logistic Regression, K-Nearest Neighbors (KNN), Decision Trees.
**Unit IV: Unsupervised Learning:** K-Means Clustering.
---
### Option 3: Web Programming-II
**Unit I: Advanced JavaScript:** ES6+ features (let/const, arrow functions, promises, async/await).
**Unit II: Introduction to React:** Components, JSX, props, state. Component lifecycle.
**Unit III: React Hooks and State Management:** useState, useEffect. Handling events. Conditional rendering.
**Unit IV: Introduction to Server-Side:** Basics of Node.js and Express. Creating a simple REST API. Connecting React front-end to a back-end.
            ` }
          ],
          textBooks: [
            "**For Data Viz:** Wilke, Claus O. Fundamentals of Data Visualization. O'Reilly Media.",
            "**For ML:** Müller, Andreas C., and Guido, Sarah. Introduction to Machine Learning with Python. O'Reilly Media.",
            "**For Web Prog-II:** Banks, Alex, and Porcello, Eve. Learning React. O'Reilly Media."
          ],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "**For Data Viz:** Create an interactive dashboard in Tableau or with a Python library.",
              "**For ML:** Implement Linear Regression and K-Means clustering from scratch or using Scikit-learn.",
              "**For Web Prog-II:** Build a simple To-Do List application using React."
            ]}
          ]
        }
      },
      { paper: '6', courseCode: '0422308', courseType: 'SEC', courseTitle: 'Design Thinking and Innovation', credit: '2', ltp: '1-1-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
    ],
  },
  {
    id: 'sem5',
    title: 'Year - III, Semester-V',
    totalCredits: 19,
    courses: [
      { 
        paper: '1', 
        courseCode: '0522301-02', 
        courseType: 'DSE1', 
        courseTitle: 'Any one of the following', 
        options: ['1. Introduction to Data Science', '2. Neural Network'], 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "**For Introduction to Data Science:** To understand the data science lifecycle and work with data using Python libraries.",
            "**For Neural Network:** To understand the theory behind neural networks and build basic models for classification and regression."
          ],
          courseContent: [
            { unit: 'Elective', title: 'Syllabus for Elective Options', description: `
---
### Option 1: Introduction to Data Science
**Unit I: Introduction:** What is Data Science? The Data Science lifecycle. Roles in data science.
**Unit II: Python for Data Science:** Introduction to NumPy for numerical computation.
**Unit III: Data Manipulation with Pandas:** Pandas Series and DataFrame. Reading and writing data. Data cleaning, filtering, grouping, and merging.
**Unit IV: Data Visualization with Matplotlib/Seaborn:** Creating various plots to explore and present data.
---
### Option 2: Neural Network
**Unit I: Introduction:** The neuron, activation functions (sigmoid, ReLU). Perceptron.
**Unit II: Feedforward Neural Networks:** Multilayer Perceptrons (MLP). Backpropagation algorithm for training.
**Unit III: Training Neural Networks:** Gradient descent, stochastic gradient descent. Overfitting and regularization techniques (e.g., dropout).
**Unit IV: Introduction to Deep Learning Frameworks:** Building a simple neural network using TensorFlow or PyTorch.
            ` }
          ],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "**For Data Science:** Perform exploratory data analysis (EDA) on a real-world dataset using Pandas and Matplotlib.",
              "**For Neural Network:** Build and train a neural network for a simple classification task (e.g., MNIST dataset)."
            ]}
          ]
        }
      },
      { 
        paper: '2', 
        courseCode: '0522303-04', 
        courseType: 'DSE2', 
        courseTitle: 'Any one of the following', 
        options: ['1. Time Series Analysis', '2. Digital Image Processing'], 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "**For Time Series Analysis:** To understand and model time-dependent data for forecasting.",
            "**For Digital Image Processing:** To learn the fundamentals of image processing and perform basic operations on images."
          ],
          courseContent: [
            { unit: 'Elective', title: 'Syllabus for Elective Options', description: `
---
### Option 1: Time Series Analysis
**Unit I: Introduction:** Components of a time series (trend, seasonality, cyclic, irregular). Stationarity.
**Unit II: Smoothing Methods:** Moving Averages, Exponential Smoothing.
**Unit III: ARIMA Models:** Autoregressive (AR), Moving Average (MA), and Autoregressive Integrated Moving Average (ARIMA) models.
**Unit IV: Forecasting:** Using fitted models to make future predictions. Evaluating forecast accuracy.
---
### Option 2: Digital Image Processing
**Unit I: Fundamentals:** Digital image representation, pixels, color models (RGB, grayscale).
**Unit II: Image Enhancement:** Histogram equalization, contrast stretching. Spatial filtering (smoothing, sharpening).
**Unit III: Image Segmentation:** Point, line, and edge detection. Thresholding. Region-based segmentation.
**Unit IV: Morphological Image Processing:** Erosion, Dilation, Opening, Closing.
            ` }
          ],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "**For Time Series:** Decompose a time series and fit an ARIMA model for forecasting.",
              "**For Image Processing:** Implement histogram equalization and apply spatial filters to an image."
            ]}
          ]
        }
      },
      { 
        paper: '3', 
        courseCode: '0522305-06', 
        courseType: 'DSE3', 
        courseTitle: 'Any one of the following', 
        options: ['1. Machine Learning', '2. Natural Language Processing'], 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "**For Machine Learning:** To gain a deeper understanding of ML algorithms and their practical applications.",
            "**For Natural Language Processing:** To understand how computers process and analyze human language."
          ],
          courseContent: [
            { unit: 'Elective', title: 'Syllabus for Elective Options', description: `
---
### Option 1: Machine Learning
**Unit I: Supervised Learning:** Support Vector Machines (SVM), Naive Bayes.
**Unit II: Ensemble Methods:** Bagging (Random Forest), Boosting (AdaBoost, Gradient Boosting).
**Unit III: Unsupervised Learning:** Dimensionality Reduction (PCA). Hierarchical Clustering.
**Unit IV: Model Evaluation and Selection:** Cross-validation, hyperparameter tuning.
---
### Option 2: Natural Language Processing
**Unit I: Introduction & Text Preprocessing:** NLP tasks. Tokenization, stemming, lemmatization, stop word removal.
**Unit II: Language Modeling & Representation:** Bag-of-Words, TF-IDF. N-grams. Word embeddings (Word2Vec).
**Unit III: NLP Tasks:** Part-of-Speech (POS) tagging. Named Entity Recognition (NER).
**Unit IV: Applications:** Sentiment analysis. Text classification.
            ` }
          ],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "**For ML:** Implement Random Forest and SVM on a classification problem and compare their performance.",
              "**For NLP:** Build a sentiment analysis model for movie reviews."
            ]}
          ]
        }
      },
      { paper: '4', courseCode: '0522307', courseType: 'SEC1', courseTitle: 'Quantitative Techniques', credit: '2', ltp: '2-0-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { 
        paper: '5', 
        courseCode: '0522360', 
        courseType: 'SEC2', 
        courseTitle: 'Internship/Capstone Project', 
        credit: '4', 
        ltp: '0-0-8', 
        marks: { ie: '50', ue: '150' }, 
        minMarks: { ue_p_ue: '75', total: '100' },
        details: {
          courseObjectives: [
            "To provide students with an opportunity to apply their academic knowledge in a real-world or simulated professional setting.",
            "To develop practical skills, problem-solving abilities, and professional conduct.",
            "To complete a substantial project from conception to documentation."
          ],
          courseContent: [
            { unit: 'I', title: 'Project Proposal', description: "Identification of a problem. Literature survey. Defining project scope, objectives, and deliverables. Submission of a project proposal." },
            { unit: 'II', title: 'Design and Development', description: "System analysis and design. Implementation of the proposed solution using appropriate technologies and tools. Regular progress reporting." },
            { unit: 'III', title: 'Testing and Evaluation', description: "Thorough testing of the project. Evaluation of results against objectives. Performance analysis." },
            { unit: 'IV', title: 'Documentation and Presentation', description: "Preparation of a detailed project report. Final presentation and demonstration (viva voce)." }
          ]
        }
      },
      { paper: '6', courseCode: '0522365', courseType: 'SEC', courseTitle: 'Major Project-I', credit: '0', ltp: 'N/A', marks: { ie: 'N/A', ue: 'N/A' }, minMarks: { ue_p_ue: 'N/A', total: 'N/A' } },
    ],
  },
  {
    id: 'sem6',
    title: 'Year - III, Semester-VI',
    totalCredits: 19,
    courses: [
      { 
        paper: '1', 
        courseCode: '0622301', 
        courseType: 'CCO', 
        courseTitle: 'Generative AI', 
        credit: '4', 
        ltp: '2-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "To understand the fundamentals of Generative AI and its models.",
            "To learn about the architecture and working of Generative Adversarial Networks (GANs) and Transformers.",
            "To explore the concepts behind Large Language Models (LLMs).",
            "To gain practical experience in using Generative AI tools and APIs."
          ],
          courseContent: [
            { unit: 'I', title: 'Introduction to Generative AI', description: "What is Generative AI? Discriminative vs. Generative models. Applications of Generative AI. Variational Autoencoders (VAEs)." },
            { unit: 'II', title: 'Generative Adversarial Networks (GANs)', description: "Architecture of GANs (Generator, Discriminator). Training GANs. Challenges (e.g., mode collapse). Introduction to different GAN variants." },
            { unit: 'III', title: 'Transformers and Large Language Models (LLMs)', description: "Attention mechanism. Transformer architecture. Evolution of LLMs (e.g., GPT series). How LLMs work." },
            { unit: 'IV', title: 'Applying Generative AI', description: "Prompt engineering techniques. Fine-tuning models. Using Generative AI APIs for text generation, image creation, and other tasks. Ethical considerations in Generative AI." }
          ],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "Use a pre-trained GAN to generate images.",
              "Experiment with an LLM API (like Gemini) for text generation with different prompts.",
              "Create a simple image generation application using a pre-trained model.",
              "Explore prompt engineering for a specific task like code generation or summarization."
            ]}
          ]
        }
      },
      { 
        paper: '2', 
        courseCode: '0622302-03', 
        courseType: 'DSE1', 
        courseTitle: 'Any one of the following', 
        options: ['1. Big Data analytics', '2. Deep Learning for Computer Vision'], 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "**For Big Data analytics:** To understand the Big Data ecosystem and use tools to process and analyze large datasets.",
            "**For Deep Learning for Computer Vision:** To learn about deep learning models for image-related tasks."
          ],
          courseContent: [
            { unit: 'Elective', title: 'Syllabus for Elective Options', description: `
---
### Option 1: Big Data Analytics
**Unit I: Introduction to Big Data:** The 3 V's (Volume, Velocity, Variety). Big Data challenges. Hadoop ecosystem overview.
**Unit II: Hadoop and HDFS:** Hadoop Distributed File System (HDFS) architecture. MapReduce programming model.
**Unit III: Apache Spark:** Introduction to Spark. Resilient Distributed Datasets (RDDs). Spark SQL.
**Unit IV: Big Data Applications:** Introduction to NoSQL databases. Data streaming with tools like Kafka.
---
### Option 2: Deep Learning for Computer Vision
**Unit I: Convolutional Neural Networks (CNNs):** Convolution and pooling layers. Building a CNN.
**Unit II: Modern CNN Architectures:** LeNet, AlexNet, VGG, ResNet.
**Unit III: Transfer Learning:** Using pre-trained models for new tasks. Fine-tuning.
**Unit IV: Object Detection and Segmentation:** Introduction to object detection algorithms (e.g., YOLO). Image segmentation concepts.
            ` }
          ],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "**For Big Data:** Write a simple MapReduce program; run queries on a dataset using Spark SQL.",
              "**For Computer Vision:** Build a CNN for image classification; use a pre-trained model for transfer learning."
            ]}
          ]
        }
      },
      { 
        paper: '3', 
        courseCode: '0622304-05', 
        courseType: 'DSE2', 
        courseTitle: 'Any one of the following', 
        options: ['1. Exploratory Data Analysis', '2. Predictive Analysis'], 
        credit: '5', 
        ltp: '3-0-4', 
        marks: { ie: '25', prc: '25', ue: '50' }, 
        minMarks: { ue_p_ue: '8/17', total: '40' },
        details: {
          courseObjectives: [
            "**For Exploratory Data Analysis:** To learn techniques for exploring, visualizing, and summarizing datasets to uncover patterns and insights.",
            "**For Predictive Analysis:** To apply statistical and machine learning models to make predictions based on historical data."
          ],
          courseContent: [
            { unit: 'Elective', title: 'Syllabus for Elective Options', description: `
---
### Option 1: Exploratory Data Analysis (EDA)
**Unit I: Introduction:** The role of EDA in the data analysis process. Types of data.
**Unit II: Univariate Analysis:** Analyzing single variables using descriptive statistics (mean, median, mode, std) and visualizations (histograms, box plots).
**Unit III: Bivariate Analysis:** Exploring relationships between two variables using scatter plots, correlation matrices.
**Unit IV: Multivariate Analysis:** Techniques for visualizing relationships among multiple variables. Feature engineering for EDA.
---
### Option 2: Predictive Analysis
**Unit I: Introduction:** What is predictive modeling? The modeling process.
**Unit II: Regression Models:** Advanced linear regression. Introduction to non-linear regression models.
**Unit III: Classification Models:** Advanced classification techniques (e.g., Gradient Boosting Machines). Model evaluation (Confusion Matrix, ROC Curve).
**Unit IV: Time Series Forecasting:** Applying predictive models like ARIMA and Exponential Smoothing for forecasting.
            ` }
          ],
          labPrograms: [
            { title: "Lab Exercises", problems: [
              "**For EDA:** Perform a comprehensive EDA on a complex dataset and present the findings.",
              "**For Predictive Analysis:** Build and evaluate a predictive model for a real-world problem (e.g., customer churn)."
            ]}
          ]
        }
      },
      { paper: '4', courseCode: '0622306', courseType: 'AEC', courseTitle: 'Soft Skills', credit: '1', ltp: '0-1-0', marks: { ie: '25', ue: '75' }, minMarks: { ue_p_ue: '25', total: '40' } },
      { 
        paper: '5', 
        courseCode: '0622365', 
        courseType: 'SEC', 
        courseTitle: 'Major Project-II', 
        credit: '4', 
        ltp: '0-0-8', 
        marks: { ie: '50', ue: '150' }, 
        minMarks: { ue_p_ue: '75', total: '100' },
        details: {
          courseObjectives: [
            "To successfully complete and deliver the project initiated in the previous semester.",
            "To demonstrate mastery of the entire software development lifecycle.",
            "To effectively document and present the project work and outcomes."
          ],
          courseContent: [
            { unit: 'Phase I', title: 'Implementation and Testing', description: "Continuation and completion of the development phase from Major Project-I. Rigorous unit, integration, and system testing." },
            { unit: 'Phase II', title: 'Deployment and Feedback', description: "Deployment of the project to a suitable environment. Incorporating feedback and making final improvements." },
            { unit: 'Phase III', title: 'Final Documentation', description: "Preparation of the final project report, including system architecture, design choices, results, and future scope." },
            { unit: 'Phase IV', title: 'Final Presentation and Viva Voce', description: "A formal presentation and demonstration of the completed project to a panel, followed by a viva voce examination." }
          ]
        }
      },
    ],
  },
];
