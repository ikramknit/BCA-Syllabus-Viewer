import React from 'react';
import { Semester, Course } from '../types';

interface SyllabusTableProps {
  semester: Semester;
  onCourseSelect: (course: Course) => void;
}

// Function to generate HTML content for a single course for Word export
const generateCourseHtml = (course: Course): string => {
  if (!course.details) return '';

  const { details } = course;
  let html = `<div style="font-family: Arial, sans-serif;">`;
  html += `<h1>${course.courseTitle}</h1>`;
  html += `<p><strong>Course Code:</strong> ${course.courseCode} | <strong>Type:</strong> ${course.courseType}</p><hr/>`;

  const renderListSection = (title: string, items?: string[]) => {
    if (!items || items.length === 0) return '';
    let sectionHtml = `<h2>${title}</h2><ul>`;
    items.forEach(item => {
      sectionHtml += `<li>${item}</li>`;
    });
    sectionHtml += `</ul>`;
    return sectionHtml;
  };

  html += renderListSection("Course Objectives", details.courseObjectives);

  if (details.courseContent && details.courseContent.length > 0) {
    html += `<h2>Course Content</h2>`;
    details.courseContent.forEach(unit => {
        if (unit.title === 'Syllabus for Elective Options') {
            // Special handling for elective descriptions with markdown-like format
            let formattedDesc = unit.description
                .trim()
                .replace(/---/g, '<hr>')
                .replace(/### (.*?)\n/g, '<h3>$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br/>');
            html += `<div style="padding: 10px; border: 1px solid #ddd; margin-bottom: 10px;">${formattedDesc}</div>`;
        } else {
             html += `<h3>UNIT ${unit.unit}: ${unit.title}</h3>`;
             html += `<p>${unit.description}</p>`;
        }
    });
  }
  
  if (details.labPrograms && details.labPrograms.length > 0) {
    html += `<h2>Lab Problems</h2>`;
    details.labPrograms.forEach(section => {
      html += `<h4>${section.title}</h4><ol>`;
      section.problems.forEach(problem => {
        html += `<li>${problem}</li>`;
      });
      html += `</ol>`;
    });
  }
  
  html += renderListSection("Text Books", details.textBooks);
  html += renderListSection("Reference Books", details.referenceBooks);
  html += renderListSection("Web Resources", details.webResources);
  html += renderListSection("Suggestive Laboratory Experiments", details.suggestiveLabs);
  html += renderListSection("Hardware", details.labHardware);

  html += `</div>`;
  return html;
};

const SyllabusTable: React.FC<SyllabusTableProps> = ({ semester, onCourseSelect }) => {
  
  const handleWordDownload = (course: Course) => {
    const htmlContent = generateCourseHtml(course);
    if (!htmlContent) return;
    
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Export HTML to Word Document</title></head><body>";
    const footer = "</body></html>";
    const sourceHTML = header + htmlContent + footer;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    
    // Sanitize file name by replacing non-alphanumeric characters with underscores
    const fileName = `${course.courseCode}_${course.courseTitle.replace(/[^a-z0-9]/gi, '_')}.doc`;
    fileDownload.download = fileName;
    fileDownload.click();
    document.body.removeChild(fileDownload);
  };

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
            <th scope="col" className="px-4 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {semester.courses.map((course, index) => (
            <tr 
              key={index} 
              className={`transition-colors duration-150 ${course.details ? 'hover:bg-blue-50' : 'hover:bg-gray-50'}`}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.paper}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.courseCode}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{course.courseType}</td>
              <td 
                onClick={() => course.details && onCourseSelect(course)}
                onKeyDown={(e) => { if (e.key === 'Enter' && course.details) onCourseSelect(course) }}
                className={`px-6 py-4 text-sm text-gray-800 font-medium ${course.details ? 'cursor-pointer' : ''}`}
                aria-label={course.details ? `View details for ${course.courseTitle}`: course.courseTitle}
                tabIndex={course.details ? 0 : -1}
              >
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
              <td className="px-4 py-4 whitespace-nowrap text-center text-sm font-medium">
                {course.details && (
                  <button
                    onClick={() => handleWordDownload(course)}
                    className="text-blue-600 hover:text-blue-900 hover:bg-blue-100 p-2 rounded-full transition-colors duration-150 flex items-center justify-center mx-auto focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label={`Download syllabus for ${course.courseTitle} as Word document`}
                    title="Download as Word document"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SyllabusTable;