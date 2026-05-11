const fs = require('fs');

const fixes = [
  {
    file: 'public/themes/royal-mockups.svg',
    from: 'width="819" height="1229" viewBox="0 0 819 1229"',
    to:   'width="468" height="904" viewBox="168 137 468 904"'
  },
  {
    file: 'public/themes/darkluxury-mockups.svg',
    from: 'width="819" height="1229" viewBox="0 0 819 1229"',
    to:   'width="468" height="904" viewBox="179 138 468 904"'
  },
  {
    file: 'public/themes/softromance-mockups.svg',
    from: 'width="839" height="1249" viewBox="0 0 839 1249"',
    to:   'width="468" height="904" viewBox="179 147 468 904"'
  },
  {
    file: 'public/themes/gardenparty-mockups.svg',
    from: 'width="819" height="1229" viewBox="0 0 819 1229"',
    to:   'width="468" height="904" viewBox="178 139 468 904"'
  }
];

fixes.forEach(({ file, from, to }) => {
  const path = require('path').resolve(__dirname, file);
  let data = fs.readFileSync(path, 'utf8');
  if (data.includes(from)) {
    data = data.replace(from, to);
    fs.writeFileSync(path, data);
    console.log(`✅ Fixed: ${file}`);
  } else {
    console.log(`⚠️ Pattern not found in: ${file}`);
  }
});

console.log('\nAll SVG mockups have been cropped to 468x904 (Minimal Elegant dimensions).');
