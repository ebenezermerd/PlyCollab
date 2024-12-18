import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface AddProjectProps {
  onClose: () => void;
}

const AddProject: React.FC<AddProjectProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newProject = { id: Date.now().toString(), title, description, image: imageUrl, link };

      const response = await fetch('/datas/projects.json');
      const data: Project[] = await response.json();

      data.push(newProject);

      const updatedJson = JSON.stringify(data, null, 2);

      const blob = new Blob([updatedJson], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'projects.json';
      a.click();

      alert('Project added successfully!');
      resetForm();
      onClose();
    } catch (error) {
      console.error('Error uploading project:', error);
      alert('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImageUrl('');
    setLink('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-dark-bg p-6 rounded-lg">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-2 text-text-primary">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-dark-bg border border-gray-700 focus:outline-none focus:border-neon-green text-text-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2 text-text-primary">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 rounded-md bg-dark-bg border border-gray-700 focus:outline-none focus:border-neon-green text-text-primary"
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium mb-2 text-text-primary">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-dark-bg border border-gray-700 focus:outline-none focus:border-neon-green text-text-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="link" className="block text-sm font-medium mb-2 text-text-primary">
          Project Link
        </label>
        <input
          type="text"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-dark-bg border border-gray-700 focus:outline-none focus:border-neon-green text-text-primary"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-neon-green text-dark-bg px-6 py-3 rounded-md hover:bg-neon-green/90 transition-colors"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Add Project'}
      </button>
      <button
        type="button"
        onClick={onClose}
        className="w-full bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition-colors"
      >
        Cancel
      </button>
    </form>
  );
};

export default AddProject;
