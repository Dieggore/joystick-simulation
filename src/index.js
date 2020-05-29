import "./styles.css";

const bluebox = document.getElementById("blue-box");

const BOTTOM = "ArrowDown";
const TOP = "ArrowUp";
const RIGHT = "ArrowRight";
const LEFT = "ArrowLeft";

const positionsMap = {
  [RIGHT]: { right: true },
  [LEFT]: { left: true },
  [TOP]: { top: true },
  [BOTTOM]: { bottom: true }
};

const setBoxPosition = arrowKeys =>
  Object.keys(positionsMap[arrowKeys]).forEach(position =>
    bluebox ? (bluebox.style[position] = 0) : null
  );

const resetBoxPosition = arrowKeys =>
  Object.keys(positionsMap[arrowKeys]).forEach(position =>
    bluebox ? (bluebox.style[position] = null) : null
  );

document.addEventListener("keydown", ({ code }) => setBoxPosition(code));

document.addEventListener("keyup", ({ code }) => resetBoxPosition(code));
