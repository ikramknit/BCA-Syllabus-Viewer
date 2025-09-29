import React, { useEffect } from 'react';
import { Course, UnitContent, LabProblemSection } from '../types';

interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
}

const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!course.details) {
    return null;
  }
  
  const { details } = course;

  const renderSection = (title: string, items?: string[]) => {
    if (!items || items.length === 0) return null;
    return (
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-200 pb-2 mb-3">{title}</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  };
  
  const renderUnits = (units?: UnitContent[]) => {
     if (!units || units.length === 0) return null;
     return (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-200 pb-2 mb-3">Course Content</h4>
          <div className="space-y-4">
             {units.map((unit, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-md">
                   <p className="font-semibold text-gray-700">UNIT {unit.unit}: {unit.title}</p>
                   <p className="mt-1 text-sm text-gray-600">{unit.description}</p>
                </div>
             ))}
          </div>
        </div>
     )
  }

  const renderLabProblems = (sections?: LabProblemSection[]) => {
    if (!sections || sections.length === 0) return null;
    return (
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-200 pb-2 mb-3">Lab Problems</h4>
        {sections.map((section, index) => (
          <div key={index} className="mt-4">
            <h5 className="font-semibold text-gray-700">{section.title}</h5>
            <ul className="list-decimal list-inside space-y-2 text-gray-700 mt-2">
              {section.problems.map((problem, pIndex) => (
                <li key={pIndex}>{problem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };


  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-5 flex justify-between items-center z-10">
          <div className="w-11/12">
            <h3 id="modal-title" className="text-2xl font-bold text-blue-800">{course.courseTitle}</h3>
            <p className="text-sm text-gray-500">{course.courseCode} | {course.courseType}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full p-1"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="p-6">
          {renderSection("Course Objectives", details.courseObjectives)}
          {renderUnits(details.courseContent)}
          {renderLabProblems(details.labPrograms)}
          {renderSection("Text Books", details.textBooks)}
          {renderSection("Reference Books", details.referenceBooks)}
          {renderSection("Web Resources", details.webResources)}
          {renderSection("Suggestive Laboratory Experiments", details.suggestiveLabs)}
          {renderSection("Hardware", details.labHardware)}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailModal;
