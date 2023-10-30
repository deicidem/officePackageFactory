import {
  OfficeProgramsPackageFactory,
  TextEditorProgram,
  TablesProgram,
  PresentationsProgram,
} from "../AbstractFactory";
import { LibreOfficePresentationsProgram } from "./GooglePresentationsProgram";
import { LibreOfficeTablesProgram } from "./GoogleTablesProgram";
import { LibreOfficeTextEditorProgram } from "./GoogleTextEditorProgram";

export class LibreOfficeProgramsPackageFactory
  implements OfficeProgramsPackageFactory
{
  createTextEditorProgram(): TextEditorProgram {
    return new LibreOfficeTextEditorProgram();
  }
  createTablesProgram(): TablesProgram {
    return new LibreOfficeTablesProgram();
  }
  createPresentationsProgram(): PresentationsProgram {
    return new LibreOfficePresentationsProgram();
  }
}
