import "./style.css";
import { COLORS } from "./constants/colors";
import { launchApp } from "./app";
import { drawCanvas } from "./canvas";

const root = document.querySelector<HTMLElement>(":root");

const body = document.querySelector<HTMLBodyElement>("body");
body!.style.margin = "0";
body!.style.width = "100vw";
body!.style.height = "100vh";
body!.style.backgroundColor = COLORS.GENERAL.BACKGROUND;

launchApp();
drawCanvas();
