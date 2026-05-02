import fs from 'fs';
import path from 'path';

const content = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Abaad Murtaza — Portfolio</title>
    <script>
      window.location.replace('/' + window.location.hash);
    </script>
  </head>
  <body></body>
</html>`;

const distDir = path.resolve(process.cwd(), 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, '404.html'), content);
console.log('Created dist/404.html for SPA routing');
