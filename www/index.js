import { JuliaSet } from "wasm-fractals";
import { memory } from "wasm-fractals/wasm_fractals_bg";

let fractal = JuliaSet.new(420, -0.7269, 0.1889);
const width = fractal.width();
const height = fractal.height();
console.log("height "+height+" width "+width);

const canvas = document.getElementById("fractal-canvas");
const ctx = canvas.getContext("2d");

const getIndex = (row, column) => {
  return row * width + column;
};

const hueToRgb = (hue) => {
  let r = hue << 2;
  let g = hue << 1;
  let b = hue;

  return "rgb("+r+", "+g+", "+b+")";
}

const drawFractal = () => {
  fractal.render();
  const huesPtr = fractal.hues();
  const hues = new Uint8Array(memory.buffer, huesPtr, width * height);

  ctx.beginPath();

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const idx = getIndex(row, col);
      let hue = hues[idx];
      ctx.fillStyle = hueToRgb(hue);
      ctx.fillRect(col, row, 1, 1);
    }
  }

  ctx.stroke();

  console.log("drawn");
};

drawFractal();

const realInput = document.getElementById("real");
const imagInput = document.getElementById("imag");

const renderBtn = document.getElementById("render");
renderBtn.addEventListener("click", event => {
  fractal = JuliaSet.new(
    420,
    realInput.value,
    imagInput.value
  );
  drawFractal();
});