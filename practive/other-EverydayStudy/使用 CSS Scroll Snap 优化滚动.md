### 使用 CSS Scroll Snap 优化滚动，提升用户体验 2021-01-12
## 滚动容器的基础知识

<div class="section">
  <div class="section__item">Item 1</div>
  <div class="section__item">Item 2</div>
  <div class="section__item">Item 3</div>
  <div class="section__item">Item 4</div>
  <div class="section__item">Item 5</div>
</div>
<style>
.section {
  white-space: nowrap; /*display: flex; 现在都使用 Flexbox*/
  overflow-x: auto;
}
</style>

## 在容器上使用scroll snap
<div class="section">
  <div class="section__item">Item 1</div>
  <div class="section__item">Item 2</div>
  <div class="section__item">Item 3</div>
  <div class="section__item">Item 4</div>
  <div class="section__item">Item 5</div>
</div>

<style>
.section {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.section__item {
  scroll-snap-align: start;
}

/*
.section {
  display: flex;  水平
  overflow-x: auto;
  scroll-snap-type: x;
}

.section {
  height: 250px;  垂直
  overflow-y: auto;
  scroll-snap-type: y;
}

.section__item {
  scroll-snap-align: start; 子项目将吸附到其水平滚动容器的开始处。
  scroll-snap-stop: always;  scroll-snap-stop的默认值是normal,要强制滚动捕捉到每个可能的点，应使用always。
}
*/
</style>

## scroll-padding设置所有侧面的滚动边距;scroll-margin设置滚动容器的子项之间的间距;

### CSS Scroll Snap 用例

## 图片列表 (样式) https://codepen.io/shadeed/pen/jOMrxYO
.images-list {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x;
  gap: 1rem;
  -webkit-overflow-scrolling: touch; /* Important for iOS devices */
}

.images-list img {
  scroll-snap-align: start;
}

## 全屏展示

<main>
  <section class="section section-1"></section>
  <section class="section section-2"></section>
  <section class="section section-3"></section>
  <section class="section section-4"></section>
  <section class="section section-5"></section>
</main>
<style>
main {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
}

.section {
  height: 100vh;
  scroll-snap-align: start;
}
</style>

## 块和内联

值得一提的是，对于scroll-snap-type，可以使用inline和block逻辑值。参见下面的示例
main {
  scroll-snap-type: inline mandatory;
}

## 可读性
使用 CSS scroll snap时，请确保可访问性。这是滚动对齐的一种不好用法，它阻止用户自由滚动内容以读取内容。

<style>
.wrapper {
  scroll-snap-type: y mandatory;
}

h2 {
  scroll-snap-align: start;
}
</style>