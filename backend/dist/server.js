"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const blob_1 = require("@vercel/blob");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
let projects = [];
app.post('/api/upload', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { file, fileName } = req.body;
    try {
        const { url } = yield (0, blob_1.put)(fileName, Buffer.from(file, 'base64'), {
            access: 'public',
        });
        res.status(201).json({ url });
    }
    catch (error) {
        console.error('Upload failed:', error);
        res.status(500).json({ error: 'Failed to upload file' });
    }
}));
app.post('/api/projects', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, file, fileName, link } = req.body;
    try {
        const { url } = yield (0, blob_1.put)(fileName, Buffer.from(file, 'base64'), {
            access: 'public',
        });
        const newProject = { title, description, image: url, link };
        projects.push(newProject);
        res.status(201).json(newProject);
    }
    catch (error) {
        console.error('Project creation failed:', error);
        res.status(500).json({ error: 'Failed to create project' });
    }
}));
app.get('/api/projects', (req, res) => {
    res.json(projects);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
