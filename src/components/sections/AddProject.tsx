import React, { useState } from 'react';
import { put } from '@vercel/blob';

interface AddProjectProps {
  onClose: () => void;
}

const AddProject: React.FC<AddProjectProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = '';

      if (image) {
        const base64File = await fileToBase64(image);
        const { url } = await put(image.name, Buffer.from(base64File, 'base64'), {
          access: 'public',
        });
        imageUrl = url;
      }

      const newProject = { title, description, image: imageUrl, link };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject),
      });

      if (response.ok) {
        alert('Project added successfully!');
        resetForm();
        onClose();
      } else {
        alert('Failed to add project.');
      }
    } catch (error) {
      console.error('Error uploading project:', error);
      alert('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString().split(',')[1] || '');
      reader.onerror = (error) => reject(error);
    });
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImage(null);
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
        <label htmlFor="image" className="block text-sm font-medium mb-2 text-text-primary">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
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
