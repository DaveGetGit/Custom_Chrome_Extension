console.log("Chrome Extension Development");

let paragraphs = document.getElementsByTagName("p");

for (let para of paragraphs) {
  para.style.backgroundColor = "#008282";
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message) {
  console.log(message.txt);
}
