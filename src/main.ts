import {
  AvailableFactories,
  OfficeProgramsPackageFactoryMaker
} from '@/OfficeProgramsPackageFactoryMaker'

import { createApp } from 'vue'
import App from '@/App.vue'

let microsoftPackage = OfficeProgramsPackageFactoryMaker.makeFactory(AvailableFactories.MICROSOFT)
let textEditor = microsoftPackage.createTextEditorProgram()
let tablesProgram = microsoftPackage.createTablesProgram()
let presentationsProgram = microsoftPackage.createPresentationsProgram()

console.log(
  `Package contains: ${textEditor.name}, ${tablesProgram.name}, ${presentationsProgram.name}`
)

let googlePackage = OfficeProgramsPackageFactoryMaker.makeFactory(AvailableFactories.GOOGLE)
let textEditor2 = googlePackage.createTextEditorProgram()
let tablesProgram2 = googlePackage.createTablesProgram()
let presentationsProgram2 = googlePackage.createPresentationsProgram()

console.log(
  `Package contains: ${textEditor2.name}, ${tablesProgram2.name}, ${presentationsProgram2.name}`
)

import './assets/main.css'

createApp(App).mount('#app')
