function convertHTML(str) {
  let symbols = {0: [/\&/g,'&amp;'], 1: [/\</g, '&lt;'], 2: [/\>/g, '&gt;'], 3:[/\"/g, '&quot;'], 4: [/\'/g, '&apos;']};
  let s = str;
  
  for(let i = 0; i < Object.keys(symbols).length; i++){
    let regex = symbols[i][0];
    if(regex.exec(str) != null) {
      s = s.replace(regex, symbols[i][1]);
    }
  }
  
  return s;
}

function teste() {
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML("Sixty > twelve"));
  console.log(convertHTML('Stuff in "quotation marks"'));
  console.log(convertHTML("Schindler's List"));
  console.log(convertHTML("<>"));
}
