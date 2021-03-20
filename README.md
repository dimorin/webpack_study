# webpack study
[webpack 공식 사이트](https://webpack.js.org/) <br>
[create app](https://createapp.dev/) <br>
[생활코딩 webpack](https://opentutorials.org/module/4566)

## webpack 설치
```bash
npm init -y
npm i -D webpack webpack-cli
```
## webpack 실행
### 방법1
```bash
npx webpack --entry ./src/index.js --output-path ./public --mode production
```
### 방법2
webpack.config.js<br>
```js
const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
};
```

## npx
npx 는 package runner(실행) 이다. <br>
'mypackage' 라는 패키지를 실행한다고 해보자.
```bash
node_modules/.bin/mypackage
```
or
```json
{
  "name": "머시기",
  "version": "1.0.0",
  "scripts": {
    "mypackage": "./node_modules/.bin/mypackage"
  }
}
```
```bash
npm run mypackage
```
or
```bash
npx mypackage
npx webpack --watch
```

