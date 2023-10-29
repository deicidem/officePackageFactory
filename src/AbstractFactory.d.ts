export interface OfficeProgramsPackageFactory {
  createDocumentProgram(): DocumentProgram;
  createTablesProgram(): TablesProgram;
  createPresentationsProgram(): PresentationsProgram;
}

export interface Program {
  name: string;
}

export interface DocumentProgram extends Program {
  text: string;
  changeText(): void;
  saveText(path: string): void;
}

export interface TablesProgram extends Program {
  tables: object[];
  changeTable(tableId: number): void;
  saveTables(path: string): void;
}

export interface PresentationsProgram extends Program {
  slides: object[];
  changeSlide(slideId: number): void;
  savePresentation(path: string): void;
}
