const js = import("./node_modules/@foxxcn/hello-wasm/hello_wasm.js");
js.then((js) => {
    js.greet("WebAssembly");
});
