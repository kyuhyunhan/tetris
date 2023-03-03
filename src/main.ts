import "./style.css";
import { App } from "./components/app";
import { Button } from "./components/button";
import { COLORS } from "./constants/colors";

const root = document.querySelector<HTMLElement>(":root");

const body = document.querySelector<HTMLBodyElement>("body");
if (body) {
  body.style.margin = "0";
  body.style.width = "100vw";
  body.style.height = "100vh";
  body.style.backgroundColor = COLORS.GENERAL.BACKGROUND;
}

const app = new App();
const startButton = new Button({ value: "start" });
// app.appendElement(startButton);
