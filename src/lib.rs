mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


fn get_index(width: u32, row: u32, column: u32) -> usize {
    (row * width + column) as usize
}

#[wasm_bindgen]
pub struct JuliaSet {
    width: usize,
    height: usize,
    iterations: u32,
    cx: f64,
    cy: f64,
    hues: Vec<u8>,
}

impl JuliaSet {
    fn get_index(&self, row: usize, column: usize) -> usize {
        (row * self.width + column) as usize
    }
}

#[wasm_bindgen]
impl JuliaSet {
    pub fn new(iterations: u32, cx: f64, cy: f64) -> JuliaSet {
        let max_real =    2f64;
        let min_real =   -2f64;
        let max_imag =  1.5f64;
        let min_imag = -1.5f64;

        let mut real = cx;
        if cx < min_real {
            real = min_real;
        } else if cx > max_real {
            real = max_real;
        }

        let mut imag = cy;
        if cy < min_imag {
            imag = min_imag;
        } else if cy > max_imag {
            imag = max_imag;
        }

        JuliaSet {
            width: 1024,
            height: 1024,
            iterations: iterations,
            cx: real,
            cy: imag,
            hues: vec![],
        }
    }

    pub fn render(&mut self) {
        let mut hues = vec![0; self.height * self.width];

        for x in 0..self.width as usize {
            for y in 0..self.height as usize {
                let widthf64 = self.width as f64;
                let heightf64 = self.height as f64;
                let mut zx: f64 = 3.0 * (x as f64 - 0.5 * widthf64) / widthf64;
                let mut zy: f64= 2.0 * (y as f64 - 0.5 * heightf64) / heightf64;

                let mut i = self.iterations;
                while zx * zx + zy * zy < 4.0 && i > 1 {
                    let tmp = zx * zx - zy * zy + self.cx;
                    zy = 2.0 * zx * zy + self.cy;
                    zx = tmp;
                    i -= 1;
                }

                hues[self.get_index(x, y)] = i as u8;
            }
        }

        self.hues = hues;
    }

    pub fn width(&self) -> usize {
        self.width
    }

    pub fn height(&self) -> usize {
        self.height
    }

    pub fn hues(&self) -> *const u8 {
        self.hues.as_ptr()
    }
}