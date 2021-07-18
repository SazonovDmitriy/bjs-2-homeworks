let cache = {};
function cachingDecoratorNew(func) {
  const hash = args.join(",");
  if (hash in cache) {
    return cache[hash];
  } else {
    let result = func.push(...args);
    cache[hash] = result;
  }
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
