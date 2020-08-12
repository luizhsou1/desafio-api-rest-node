import fs from 'fs';

export const jsonReader = (file: string): Object => {
  const fileBuffer = fs.readFileSync(file, 'utf-8');
  return JSON.parse(fileBuffer);
};

export const jsonWriter = (file: string, content: any): void => {
  const contentString = JSON.stringify(content);
  fs.writeFileSync(file, contentString, 'utf-8');
};

export const textWriter = (file: string, content: any): void => {
  fs.writeFileSync(file, content, 'utf-8');
};

export const existsFile = (file: string): boolean => fs.existsSync(file);
