'use strict';

import { default as wasm, greet } from "./pkg/hello_wasm.js";

document.getElementById('coco')
    .addEventListener('click', event => {
        speak();
    });

wasm().then((module) => {
    speak();
});

function speak() {
    document.getElementById('greeting-text').textContent = greet();
}