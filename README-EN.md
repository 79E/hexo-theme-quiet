<div align="center">
  <a href="https://github.com/qiaobug/hexo-theme-quiet/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.79bk.cn/image/logo.png" alt="quiet logo" width="100">
  </a>
</div>

<h3 align="center">A simple and flat hexo theme</h3>  

<div align="center">
  <a href="https://www.79bk.cn/" target="_blank" rel="noopener noreferrer">
    <img alt="releases" src="https://img.shields.io/badge/author-qiaobug-blue.svg?style=flat-square&longCache=true">
  </a>
  <a href="https://hexo.io" target="_blank" rel="noopener noreferrer">
    <img alt="hexo" src="https://img.shields.io/badge/hexo-%3E=4.0.0-blue.svg?style=flat-square&logo=hexo&longCache=true">
  </a>
  <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
    <img alt="node" src="https://img.shields.io/badge/node-%3E=10.9.0-green.svg?style=flat-square&logo=Node.js&longCache=true">
  </a>
  <a href="https://github.com/qiaobug/hexo-theme-quiet/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
    <img alt="license" src="https://img.shields.io/badge/license-MIT-green.svg?style=flat-square&longCache=true">
  </a>
</div>

![Quiet](https://cdn.jsdelivr.net/gh/duogongneng/MyBlogImg/imgQuiet.png)

### Samples

- [Qiao Yue's Blog](https://www.79bk.cn/)
- [Taire's Blog](https://blog.taire.de)

（If you are using the Quiet theme, you're welcome to display your blog. Just add your blog in the `README.md` file and submit a PR. If you like this theme and want to bookmark it, please click on Star! Thank you~~ ）

### 🚁Getting started
[中文版 ](https://github.com/QiaoBug/hexo-theme-quiet/blob/master/README.md) 

Download the theme:

```
$ git clone https://github.com/QiaoBug/hexo-theme-quiet.git
```

Modify `_config.yml` of hexo to enable the quiet theme：

（Probably at the bottom of the file --- you need to put the downloaded theme file in the `themes` folder and change the name to `Quiet`）

```
theme: Quiet
```

For a cleaner display of the 3 columns, set the number of articles displayed on each page to 9 articles per page:

```
index_generator:
  path: ''
  per_page: 9
  order_by: -date
```

Set the following item to be the same as mine to display the code highlighting of the article 

```
# Example configuration
highlight:
  enable: true
  line_number: false
  auto_detect: true
  tab_replace: ''
  wrap: true
  hljs: true
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ''
```

#### 🔧Tags page

Go to the `source` folder in the root directory to create a `tags` folder and create a new `index.md` file 

```
---
title: tags
date: 2020-09-19 16:19:22
layout: "tags"
author: 79bk.cn
---
```

#### 🏂About page

Go to the `source` folder in the root directory and create the `about` folder and create a new `index.md` file 

```
---
title: About
date: 2020-11-03
aubot: Hannah Miller
portrait: 'https://cdn.jsdelivr.net/gh/duogongneng/MyBlogImg/imgIMG_7327.jpeg'
describe: 'Hi, this is me! I am real human and I like breathing very much'
type: "about"
layout: "about"
author: 79bk.cn
---
```

**Explanation**

`aubot` ：The name of the blog or blogger, this will be displayed at the top of the About page 

`portrait` : Avatar, link to your profile picture

`describe` ：Introduction (briefly describe yourself) 

Other attributes do not need to be modified 

**Content**

You can write a lot of things on the profile page, just like an article. 

PUt the content in the `index.md` file inside the `about` folder. 

#### 🎉Links page

Go to the `source` folder in the root directory and create a `links` folder to create a new `index.md` file 

```
---
title: Links
date: 2020-09-19
type: "links"
layout: "links"
author: 79bk.cn
---
```

**Content**

Put the content you want to describe in the `index.md` file under the `links` folder, it's the same procedure as the about page.

#### 🎪Categories page

Go to the `source` folder in the root directory and create a `categories` folder to create a new `index.md` file.

```
---
title: Categories
date: 2020-11-02
type: categories
layout: categories
author: 79bk.cn
---
```

### 📖Posts

You need to add an header when publishing an article:

```
title: A simple and flat Hexo static theme blog-Quiet 
categories: Projects
tags:
  - Hexo
  - Quiet
  - other
  - tags
  - you
  - use
excerpt: A simple and generous flat theme for Hexo - Quiet 
date: 2020-11-03 20:33:36
cover: 'https://cdn.jsdelivr.net/gh/duogongneng/MyBlogImg/imgQuietView.png'
```

**Explanation**

`title`: Title of your post

`categories`：Category (pro tip: only use one category per post)

`tags`：You can use multiple tags to describe the content

`excerpt`: A short description of the article

`date`：Creation date

`cover`：Thumbnail (you can leave this empty to use a random default cover) 

### 🏆Theme configuration

Enter the `_config.yml` configuration file of the `Quiet` file inside the `themes` folder in the theme root directory.

You can set the title of the website and change the Logo icons in it 

**Add Links**

There is a `linksList` in this configuration file, we can follow the example to add your friendship link 

### 📝 License

![LicenseMIT](https://img.shields.io/badge/License-MIT-brightgreen.svg) 

Open source according to [MIT](https://github.com/QiaoBug/hexo-theme-quiet/blob/master/LICENSE) protocol 



