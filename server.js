import http from "http";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3030;

const students = [
  {
    sid: "S001",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S002",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S003",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S004",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S005",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S006",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S007",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S008",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S009",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S010",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S011",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S012",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S013",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S014",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S015",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S016",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S017",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S018",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S019",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
  {
    sid: "S020",
    name: "Diksha Rajabhoj",
    class: "10",
    section: "A",
    gender: "Female",
    sport: "Cricket",
    pContact: "+91 98765 43210",
    age: 15,
    adharCard: "1234 5678 9012",
  },
];

const teachers = [
  {
    tid: "T001",
    name: "Rajesh Kumar",
    subject: "Mathematics",
    gender: "Male",
  },
  {
    tid: "T002",
    name: "Shivam Waghmare",
    subject: "JavaScript",
    gender: "Male",
  },
  {
    tid: "T003",
    name: "Suresh Waghmare",
    subject: "Physics",
    gender: "Male",
  },
  {
    tid: "T004",
    name: "Priti Patel",
    subject: "Chemistry",
    gender: "Female",
  },
  {
    tid: "T005",
    name: "Arun Singh",
    subject: "Biology",
    gender: "Male",
  },
  {
    tid: "T006",
    name: "Anjali Gupta",
    subject: "History",
    gender: "Female",
  },
  {
    tid: "T007",
    name: "Rahul Bhure",
    subject: "Computer Science",
    gender: "Male",
  },
  {
    tid: "T008",
    name: "Iyer Bhai",
    subject: "Art & Craft",
    gender: "Mail",
  },
  {
    tid: "T009",
    name: "Sanjay Dat",
    subject: "Music",
    gender: "Male",
  },
  {
    tid: "T010",
    name: "Priya Sharma",
    subject: "Geography",
    gender: "Female",
  },
];


const server = http.createServer((req, res) => {
  const url = req.url;

  // API routes
  if (url === '/api/students') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify((students)));

  } else if (url === '/api/teachers') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify((teachers)));

  }else {
    let filePath = path.join(__dirname, 'dist', url === '/' ? 'index.html' : url);
    const extname = path.extname(filePath);
    const contentType = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
    }[extname] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        // Fallback to index.html for SPA
        fs.readFile(path.join(__dirname, 'dist', 'index.html'), (err2, content2) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content2, 'utf-8');
        });
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});