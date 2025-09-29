
import React, { useState, useCallback, useMemo } from 'react';
import { syllabusData } from './data/syllabusData';
import Header from './components/Header';
import SemesterTabs from './components/SemesterTabs';
import SyllabusTable from './components/SyllabusTable';
import Footer from './components/Footer';
import CourseDetailModal from './components/CourseDetailModal';
import { Semester, Course } from './types';
import { GoogleGenAI } from '@google/genai';

const App: React.FC = () => {
  const [activeSemesterId, setActiveSemesterId] = useState<string>(syllabusData[0].id);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const ai = useMemo(() => new GoogleGenAI({ apiKey: process.env.API_KEY as string }), []);

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

  const activeSemester = syllabusData.find(sem => sem.id === activeSemesterId) as Semester;

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-700">Bachelors of Computer Application (BCA)</h2>
            <p className="text-gray-500 mt-1">Syllabus from the Session 2025-26 (As per AICTE guidelines)</p>
          </div>
          
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
        </div>
        <Footer />
      </main>
      
      {selectedCourse && (
        <CourseDetailModal course={selectedCourse} onClose={handleCloseModal} ai={ai} />
      )}
    </div>
  );
};

export default App;