import {
  OfficeProgramsPackageFactory,
  DocumentProgram,
  TablesProgram,
  PresentationsProgram,
} from "./AbstractFactory";

export class MicrosoftWord implements DocumentProgram {
  text: string;
  changeText(): void {
    throw new Error("Method not implemented.");
  }
  saveText(path: string): void {
    throw new Error("Method not implemented.");
  }
  name: string;
}

export class MicrosoftOfficeProgramsPackageFactory
  implements OfficeProgramsPackageFactory
{
  createDocumentProgram(): DocumentProgram {}
  createTablesProgram(): TablesProgram {}
  createPresentationsProgram(): PresentationsProgram {}
}
