import { readFileSync } from 'fs';
import path from 'path';

export const getList = () => {
  const dataBuffer = readFileSync(path.join(process.cwd(), `data/data.json`));
  const dataString = dataBuffer.toString();
  if (!dataString) {
    return [];
  }
  const data = JSON.parse(dataString);
  return data;
};
