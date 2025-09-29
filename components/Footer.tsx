
import React from 'react';

const abbreviations = [
  { abbr: 'CCO', full: 'Core Compulsory' },
  { abbr: 'SEC', full: 'Skill Enhancement Course' },
  { abbr: 'AEC', full: 'Ability Enhancement Course' },
  { abbr: 'MDE', full: 'Multi-Disciplinary Elective Course' },
  { abbr: 'VAC', full: 'Value Added Course' },
  { abbr: 'DSE', full: 'Discipline Specific Elective' },
];

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 p-6 bg-white rounded-lg shadow-xl">
      <h4 className="text-lg font-semibold text-gray-700 mb-4">Course Type Legend</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {abbreviations.map(({ abbr, full }) => (
          <div key={abbr}>
            <p className="font-bold text-gray-800">{abbr}:</p>
            <p className="text-sm text-gray-600">{full}</p>
          </div>
        ))}
      </div>
      <div className="text-center text-xs text-gray-400 mt-8 border-t pt-4">
        Generated syllabus viewer. Data extracted from official university documents.
      </div>
    </footer>
  );
};

export default Footer;
