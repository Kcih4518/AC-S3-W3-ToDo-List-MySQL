# Todo List

使用 Node.js + Express + express-handlebars + passport.js + MySQL 打造的 Todo List 網頁。

## Getting Started

本專案已經設定 npm script, 因此可以直接透過 npm install 與 npm run 的方式來執行。

### Development environment

| Package            | Version  |
| ------------------ | -------- |
| mac Big Sur        | 11.4     |
| VS code            | 1.57.1   |
| Node.js            | v14.17.1 |
| Nodemon            | 2.0.7    |
| Express            | 4.17.1   |
| Express-handlebars | 5.3.2    |
| sequelize          | 6.6.5    |
| sequelize-cli      | 6.2.0    |
| mysql2             | 2.3.0    |
| method-override    | 3.0.0    |
| standard           | 16.0.3   |
| passport           | 0.4.1    |
| passport-local     | 1.0.0    |
| passport-facebook  | 3.0.0    |
| dotenv             | 10.0.0   |
| bcryptjs           | 2.4.3    |
| connect-flash      | 0.1.1    |

### Description

- 使用者可以瀏覽全部 Todos
- 使用者可以新增待辦事項
- 使用者可以修改待辦事項
- 使用者可以刪除待辦事項
- 使用者點擊編輯時會自動帶入過往資訊
- 使用者可以註冊帳號，註冊的資料包括：名字、email、密碼、確認密碼。
- 如果使用者已經註冊過、沒填寫必填欄位、或是密碼輸入錯誤，就註冊失敗，並回應給使用者錯誤訊息。
- 使用者也可以透過 Facebook Login 直接登入。
- 使用者必須登入才能使用 Todo 清單，如果沒登入，會被導向登入頁面。
- 使用者登入後，可以建立並管理專屬自己的一個 Todo 清單
- 使用者登出、註冊失敗、或登入失敗時，使用者都會在畫面上看到正確而清楚的系統訊息。
- 使用者的密碼使用 bcrypt 來處理。

### Installing

1. 透過 https 取得此專案

```bash
$ git clone https://github.com/Kcih4518/AC-S3-W3-ToDo-List-MySQL.git
```

2. 安裝 node module

```bash
$ cd AC-S3-W3-ToDo-List-MySQL
$ npm install
```

3. 根據需求修改.env.example 的內容並更換其檔名

```bash
$ vim .env.example
$ mv .env.example .env
```

4. 建立 MySQL 資料庫

本專案需在 local 建立 MySQL 並且使用 MySQL workbench。

```bash
drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;
```

5. 建立 MySQL 欄位

```bash
$ npx sequelize db:migrate
```

6. 載入種子資料

```bash
$ npx sequelize db:seed:all
```

7. 透過 npm 在 local 啟動 web server

```bash
$ npm run dev
Express is running on http://localhost:3000
```

8. 透過 Browser 打開 [http://localhost:3000](http://localhost:3000)

![](https://i.imgur.com/r8LS7I3.png)
