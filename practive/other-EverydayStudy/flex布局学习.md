### flex 布局学习  2021-01-20


<style>
  /*
  |--------------------------------------------------------------------------
  | Flex栅格系统
  |--------------------------------------------------------------------------
  */
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col {
    flex: 1;
  }

  .col-lg-24 {
    flex-basis: 100%;
  }

  .col-lg-23 {
    flex-basis: 95.83333333333334%;
  }

  .col-lg-22 {
    flex-basis: 91.66666666666667%;
  }

  .col-lg-21 {
    flex-basis: 87.5%;
  }

  .col-lg-20 {
    flex-basis: 83.33333333333334%;
  }

  .col-lg-19 {
    flex-basis: 79.16666666666667%;
  }

  .col-lg-18 {
    flex-basis: 75%;
  }

  .col-lg-17 {
    flex-basis: 70.83333333333334%;
  }

  .col-lg-16 {
    flex-basis: 66.66666666666667%;
  }

  .col-lg-15 {
    flex-basis: 62.50000000000001%;
  }

  .col-lg-14 {
    flex-basis: 58.333333333333336%;
  }

  .col-lg-13 {
    flex-basis: 54.16666666666667%;
  }

  .col-lg-12 {
    flex-basis: 50%;
  }

  .col-lg-11 {
    flex-basis: 45.833333333333336%;
  }

  .col-lg-10 {
    flex-basis: 41.66666666666667%;
  }

  .col-lg-9 {
    flex-basis: 37.5%;
  }

  .col-lg-8 {
    flex-basis: 33.333333333333336%;
  }

  .col-lg-7 {
    flex-basis: 29.166666666666668%;
  }

  .col-lg-6 {
    flex-basis: 25%;
  }

  .col-lg-5 {
    flex-basis: 20.833333333333336%;
  }

  .col-lg-4 {
    flex-basis: 16.666666666666668%;
  }

  .col-lg-3 {
    flex-basis: 12.5%;
  }

  .col-lg-2 {
    flex-basis: 8.333333333333334%;
  }

  .col-lg-1 {
    flex-basis: 4.166666666666667%;
  }

  /*
  |--------------------------------------------------------------------------
  | 辅助样式
  |--------------------------------------------------------------------------
  */
  .row {
    font-family: sans-serif;
    color: #fff;
  }

  [class^='col'] {
    margin-bottom: .2em;
    padding: .3em;
    background: tomato;
    /*border: 1px solid rgba(0, 0, 0, 0.5);*/
  }

  [class^='col']:nth-child(even) {
    background: royalblue;
  }
</style>

<h2>单行分列</h2>
<div class="row">
  <div class="col-lg-1">1</div>
  <div class="col-lg-23">23</div>
</div>
<div class="row">
  <div class="col-lg-6">6</div>
  <div class="col-lg-18">18</div>
</div>
<div class="row">
  <div class="col-lg-9">9</div>
  <div class="col-lg-15">15</div>
</div>
<div class="row">
  <div class="col">even</div>
  <div class="col">even</div>
</div>
<div class="row">
  <div class="col-lg-14">14</div>
  <div class="col">even</div>
</div>

<h2>多行分列</h2>
<div class="row">
  <div class="col-lg-12">12</div>
  <div class="col-lg-12">12</div>
  <div class="col-lg-12">12</div>
  <div class="col-lg-12">12</div>
  <div class="col-lg-12">12</div>
  <div class="col-lg-12">12</div>
</div>