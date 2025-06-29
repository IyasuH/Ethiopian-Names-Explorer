import { SitemapStream, streamToPromise } from 'sitemap';
import path from 'path';
import routes from './sitemap-routes.js';
import { createWriteStream } from 'fs';

const hostname = 'https://ethiopian-names-explorer.vercel.app';
const outputPath = path.resolve("./", 'public', 'sitemap.xml');

const sitemap = new SitemapStream({ hostname });

routes.forEach(route => {
    sitemap.write({ url: route.path, changefreq: 'weekly', priority: 0.7 });
});

sitemap.end();

streamToPromise(sitemap)
    .then(data => {
        createWriteStream(outputPath).write(data.toString());
    })
    .catch(err => console.error('Error generating sitemap:', err));