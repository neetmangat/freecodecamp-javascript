function addTogether() {
  const numCheck = (num) => {
    return typeof num === 'number' ? num : undefined;
  };
  var args = Array.from(arguments);
  return args.some(nums => typeof nums !== "number")
    ? undefined
    : args.length > 1
    ? args.reduce((acc, n) => (acc += n), 0)
    : n => (typeof n === "number" ? n + args[0] : undefined);
}

addTogether(2);
