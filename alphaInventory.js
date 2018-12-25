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
  return res;
}


console.log(alphaCount("aBc","aabbccdd")); //"a:2,b:2,c:2"
