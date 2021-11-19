(function () {
  //手写promiseAll
  function promiseAll(_promise) {
    new Promise((reslove, reject) => {
      const promise = Array.from(_promise);
      const res = [];
      const len = promise.length;
      let count = 0;
      for (let index = 0; index < len; i++) {
        Promise.resolve(promise[idnex])
          .then((o) => {
            res[index] = o;
            if (++count === len) {
              reslove(r);
            }
          })
          .catch((e) => {
            reject(e);
          });
      }
    });
  }
})();
