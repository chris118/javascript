1. es6 转 es5
babel js/index.js --out-file js/index-es5.js

2. 转换require
browserify js/index-es5.js -o js/bundle.js