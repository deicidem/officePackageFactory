import type { PresentationsProgram, Slide } from '../AbstractFactory'

export class LibreOfficePresentationsProgram implements PresentationsProgram {
  slides: Slide[]
  name = 'LibreOffice Impress'
  constructor() {
    this.slides = []
  }
  createSlide(slide: Slide) {
    this.slides.push(slide)
  }
  changeSlide(slideId: number, content: object): void {
    this.slides = this.slides.map((s) => (s.id == slideId ? { ...s, content } : s))
  }
  savePresentation(path: string): void {
    console.log('Presentation is saved in: ' + path)
  }
}
