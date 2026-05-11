import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
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

  const results: string[] = [];

  for (const { file, from, to } of fixes) {
    const fullPath = path.resolve(process.cwd(), file);
    let data = fs.readFileSync(fullPath, 'utf8');
    if (data.includes(from)) {
      data = data.replace(from, to);
      fs.writeFileSync(fullPath, data);
      results.push(`✅ Fixed: ${file}`);
    } else {
      results.push(`⚠️ Pattern not found in: ${file} (may already be fixed)`);
    }
  }

  return NextResponse.json({ results });
}
