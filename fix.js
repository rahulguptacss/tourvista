const fs = require('fs');
const path = './components/data/data.json';
let text = fs.readFileSync(path, 'utf8');

// I will just parse it and stringify it, but it's invalid JSON, so I can't parse it.
// Instead, I'll add the missing two closing braces at the end of the file.

if (text.trim().endsWith('}')) {
  text += '\n  }\n}';
  fs.writeFileSync(path, text);
  console.log('Fixed json braces!');
}
