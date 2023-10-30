import type { TextEditorProgram } from '../AbstractFactory'

export class MicrosoftTextEditorProgram implements TextEditorProgram {
  name = 'Mircosoft Office Word'
  text = ''
  changeText(newText: string): void {
    this.text = newText
    console.log('Text is changed')
  }
  saveText(path: string): void {
    console.log('Text is saved in: ' + path)
  }
}
