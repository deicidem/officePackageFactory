import { TextEditorProgram } from "../AbstractFactory";

export class GoogleTextEditorProgram implements TextEditorProgram {
  name = "Google Docs";
  text = "";
  changeText(newText: string): void {
    this.text = newText;
    console.log("Text is changed");
  }
  saveText(path: string): void {
    console.log("Text is saved in: " + path);
  }
}
