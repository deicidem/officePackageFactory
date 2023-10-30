import type {
  OfficeProgramsPackageFactory,
  TextEditorProgram,
  TablesProgram,
  PresentationsProgram
} from '../AbstractFactory'
import { MicrosoftPresentationsProgram } from './MicrosoftPresentationsProgram'
import { MicrosoftTablesProgram } from './MicrosoftTablesProgram'
import { MicrosoftTextEditorProgram } from './MicrosoftTextEditorProgram'

export class MicrosoftOfficeProgramsPackageFactory implements OfficeProgramsPackageFactory {
  createTextEditorProgram(): TextEditorProgram {
    return new MicrosoftTextEditorProgram()
  }
  createTablesProgram(): TablesProgram {
    return new MicrosoftTablesProgram()
  }
  createPresentationsProgram(): PresentationsProgram {
    return new MicrosoftPresentationsProgram()
  }
}
