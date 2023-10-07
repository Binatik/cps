# CPS - Ремонт техники

---

<!-- <img width="1162" alt="image" src="https://github.com/Binatik/images/assets/47430210/3a87ec04-64aa-4626-9a2c-2d8830b7d632"> -->

## Проверить

Проверить последнюю версию web приложения пока невозможно. `CI/CD` временно недоступен.

## Сборка
Веб упаковка была выполнена при помощи `webpack` используя настройку из `webpack.config`

## Разработчикам

Для запуска у вас должен быть установлен [Node.js](http://nodejs.org)

Для установки пакетов используется [npm](https://www.npmjs.com)

```bash
npm install -g npm
```

```bash
$ git clone repository # Клонирование репозитория
$ npm i # Установка зависимостей
$ npm run # Запуск mode режиме
```

```js
//scripts в package.json
"dev": "npx webpack serve --mode development",
"build": "webpack --mode production",
```

Запуск в режиме `dev` использует мод development и исполняется на локальном сервере.
```js
  devServer: {
    port: 3000,
    ...
  },
```
Cтилизация происходит используя `sass` или `scss`
```js
// по примеру
import '../styles/style.scss'
...
```
Для компиляции функций в более старые версии из менее ранних мы используем `@babel/preset-env` и `babel-loader`
```js
use: {
    loader: "babel-loader",
    options: {
    presets: ["@babel/preset-env"],
  },
},
```



