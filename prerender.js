// prerender.js
import puppeteer from 'puppeteer';
import { writeFile, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routes = ['/', '/region/Amhara', '/region/Oromia', '/region/Somali', '/region/Tigray', '/region/SNNPR', '/region/Afar', '/region/Benishangul-Gumuz', '/region/Gambella', '/region/Dire Dawa', '/region/Addis Ababa']; // Match your sitemap-routes.js
const baseUrl = 'http://localhost:5173'; // Vite dev server port
const outputDir = path.join(__dirname, 'dist');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    for (const route of routes) {
        const url = `${baseUrl}${route}`;
        const outputPath = path.join(outputDir, route === '/' ? 'index.html' : `${route}/index.html`);

        await page.goto(url, { waitUntil: 'networkidle0' });
        await page.evaluate(() => {
            window.dispatchEvent(new Event('render-event')); // Trigger render event
        });
        const html = await page.content();

        await mkdir(path.dirname(outputPath), { recursive: true });
        await writeFile(outputPath, html);
        console.log(`Prerendered: ${outputPath}`);
    }

    await browser.close();
})();