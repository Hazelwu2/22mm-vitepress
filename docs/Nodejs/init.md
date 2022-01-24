建立 Nodejs 專案，目標是做 API Server，與資料庫互動

## 建立 index.js
建立 app.js，做為專案進入點
``` zsh
cd /node-api
touch app.js
```

## 套件 nodemon
安裝 nodemon，每次修改檔案存檔時會自動更新程式，不需要關掉node再重新run node app.js
``` zsh
npm i nodemon -g
```

開啟 package.json設定快捷，跑npm run dev時實際上執行 `nodemon app.js`
``` js
{
  "name": "node-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.2"
  }
}
```

## 套件 http, request
安裝套件 http, request
``` zsh
npm i http request --save
```

## 安裝 MongoDB
```
brew update
brew tap mongodb/brew
brew install mongodb-community@5.0
brew services start mongodb-community
mongo
```

進入 mongo 互動介面
```
show dbs // 顯示所有 db
use test_local // 建立並切換到 test_local db
db.test.save({name: 'hazel'})
```
`use test_local`
單純輸入這行指令是不會建立資料庫的，要等到後面的save指令，才會同步建立資料庫以及資料表