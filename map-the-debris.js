function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  const getOrbitalPeriod = obj => {
    let r = earthRadius + obj.avgAlt;
    obj.orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(r, 3) / GM)
    );
    delete obj['avgAlt']
    return obj;
  }

  return arr.map(e => { return getOrbitalPeriod(e) })
}

orbitalPeriod([
    {name: "iss", avgAlt: 413.6}, 
    {name: "hubble", avgAlt: 556.7}, 
    {name: "moon", avgAlt: 378632.553}
  ])


// T = 2*pi*sqrt(r^3/GM)
