function truthCheck(collection, pre) {
  const check = [];

  for (let key in collection) {
    if (collection[key][pre]) {
      check.push(true);
    } else {
      check.push(false);
    }
  }

  return check.every(e => e === true);
}

truthCheck([
    {"user": "Tinky-Winky", "sex": "male"}, 
    {"user": "Dipsy", "sex": "male"}, 
    {"user": "Laa-Laa", "sex": "female"}, 
    {"user": "Po", "sex": null}
  ], "sex");
