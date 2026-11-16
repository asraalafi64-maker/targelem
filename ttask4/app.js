//jawad ballan
//israa lafi
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let filePath;

    if (req.url === "/") {
        filePath = path.join(__dirname, "templates", "page.html");
    }
    else if (req.url === "/about") {
        filePath = path.join(__dirname, "templates", "about.html");
    }
    else if (req.url === "/contact") {
        filePath = path.join(__dirname, "templates", "contact.html");
    }
    else if (req.url === "/style.css") {
        filePath = path.join(__dirname, "public", "style.css");
    }
    else if (req.url.startsWith("/images/")) {
        filePath = path.join(__dirname, "public", req.url);
    }
    else {
        res.writeHead(404);
        res.end("Page Not Found");
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end("Server Error");
            return;
        }

        const ext = path.extname(filePath);

        const contentTypes = {
            ".html": "text/html",
            ".css": "text/css",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
            ".webp": "image/webp"
        };

        const contentType = contentTypes[ext] || "application/octet-stream";

        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
