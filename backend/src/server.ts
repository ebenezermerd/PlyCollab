import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { put } from '@vercel/blob';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let projects: { title: any; description: any; image: string; link: any; }[] = [];

app.post('/api/upload', async (req, res) => {
  const { file, fileName } = req.body;

  try {
    const { url } = await put(fileName, Buffer.from(file, 'base64'), {
      access: 'public',
    });
    res.status(201).json({ url });
  } catch (error) {
    console.error('Upload failed:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

app.post('/api/projects', async (req, res) => {
  const { title, description, file, fileName, link } = req.body;

  try {
    const { url } = await put(fileName, Buffer.from(file, 'base64'), {
      access: 'public',
    });
    const newProject = { title, description, image: url, link };
    projects.push(newProject);
    res.status(201).json(newProject);
  } catch (error) {
    console.error('Project creation failed:', error);
    res.status(500).json({ error: 'Failed to create project' });
  }
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
