### 运行
1. ```cd app```
2. ```npm install```
3. ```npm run start```在localhost:3000打开网页

### 开发
1. 网页在views文件夹下
2. 静态文件在public下，在html路径就写```/images/icon.png```这样就能访问到```app/public/images/icon.png```图片
3. 路由在routes路径下，添加路由文件后需要在```app.js```中添加
```javascript
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
```
4. 使用[skeleton](http://getskeleton.com/)作为栅栏系统
5. 使用[EJS](https://ejs.bootcss.com/)模版引擎