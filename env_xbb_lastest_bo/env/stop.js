// stop对象
stop = (a) => {
  console.log_copy(`使用 stop arg->`, a);
};
bodavm.toolsFunc.safefunction(stop, "stop");
bodavm.toolsFunc.defineProperty(stop, "length", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 0
});
bodavm.toolsFunc.defineProperty(stop, "name", {
  configurable: true,
  enumerable: false,
  writable: false,
  value: 'stop'
});