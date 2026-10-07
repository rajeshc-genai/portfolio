import fs from 'node:fs';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { GITHUB_USERNAME, portfolio } from '../src/data/config.js';

const pdf = await PDFDocument.create();
const page = pdf.addPage([595.28, 841.89]);
const regular = await pdf.embedFont(StandardFonts.Helvetica);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
const { personal } = portfolio;
const ink = rgb(0.12, 0.16, 0.23);
const muted = rgb(0.33, 0.38, 0.46);
const accent = rgb(0.08, 0.58, 0.66);
const left = 43;
const right = page.getWidth() - 43;
let y = page.getHeight() - 45;

function clean(text) {
  return text.replace(/[–—]/g, '-').replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/•/g, '-');
}

function draw(text, x, top, font = regular, size = 8.4, color = ink) {
  page.drawText(clean(text), { x, y: top - size, font, size, color });
}

function wrap(text, font, size, width) {
  const words = clean(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) > width && line) {
      lines.push(line);
      line = word;
    } else line = candidate;
  }
  if (line) lines.push(line);
  return lines;
}

function paragraph(text, x, top, width, options = {}) {
  const { font = regular, size = 9.3, color = ink, leading = 13.2 } = options;
  const lines = wrap(text, font, size, width);
  lines.forEach((line, index) => draw(line, x, top - index * leading, font, size, color));
  return top - lines.length * leading;
}

function heading(text) {
  y -= 11;
  draw(text.toUpperCase(), left, y, bold, 10, accent);
  y -= 7;
  page.drawLine({ start: { x: left, y }, end: { x: right, y }, thickness: 0.55, color: rgb(0.83, 0.87, 0.91) });
  y -= 16;
}

function bullet(text, top, indent = 8) {
  page.drawCircle({ x: left + indent + 1.5, y: top - 5.8, size: 1.45, color: accent });
  return paragraph(text, left + indent + 8, top, right - left - indent - 8, { size: 9, color: muted, leading: 13.3 }) - 4;
}

page.drawRectangle({ x: 0, y: page.getHeight() - 8, width: page.getWidth(), height: 8, color: accent });
draw(personal.name.toUpperCase(), left, y, bold, 26, ink);
y -= 33;
draw(`${portfolio.resume.target}  |  Aspiring AI & ML Professional`, left, y, bold, 10.2, accent);
y -= 20;
draw(`${personal.location}  |  ${personal.formattedPhone}  |  ${personal.email}`, left, y, regular, 9, muted);
y -= 14;
draw(`linkedin.com/in/rajeshc  |  github.com/${GITHUB_USERNAME}`, left, y, regular, 9, muted);
y -= 20;

heading('Professional Summary');
y = paragraph(portfolio.resume.summary, left, y, right - left, { size: 9.3, color: muted, leading: 13.2 }) - 5;

heading('Technical Skills');
for (const group of portfolio.skills) {
  const label = `${group.title}: `;
  const labelWidth = bold.widthOfTextAtSize(label, 8.8);
  draw(label, left, y, bold, 8.8, ink);
  const skillLines = wrap(group.items.join(', '), regular, 8.8, right - left - labelWidth);
  skillLines.forEach((line, index) => draw(line, left + (index === 0 ? labelWidth : 0), y - index * 12, regular, 8.8, muted));
  y -= skillLines.length * 12 + 5;
}

heading('Projects');
for (const project of portfolio.projects) {
  draw(`${project.resumeTitle}  |  Personal Project`, left, y, bold, 9.2, ink);
  y -= 15;
  for (const detail of project.resumeBullets) y = bullet(detail, y);
  y -= 10;
}

heading('Professional Experience');
draw(`${portfolio.experience.role} - ${portfolio.experience.company}, ${portfolio.experience.location}`, left, y, bold, 9.2, ink);
draw(portfolio.experience.period, right - regular.widthOfTextAtSize(portfolio.experience.period, 8.5), y, regular, 8.5, muted);
y -= 15;
for (const detail of portfolio.experience.bullets) y = bullet(detail, y);

heading('Education, Certifications & Languages');
draw(`${portfolio.education.degree} - ${portfolio.education.institution}, ${portfolio.education.location}`, left, y, bold, 8.8, ink);
y -= 15;
draw(`${portfolio.education.year}  |  Certifications: ${portfolio.education.certifications.join('  |  ')}`, left, y, regular, 8.7, muted);
y -= 13;
draw(`Languages: ${portfolio.education.languages.join('  |  ')}`, left, y, regular, 8.7, muted);

page.drawLine({ start: { x: left, y: 28 }, end: { x: right, y: 28 }, thickness: 0.5, color: rgb(0.83, 0.87, 0.91) });
draw('RAJESH C  |  AI & ML', left, 21, regular, 7, muted);
draw('1 / 1', right - 20, 21, regular, 7, muted);

if (y < 44) throw new Error(`Resume content exceeded the page (remaining y=${y.toFixed(1)}).`);
const resumeBytes = await pdf.save();
const resumeFolder = new URL('../Rajesh_C_Resume/', import.meta.url);
fs.mkdirSync(resumeFolder, { recursive: true });
fs.writeFileSync(new URL('../public/resume.pdf', import.meta.url), resumeBytes);
fs.writeFileSync(new URL('Rajesh_C_Resume.pdf', resumeFolder), resumeBytes);
console.log(`Generated public/resume.pdf (${pdf.getPageCount()} page, ${Math.round(y)}pt content remaining).`);
console.log('Saved a copy to Rajesh_C_Resume/Rajesh_C_Resume.pdf.');