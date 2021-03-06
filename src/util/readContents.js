import { stat, readFile } from 'fs';
import { promisify } from 'util';
const fileStatAsync = promisify(stat);
const readFileAsync = promisify(readFile);

export async function readContents (path) {
  if (!await fileStatAsync(path)) {
    throw Error(`${path} not found, is this a package?`);
  }

  try {
    return await readFileAsync(path, 'utf-8');
  } catch {
    throw Error(`Failed to read ${path}`);
  }
}
