
function calculateWordInText(text) {
    
    let textLength =  text.trim().split(' ').length;
    console.log(textLength);
}

const result = (fileName, func) => {
  let xmlhttp =  new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
      let text = xmlhttp.responseText;
      func(text);
    }
  };

  xmlhttp.open("GET", fileName, true);
  xmlhttp.send();
};

result("../util/words.txt",calculateWordInText);

