rm -rf node_modules/wasm-fractals
cd ..
wasm-pack build
cd www
npm install
npm run start
