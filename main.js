

const domStringBuilder = () => {
  // let domString = '';
  //array.forEach()
  // printToDom('container', domString);
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const init = () => {
  domStringBuilder();
};

init();
