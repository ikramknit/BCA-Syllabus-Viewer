
import React from 'react';
import { Semester } from '../types';

interface SyllabusTableProps {
  semester: Semester;
}

const SyllabusTable: React.FC<SyllabusTableProps> = ({ semester }) => {
  return (
    <div className="overflow-x-auto">
       <div className="mb-4 flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">{semester.title}</h3>
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">
          Total Credits: {semester.totalCredits}
        </span>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Paper</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Course Code</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Type</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Course Title</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Credit</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">L-T-P</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Marks (IE/PRC/UE)</th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Min Marks (Total)</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {semester.courses.map((course, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.paper}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.courseCode}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.courseType}</td>
              <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                {course.courseTitle}
                {course.options && (
                  <ul className="list-disc list-inside mt-2 text-xs text-gray-600">
                    {course.options.map((opt, i) => <li key={i}>{opt}</li>)}
                  </ul>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{course.credit}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{course.ltp}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                {course.marks.ie}
                {course.marks.prc && ` / ${course.marks.prc}`}
                {` / ${course.marks.ue}`}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{course.minMarks.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SyllabusTable;
