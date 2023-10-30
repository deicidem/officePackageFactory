import { PresentationsProgram, Slide } from "../AbstractFactory";

export class MicrosoftPresentationsProgram implements PresentationsProgram {
  slides: Slide[];
  name = "Mircosoft Office PowerPoint";
  constructor() {
    this.slides = [];
  }
  createSlide(slide: Slide) {
    this.slides.push(slide);
  }
  changeSlide(slideId: number, content: object): void {
    this.slides = this.slides.map((s) =>
      s.id == slideId ? { ...s, content } : s
    );
  }
  savePresentation(path: string): void {
    console.log("Presentation is saved in: " + path);
  }
}
