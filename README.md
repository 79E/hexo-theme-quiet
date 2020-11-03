![Quiet](https://www.79bk.cn/image/logo.png)



<h3 style="text-align: center;">一款简约的 Hexo 主题</3>

<div style="margin: auto; text-align: center;">
	<img src="https://img.shields.io/badge/github-QiaoBug-brightgreen.svg">
  <img src="https://img.shields.io/badge/Hexo->=4.0-blue.svg">
    <img src="https://img.shields.io/badge/node->=10.9.0-red.svg">
      <img src="https://img.shields.io/badge/license-MIT-green.svg">
</div>

![Quiet](https://cdn.jsdelivr.net/gh/duogongneng/MyBlogImg/imgQuiet.png)

### ⛱预览Dome

- [乔越博客](https://www.79bk.cn/)

（如果您正在使用 Quiet 主题，欢迎展示您的博客哦，只需在 `README.md` 文件中加入您的博客，提交 PR 即可。如果你喜欢这个主题想要收藏下请点下 Star 谢谢～～）

### 🚁快速使用

🍏我们首先下载主题

```
$ git clone https://github.com/QiaoBug/hexo-theme-quiet.git
```

🍐然后我们修改Hexo根目录下的 `_config.yml` 文件启用 Quiet 主题：

（大概在最后的位置 --- 你需要将下载下来主题文件放在 themes里面并且将名字修改为 Quiet ）

```
theme: Quiet
```

建议将每页展示的文章数量设置为 每页9篇

```
index_generator:
  path: ''
  per_page: 9
  order_by: -date
```

将下面此项设置为`false`即可显示文章的代码高亮

```
highlight:
  enable: false
```

#### 🔧标签页

进入根目录下的`source`文件夹下创建`tag`文件夹新建`index.md`文件

```
---
title: tags
date: 2020-09-19 16:19:22
layout: "tags"
author: 79bk.cn
---
```

#### 🏂简介页

进入根目录下的`source`文件夹下创建`about`文件夹新建`index.md`文件

```
---
title: 个人简介
date: 2020-11-03
aubot: Cange-Q
portrait: 'https://cdn.jsdelivr.net/gh/duogongneng/MyBlogImg/imgIMG_7327.jpeg'
describe: '一个阳光快乐的BOY,在正合适的年龄里希望遇见正好的你。'
type: "about"
layout: "about"
author: 79bk.cn
---
```

**解释**

`aubot` ：博主名称显示在 About 页面的最上面

`portrait` ：头像

`describe` ：简介（简短的描述下你自己）

其他的不需要修改

**内容**

在简介页面你可以写很多的东西 你可以向写文章一样去写你的简介

你只需将内容写在 `about`文件夹下`index.md`文件里面

#### 🎉友情链接

进入根目录下的`source`文件夹下创建`links`文件夹新建`index.md`文件

```
---
title: 友情链接
date: 2020-09-19
type: "links"
layout: "links"
author: 79bk.cn
---
```

**内容**

你可能需要描述你的友情链接 那么你就需要将你想要描述的内容写在`links`文件夹下的`index.md`文件内

你会发现和 简介页 内容写法是一样的

#### 🎪分类页

进入根目录下的`source`文件夹下创建`categories`文件夹新建`index.md`文件

```
---
title: 文章分类
date: 2020-11-02
type: categories
layout: categories
author: 79bk.cn
---
```

### 🏆主题配置

我们进入主题根目录下的`themes`文件夹下的`Quiet`文件里面的`_config.yml`配置文件

我们可以在里面 设置网站的标题,各种Logo图标

**添加友情链接**

在此配置文件中有个 `linksList` 我们可以仿照着去添加你的友情链接

### 📝 License

![LicenseMIT](https://img.shields.io/badge/License-MIT-brightgreen.svg) 

根据 [MIT](https://github.com/QiaoBug/hexo-theme-quiet/blob/master/LICENSE) 协议开源

