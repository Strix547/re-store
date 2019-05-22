const compose = (...func) => comp => {
  return func.reduceRight((wrapped, fn) => fn(wrapped), comp);
}

export default compose