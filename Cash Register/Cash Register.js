function checkCashRegister(price, cash, cid) {
    // calculate the change due by subtracting the price from the cash given
    let change = cash * 100 - price * 100;
    // initialize a variable to keep track of the total cash in the drawer
    let cidTotal = 0;
    // loop through the cid array to calculate the total cash in drawer
    for (let elem of cid){
      cidTotal += elem[1]*100
    }
    // check if the total cash in drawer is less than the change due
    if (change > cidTotal){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    // check if the total cash in drawer is equal to the change due
    else if (change === cidTotal){
      return {status: "CLOSED", change: cid}
    }
    else {
      // reverse the order of the cid array to start with the highest denomination
      cid = cid.reverse()
      // initialize an empty array to hold the change
      let answer = []
      // create an object to hold the value of each denomination
      let moneyUnits = {
        'ONE HUNDRED': 10000,
        'TWENTY': 2000,
        'TEN': 1000,
        'FIVE': 500,
        'ONE': 100,
        'QUARTER': 25,
        'DIME': 10,
        'NICKEL': 5,
        'PENNY': 1}
      // loop through the cid array
      for (let elem of cid){
        // create an array to hold the denomination name and the amount of that denomination to return
        let holder = [elem[0], 0]
        // convert the amount in cid to cents
        elem[1] = elem[1]*100
        // while there is still change due and the denomination is available
        while (change >= moneyUnits[elem[0]] && elem[1] > 0){
            // subtract the denomination value from the change due
            change -= moneyUnits[elem[0]]
            // subtract the denomination value from the amount available in cid
            elem[1] -= moneyUnits[elem[0]]
            // add the denomination value to the holder array
            holder[1] += moneyUnits[elem[0]]/100
        }
        // if the holder array contains a denomination value, add it to the answer array
        if (holder[1] > 0){
          answer.push(holder)
        }
      }
      // if there is still change due, return "INSUFFICIENT_FUNDS"
      if (change > 0){
          return {status: "INSUFFICIENT_FUNDS", change: []}
      }
      // otherwise, return the change in the "OPEN" status
      return {status: "OPEN", change: answer}
    }
      return change;
  }
  
