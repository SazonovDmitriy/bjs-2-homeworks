function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(",");
    let index = cache.findIndex((item) => item.hash === hash);

    if (index !== -1) {
      return "Из кэша: " + cache[index].value;
    };

    let result = func.apply(this, args);
    cache.push({"hash": hash, "value": result});

    if (cache.length > 5) {
      cache.splice(0, 1);
    };
    return "Вычисляем: " + result;
  };
  return wrapper;
};


function debounceDecoratorNew(func, ms) {
  let isThrottled = false,
  savedArgs,
  savedThis;

  return function (...args) {
    savedArgs = args;
    savedThis = this;
    if (isThrottled) {
      return
    }
    func.apply(savedThis, savedArgs)
    isThrottled = true;

    setTimeout(() => {
      func.apply(savedThis, savedArgs)
      isThrottled = false;
    }, ms)
  }
};
const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
console.log(setTimeout(upgradedSendSignal))
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс
console.log(setTimeout(upgradedSendSignal, 300))
setTimeout(upgradedSendSignal, 900); // проигнорировано аналогично
console.log(setTimeout(upgradedSendSignal, 900))
setTimeout(upgradedSendSignal, 1200); // проигнорировано аналогично
console.log(setTimeout(upgradedSendSignal, 1200))
setTimeout(upgradedSendSignal, 2300); // проигнорировано аналогично
console.log(setTimeout(upgradedSendSignal, 2300))
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен
console.log(setTimeout(upgradedSendSignal, 4400))
setTimeout(upgradedSendSignal, 4500); // проигнорировано аналогично
console.log(setTimeout(upgradedSendSignal, 4500))

function debounceDecorator2(func) {
  function wrapper(...args) {
    wrapper.count.push(args)
    return func.call(this, ...args)
  }
  wrapper.count = []
  return wrapper;
}
