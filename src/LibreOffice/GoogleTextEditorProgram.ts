import { TextEditorProgram } from "../AbstractFactory";

export class LibreOfficeTextEditorProgram implements TextEditorProgram {
  name = "LibreOffice Writer";
  text = "";
  changeText(newText: string): void {
    this.text = newText;
    console.log("Text is changed");
  }
  saveText(path: string): void {
    console.log("Text is saved in: " + path);
  }
}
