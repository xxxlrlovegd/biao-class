(function () {
  //使用异步add实现sum函数
  /*
  请实现一个 sum 函数，接收一个数组 arr 进行累加，并且只能使用add异步方法

  add 函数已实现，模拟异步请求后端返回一个相加后的值
  */
  // 1.串行 实现累加
  function add(a, b) {
    return Promise.resolve(a + b);
  }
  function sum(arr) {
    if (arr.length === 1) return arr[0];
    return arr.reduce((x, y) => Promise.resolve(x).then((x) => add(x, y)));
  }
  sum([1, 2, 3, 4, 5, 6]); //21

  //插一个map中的使用 返回的是一个新数组
  let arr = [1, 2, 3, 4];
  let newArr = arr.map((x) => x * x);
  console.log(newArr);

  //2.并行 实现累加
  //如何实现 chunk 函数，数组进行分组[3]
  function add1(x, y) {
    return Promise.resolve(x + y);
  }
  function chunk(list, size) {
    const l = [];
    for (let i = 0; i < list.length; i++) {
      const index = Math.floor(i / size);
      l[index] ??= [];
      l[index].push(list[i]);
    }
    return l;
  }
  chunk([1, 2, 3, 4, 5], 2); //[[1,2],[3,4],[5]]
  async function sum1(arr) {
    if (arr.length === 1) return arr[0];
    const promises = chunk(arr, 2).map(([x, y]) =>
      y === undefined ? x : add1(x, y)
    );
    console.log("promises", promises);
    return Promise.all(promises).then((list) => sum1(list));
  }
  sum1([1, 2, 3, 4, 5, 6]); //21

  //如何实现 promise.map，限制 promise 并发数[2]
  //妈呀 这题好难啊 不做了 今天不做了明天做明天做
  let list = [10, 7, 5, 4];
  let lsx = ["A", "B", "C", "D"];
  function getPower(arr, year) {
    for (var i = 0; i < year * 12; i++) {
      let aim = Math.max(...arr);
      let aimIndex = arr.indexOf(aim);
      arr[aimIndex] -= arr.length;
      arr.forEach((item, index) => {
        arr[index]++;
      });
    }
    let maxIndex = arr.indexOf(Math.max(...arr));
    let result = "最大流水线为" + lsx[maxIndex] + "每月产值" + list[maxIndex];
    return result;
  }
  console.log(getPower(list, 5));

  let ar = [15, 2, 8, 13];
  for (let i = 0; i < ar.length; i++) {
    let maxCount = 0;
    for (let j = i; j < ar.length; j++) {
      if (ar[i] < ar[j + 1] && i != ar.length - 1) {
        maxCount = ar[j];
        break;
      } else {
        maxCount = -1;
        break;
      }
    }
    console.log(ar[i] + "->" + maxCount);
  }

  // O(2n)
  //最坏情况就是从大到小的一个列表加最后一个数值是最大的
})();
