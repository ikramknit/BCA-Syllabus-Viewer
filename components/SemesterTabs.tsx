
import React from 'react';
import { Semester } from '../types';

interface SemesterTabsProps {
  semesters: Semester[];
  activeSemesterId: string;
  onSelectSemester: (id: string) => void;
}

const SemesterTabs: React.FC<SemesterTabsProps> = ({ semesters, activeSemesterId, onSelectSemester }) => {
  return (
    <div className="border-b border-gray-200 bg-gray-50">
      <nav className="-mb-px flex flex-wrap" aria-label="Tabs">
        {semesters.map((semester) => (
          <button
            key={semester.id}
            onClick={() => onSelectSemester(semester.id)}
            className={`
              whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm
              transition-colors duration-200
              ${
                activeSemesterId === semester.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
              focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
            `}
            aria-current={activeSemesterId === semester.id ? 'page' : undefined}
          >
            Semester {semester.id.replace('sem', '')}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SemesterTabs;
