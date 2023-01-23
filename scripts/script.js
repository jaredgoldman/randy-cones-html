const appendRepeatedText = (text, symbol, element, length = 20) => {
  const repeatText = `${text} ${symbol} `;
  const repeatedArray = Array(length).fill(repeatText);
  repeatedArray.forEach((text) => {
    const textNode = document.createElement("span");
    textNode.textContent = text;
    element.appendChild(textNode);
  });
};

window.addEventListener("load", () => {
  const textArr = [
    "SERIES 5/5 SOON",
    "ALL TRAITS",
    "RANDY PIXELS SOLD OUT",
    "META-DESSERT",
    "SCOOP",
  ];

  textArr.forEach((text, i) => {
    const el = document.querySelector(`.divider-${i + 1}`);
    appendRepeatedText(text, "-", el);
  });
});
