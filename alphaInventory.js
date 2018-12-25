function alphaCount (alphabet, text) {
  if (!alphabet || !text)
    return "no matches";
   
  let res = {}

  alphabet = alphabet.toLowerCase()
  text = text.toLowerCase()

  for(i of text) {
    if (alphabet.indexOf(i) >= 0) {
      res[i] = res[i] ? res[i]+1 : 1;
    }
  }

  let res2 = ""
  for(i of Object.keys(res)) {
    res2 += i +":"+ res[i] + ","
  }
  res2 = res2.slice(0,-1)
  return res2;
}


console.log(alphaCount("aBc","aabbccdd")); //"a:2,b:2,c:2"
