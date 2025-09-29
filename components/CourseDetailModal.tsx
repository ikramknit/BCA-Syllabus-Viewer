import React, { useEffect, useState } from 'react';
import { Course, UnitContent, LabProblemSection } from '../types';
import { GoogleGenAI } from '@google/genai';

interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
  ai: GoogleGenAI;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center space-x-2 text-gray-500 my-4">
    <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span>Generating study material...</span>
  </div>
);

const GeneratedContent: React.FC<{ content: string }> = ({ content }) => {
    // A simple function to render markdown-like text from Gemini
    return (
        <div className="prose prose-sm max-w-none text-gray-800 mt-3 space-y-3">
            {content.split('\n').map((line, index) => {
                line = line.trim();
                if (line.startsWith('### ')) {
                    return <h3 key={index} className="text-lg font-semibold text-gray-900 mt-4 mb-2">{line.substring(4)}</h3>;
                }
                if (line.startsWith('* ')) {
                    return <li key={index} className="ml-5 list-disc">{line.substring(2)}</li>;
                }
                 if (line.includes('**')) {
                    const parts = line.split('**');
                    return <p key={index}>{parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-semibold">{part}</strong> : part)}</p>
                }
                return line ? <p key={index}>{line}</p> : null;
            })}
        </div>
    );
};

const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, ai }) => {
  const [studyMaterials, setStudyMaterials] = useState<Record<string, string>>({});
  const [loadingUnit, setLoadingUnit] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeUnit, setActiveUnit] = useState<string | null>(null);

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

  const handleUnitClick = async (unit: UnitContent) => {
    const unitId = `${unit.unit}-${unit.title}`;
    
    if (activeUnit === unitId) {
      setActiveUnit(null);
      return;
    }

    setActiveUnit(unitId);
    
    if (studyMaterials[unitId] || loadingUnit === unitId) {
      return;
    }

    setLoadingUnit(unitId);
    setError(null);

    try {
      const prompt = `Provide detailed study material for the topic: '${unit.title}'. This is a unit in the university course: '${course.courseTitle}'. The official syllabus description for this unit is: '${unit.description}'. Explain the key concepts clearly. Provide simple examples to illustrate the points. Format the response with headings (using '###'), bullet points (using '*'), and bold text for key terms (using **term**). The output should be easily readable for a university student.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setStudyMaterials(prev => ({ ...prev, [unitId]: response.text }));

    } catch (err) {
      console.error("Error fetching study material:", err);
      setError("Failed to generate study material. Please check your connection or API key and try again later.");
    } finally {
      setLoadingUnit(null);
    }
  };

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
                const unitId = `${unit.unit}-${unit.title}`;
                const isActive = activeUnit === unitId;

                return (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                    <button 
                      className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors flex justify-between items-center"
                      onClick={() => handleUnitClick(unit)}
                      aria-expanded={isActive}
                      aria-controls={`unit-content-${index}`}
                    >
                      <div className="w-11/12">
                        <p className="font-semibold text-blue-700">UNIT {unit.unit}: {unit.title}</p>
                        <p className="mt-1 text-sm text-gray-600">{unit.description}</p>
                      </div>
                       <svg className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    {isActive && (
                       <div id={`unit-content-${index}`} className="p-4 border-t border-gray-200 bg-white">
                         {loadingUnit === unitId && <LoadingSpinner />}
                         {error && activeUnit === unitId && <p className="text-red-500 text-sm">{error}</p>}
                         {studyMaterials[unitId] && <GeneratedContent content={studyMaterials[unitId]} />}
                       </div>
                    )}
                  </div>
                )
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
