# 春院指南 Life-in-YCU

> 🏠 这儿就是咱的家了

春院人的专属主页，[点击查看](https://ycu.wangcy.cf)


![](https://github.com/wchenyi/school-guide/raw/master/assets/screenshots/1.png)

![](https://github.com/wchenyi/school-guide/raw/master/assets/screenshots/2.png)

![](https://github.com/wchenyi/school-guide/raw/master/assets/screenshots/3.png)

* 电脑端、移动端适配
* 可切换百度/必应/谷歌搜索
* 宜春学院相关资源网站整理
* PWA 缓存技术，快速加载，可添加至主页、桌面

## 投稿、建议或意见

在 [Issue](https://github.com/wchenyi/school-guide/issues) 选择对应的模板并提交。

## 贵校也想整一个？

Fork，然后改动 [public/data.json](https://github.com/wchenyi/school-guide/blob/master/public/data.json)，即可拥有贵校专属的主页~

## 开发与 debug

```
yarn install
yarn serve
yarn lint
yarn build
```

## LICENSE

MIT
--
# 其他修改实践
* 修改title在public/index.html
* 修改图标在public/
* 修改背景图在assets/background
* 修改readme文件的图片中public/screenshots
* 修改pwa应用名称中./vue.config.js
* 修改界面边栏在src/App.vue
* 修改导航在src/App.vue
* 如遇到背景图片不显示----App.vue文件出错
* 替换标签图标在src/App.vue第218行，是网页格式

--
