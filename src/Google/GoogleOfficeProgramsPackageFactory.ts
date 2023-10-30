import {
  OfficeProgramsPackageFactory,
  TextEditorProgram,
  TablesProgram,
  PresentationsProgram,
} from "../AbstractFactory";
import { GooglePresentationsProgram } from "./GooglePresentationsProgram";
import { GoogleTablesProgram } from "./GoogleTablesProgram";
import { GoogleTextEditorProgram } from "./GoogleTextEditorProgram";

export class GoogleOfficeProgramsPackageFactory
  implements OfficeProgramsPackageFactory
{
  createTextEditorProgram(): TextEditorProgram {
    return new GoogleTextEditorProgram();
  }
  createTablesProgram(): TablesProgram {
    return new GoogleTablesProgram();
  }
  createPresentationsProgram(): PresentationsProgram {
    return new GooglePresentationsProgram();
  }
}
