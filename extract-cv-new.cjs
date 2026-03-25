const fs = require('fs');
const { PDFParse } = require('pdf-parse');
(async () => {
  const input = 'D:/My-Portfolio/Tran-Van-Quan-TopCV.vn-250326.200800 (1).pdf';
  const output = 'D:/My-Portfolio/cv-new-extracted.txt';
  const data = fs.readFileSync(input);
  const parser = new PDFParse({ data });
  const text = await parser.getText();
  fs.writeFileSync(output, text.text || '', 'utf8');
  await parser.destroy();
  console.log('extracted');
})().catch((e) => { console.error(e); process.exit(1); });
