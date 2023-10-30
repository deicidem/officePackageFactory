import type { OfficeProgramsPackageFactory } from '@/AbstractFactory'
import { GoogleOfficeProgramsPackageFactory } from '@/Google/GoogleOfficeProgramsPackageFactory'
import { LibreOfficeProgramsPackageFactory } from '@/LibreOffice/LibreOfficeProgramsPackageFactory'
import { MicrosoftOfficeProgramsPackageFactory } from '@/MicrosoftOffice/MicrosoftOfficeProgramsPackageFactory'

export enum AvailableFactories {
  MICROSOFT,
  LIBRE_OFFICE,
  GOOGLE
}

export class OfficeProgramsPackageFactoryMaker {
  public static makeFactory(type: AvailableFactories): OfficeProgramsPackageFactory {
    switch (type) {
      case AvailableFactories.MICROSOFT:
        return new MicrosoftOfficeProgramsPackageFactory()
      case AvailableFactories.GOOGLE:
        return new GoogleOfficeProgramsPackageFactory()
      case AvailableFactories.LIBRE_OFFICE:
        return new LibreOfficeProgramsPackageFactory()
    }
  }
}
