function alphaCount (alphabet, text) {
  if (!alphabet || !text)
    return "no matches";
   
  let res = {}

  alphabet = alphabet.toLowerCase()//.split("").sort().join("")
  text = text.toLowerCase().split("")//.sort().reverse().join("")

  for(i of text) {
    if (alphabet.indexOf(i) >= 0) {
      res[i] = res[i] ? res[i]+1 : 1;
    }
  }

  if (res.length === 0)
    return "no matches"

  let res3=[]
  for(i of Object.keys(res)){
    res3.push([i,res[i]])
  }
  res3 = res3.sort().reverse();

  let res2 = ""
  for(i of res3) {
    res2 += i[0] +":"+ i[1] + ","
  }
  res2 = res2.slice(0,-1) // remove comma
  return res2;
}


// console.log(alphaCount("aBc","aabbccdd")); // a:2,b:2,c:2
console.log(alphaCount("hue_3", "anlecxkac.gpaoo._43_")); // e:1,_:2,3:1
