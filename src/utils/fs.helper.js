import {readFileSync, writeFileSync} from "fs";
import {join} from "path";

export function readFile(fileName) {
  try{
    return JSON.parse(readFileSync(join(process.cwd(), "src", "models", `${fileName}.json`)));
  } catch (err){
    return {error: `Error while reading a file: [${err.message}]`}
  }
}

export function writeFile(fileName, payload) {
  try{
    writeFileSync(join(process.cwd(), "src", "models", `${fileName}.json`), JSON.stringify(payload, null, 4));
  } catch (err){
    return {error: `Error while writing a file: [${err.message}]`}
  }
}