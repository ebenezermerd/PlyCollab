import React, { useState } from 'react';
import Projects from '@/components/sections/Projects';
import AddProject from '@/components/sections/AddProject';

const ProjectsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Projects />
      <button
        onClick={openModal}
        className="fixed bottom-10 right-10 bg-neon-green text-dark-bg p-4 rounded-full shadow-lg hover:bg-neon-green/90 transition-colors"
      >
        Add Project
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-card-bg p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">Add a Project</h2>
            <AddProject onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsPage;