import React, { useEffect, useState, useCallback } from 'react';
import { Course, UnitContent, LabProblemSection } from '../types';
import { GoogleGenAI } from '@google/genai';

interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
  ai: GoogleGenAI;
}

const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, ai }) => {
  const [openUnitId, setOpenUnitId] = useState<string | null>(null);
  const [studyMaterials, setStudyMaterials] = useState<Record<string, string>>({});
  const [loadingUnit, setLoadingUnit] = useState<string | null>(null);
  const [errorUnit, setErrorUnit] = useState<string | null>(null);

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

  const handleUnitClick = useCallback(async (unit: UnitContent) => {
    const unitId = `unit-${unit.unit}`;

    if (openUnitId === unitId) {
      setOpenUnitId(null);
      return;
    }

    setOpenUnitId(unitId);

    if (!studyMaterials[unitId]) {
      setLoadingUnit(unitId);
      setErrorUnit(null);
      try {
        const prompt = `Provide detailed study material for the following topic from a computer science syllabus.
        Topic Title: ${unit.title}
        Syllabus Description: ${unit.description}
        
        Please explain the key concepts in detail, provide clear examples, and include a few practice questions to test understanding. Format the output for readability on a web page.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });

        setStudyMaterials(prev => ({ ...prev, [unitId]: response.text }));
      } catch (error) {
        console.error("Error generating study material:", error);
        setErrorUnit(unitId);
        setStudyMaterials(prev => ({ ...prev, [unitId]: "Sorry, I couldn't generate study material for this topic right now. Please try again later." }));
      } finally {
        setLoadingUnit(null);
      }
    }
  }, [ai, openUnitId, studyMaterials]);


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
          <div className="space-y-2">
             {units.map((unit, index) => {
                const unitId = `unit-${unit.unit}`;
                const isOpen = openUnitId === unitId;

                return (
                  <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                    <button
                      className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:z-10 relative"
                      onClick={() => handleUnitClick(unit)}
                      aria-expanded={isOpen}
                      aria-controls={`unit-content-${unitId}`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="pr-4">
                          <p className="font-semibold text-gray-800">UNIT {unit.unit}: {unit.title}</p>
                          <p className="mt-1 text-sm text-gray-600 font-normal">{unit.description}</p>
                        </div>
                        <svg className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </button>
                    {isOpen && (
                      <div id={`unit-content-${unitId}`} className="p-4 border-t border-gray-200 bg-white">
                        {loadingUnit === unitId && (
                          <div className="flex items-center space-x-2 text-gray-500 animate-pulse">
                            <svg className="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Generating study material, please wait...</span>
                          </div>
                        )}
                        {studyMaterials[unitId] && (
                          <div className={`prose prose-sm max-w-none text-gray-800 ${errorUnit === unitId ? 'text-red-600' : ''}`}>
                            <pre className="whitespace-pre-wrap font-sans bg-gray-50 p-3 rounded-md">{studyMaterials[unitId]}</pre>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
             })}
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