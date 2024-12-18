"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../../public')));
app.get('/api/team', (req, res) => {
    const team = [
        {
            name: 'John Doe',
            role: 'Full Stack Developer',
            image: '/team-member-1.jpg',
        },
        {
            name: 'Jane Smith',
            role: 'UI/UX Designer',
            image: '/team-member-2.jpg',
        },
        {
            name: 'Mike Johnson',
            role: 'Backend Specialist',
            image: '/team-member-3.jpg',
        },
    ];
    res.json(team);
});
app.get('/api/projects', (req, res) => {
    const projects = [
        {
            title: 'E-commerce Platform',
            description: 'A fully responsive online store with integrated payment systems.',
            image: '/project-1.jpg',
        },
        {
            title: 'Task Management App',
            description: 'A collaborative project management tool for remote teams.',
            image: '/project-2.jpg',
        },
        {
            title: 'Social Media Dashboard',
            description: 'An analytics dashboard for tracking social media performance.',
            image: '/project-3.jpg',
        },
    ];
    res.json(projects);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
