import { COLORS } from "../constants/colors";

export class App {
  app: HTMLDivElement;

  constructor() {
    this.app = document.querySelector<HTMLDivElement>("#app") as HTMLDivElement;
    this.app.style.backgroundColor = COLORS.APP.BACKGROUND;
    this.app.style.margin = "0 auto";
    this.app.style.width = "400px";
    this.app.style.height = "100%";
  }
}
