import { COLORS } from "./constants/colors";

export const launchApp = () => {
  const app = document.querySelector<HTMLDivElement>("#app");
  if (app) {
    app.style.backgroundColor = COLORS.APP.BACKGROUND;
    app.style.margin = "0 auto";
    app.style.width = "400px";
    app.style.height = "100%";
  }
};
