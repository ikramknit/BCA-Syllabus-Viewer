
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { syllabusData } from './data/syllabusData';
import Header from './components/Header';
import SemesterTabs from './components/SemesterTabs';
import SyllabusTable from './components/SyllabusTable';
import Footer from './components/Footer';
import CourseDetailModal, { CourseDetailsContent } from './components/CourseDetailModal';
import { Semester, Course } from './types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const App: React.FC = () => {
  const [activeSemesterId, setActiveSemesterId] = useState<string>(syllabusData[0].id);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  // State for PDF generation
  const [isDownloading, setIsDownloading] = useState(false);
  const [renderAllForPdf, setRenderAllForPdf] = useState(false);
  const syllabusContainerRef = useRef<HTMLDivElement>(null);

  const handleSelectSemester = useCallback((id: string) => {
    setActiveSemesterId(id);
  }, []);

  const handleCourseSelect = useCallback((course: Course) => {
    if (course.details) {
      setSelectedCourse(course);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCourse(null);
  }, []);
  
  const handleDownloadClick = () => {
    setIsDownloading(true);
    setRenderAllForPdf(true); // Trigger re-render with all semesters
  };

  useEffect(() => {
    if (!renderAllForPdf || !syllabusContainerRef.current) return;
    
    const generatePdf = async () => {
        const element = syllabusContainerRef.current;
        if (!element) return;

        // Give a bit more time for the large amount of content to render
        await new Promise(resolve => setTimeout(resolve, 1000));

        const canvas = await html2canvas(element, { 
          scale: 2,
          useCORS: true, 
          windowWidth: element.scrollWidth,
          windowHeight: element.scrollHeight
        });
        const imgData = canvas.toDataURL('image/png');
        
        const pdf = new jsPDF('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = imgWidth / pdfWidth;
        const totalPdfPages = Math.ceil(imgHeight / ratio / pdfHeight);

        for (let i = 0; i < totalPdfPages; i++) {
          if (i !== 0) {
            pdf.addPage();
          }
          const yPosition = -(pdfHeight * i * ratio);
          pdf.addImage(imgData, 'PNG', 0, yPosition, pdfWidth, imgHeight / ratio, undefined, 'FAST');
        }
        
        pdf.save('BCA_Syllabus_Detailed.pdf');

        // Reset state
        setRenderAllForPdf(false);
        setIsDownloading(false);
    };

    generatePdf();

  }, [renderAllForPdf]);

  const activeSemester = syllabusData.find(sem => sem.id === activeSemesterId) as Semester;

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {isDownloading && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center" aria-live="polite">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center flex items-center space-x-4">
             <svg className="h-6 w-6 text-blue-500 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            <div>
              <p className="font-semibold text-lg text-gray-800">Generating Detailed PDF...</p>
              <p className="text-sm text-gray-600">This may take a moment.</p>
            </div>
          </div>
        </div>
      )}
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden" ref={syllabusContainerRef}>
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-700">Bachelors of Computer Application (BCA)</h2>
            <p className="text-gray-500 mt-1">Syllabus from the Session 2025-26 (As per AICTE guidelines)</p>
          </div>
          
          {renderAllForPdf ? (
            // Render all semesters with full details for PDF generation
            <div className="p-4 md:p-6">
              {syllabusData.map(semester => (
                <div key={semester.id} style={{ pageBreakAfter: 'always' }} className="mb-12">
                  <SyllabusTable semester={semester} onCourseSelect={() => {}} />
                  <div className="mt-10">
                    <h3 className="text-2xl font-bold text-center mb-6 border-t-2 border-gray-200 pt-6">Detailed Course Information for {semester.title}</h3>
                    {semester.courses.filter(c => c.details).map(course => (
                      <div key={course.courseCode} className="mb-8 p-6 border border-gray-200 rounded-lg shadow-sm" style={{ pageBreakInside: 'avoid' }}>
                        <div className="border-b border-gray-200 pb-3 mb-4">
                          <h4 className="text-xl font-bold text-blue-800">{course.courseTitle}</h4>
                          <p className="text-sm text-gray-500">{course.courseCode} | {course.courseType}</p>
                        </div>
                        <CourseDetailsContent course={course} isPdfMode={true} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Normal view with tabs
            <>
              <SemesterTabs 
                semesters={syllabusData}
                activeSemesterId={activeSemesterId}
                onSelectSemester={handleSelectSemester}
              />
              <div className="p-4 md:p-6">
                {activeSemester && (
                  <SyllabusTable semester={activeSemester} onCourseSelect={handleCourseSelect} />
                )}
              </div>
            </>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleDownloadClick}
            disabled={isDownloading}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-lg disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center space-x-2"
            aria-label="Download full detailed syllabus as PDF"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span>{isDownloading ? 'Generating...' : 'Download Full Syllabus (PDF)'}</span>
          </button>
        </div>

        <Footer />
      </main>
      
      {selectedCourse && (
        <CourseDetailModal course={selectedCourse} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
