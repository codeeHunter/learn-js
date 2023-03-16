Function.prototype.defer = function (ms) {
  let fn = this;
  setTimeout(() => fn.apply(this), ms);
};
