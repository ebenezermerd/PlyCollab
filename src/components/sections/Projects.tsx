import React, { useState, useEffect } from 'react';

interface Project {
  id: string;  // Assuming projects have a unique ID
  title: string;
  description: string;
  image: string;
  link: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/datas/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch project data');
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error: any) {
        console.error('Error fetching project data:', error);
        setError(error.message || 'Failed to load project data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div className="text-center">Loading projects...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <section className="py-20 relative" id="projects">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our <span className="text-neon-green">Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg glass overflow-hidden group">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-green hover:underline"
                >
                  View details about {project.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
