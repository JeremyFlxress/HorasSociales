const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const path = require('path');

const dev = false; // Forzar modo producción
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || process.env.NODE_PORT || 3000;
const appDir = path.join(__dirname);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Parse URL
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      // Handle specific routes
      if (pathname === '/') {
        await app.render(req, res, '/', query);
      } else if (pathname.startsWith('/_next') || 
                 pathname.startsWith('/static') || 
                 pathname.startsWith('/public')) {
        await handle(req, res, parsedUrl);
      } else {
        await app.render(req, res, pathname, query);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      console.error(err.stack);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
    console.log('> App directory:', appDir);
  });
});
