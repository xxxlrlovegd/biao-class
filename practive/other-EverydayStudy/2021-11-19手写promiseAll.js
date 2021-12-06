(function () {
  //手写promiseAll
  function promiseAll(_promise) {
    new Promise((reslove, reject) => {
      const promise = Array.from(_promise);
      const res = [];
      const len = promise.length;
      let count = 0;
      for (let index = 0; index < len; index++) {
        Promise.resolve(promise[index])
          .then((o) => {
            res[index] = o;
            if (++count === len) {
              reslove(res);
            }
          })
          .catch((e) => {
            reject(e);
          });
      }
    });
  }
})();
