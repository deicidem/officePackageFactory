export interface OfficeProgramsPackageFactory {
  createTextEditorProgram(): TextEditorProgram
  createTablesProgram(): TablesProgram
  createPresentationsProgram(): PresentationsProgram
}

interface Program {
  name: string
}

export interface TextEditorProgram extends Program {
  text: string
  changeText(newText): void
  saveText(path: string): void
}

interface Table {
  id: number
  content: object
}

export interface TablesProgram extends Program {
  tables: Table[]
  createTable(table: Table): void
  changeTable(tableId: number, content: object): void
  saveTables(path: string): void
}

interface Slide {
  id: number
  content: object
}

export interface PresentationsProgram extends Program {
  slides: Slide[]
  createSlide(slide: Slide): void
  changeSlide(slideId: number, content: object): void
  savePresentation(path: string): void
}
