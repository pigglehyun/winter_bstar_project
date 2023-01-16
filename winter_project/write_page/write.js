window.onload=function() {
  document.getElementById("addgroup").onclick=write;
 }

function write()  {
  var addtextValue = document.getElementById('contents').value;
  var addpicValue = document.getElementById('picfile').value;
  
  // 2. 추가할 li element 생성
  // 2-1. 추가할 li element 생성
  var textcontent = document.createElement("textcontent");
  var piccontent = document.createElement("piccontent");
  
  // 2-2. li에 id 속성 추가 
  textcontent.setAttribute('id',addtextValue);
  piccontent.setAttribute('id',addpicValue);

  // 2-3. li에 text node 추가 
  const textNode = document.createTextNode(addtextValue);
  textcontent.appendChild(textNode);

  const picNode = document.createTextNode(addpicValue);
  piccontent.appendChild(picNode);
  
  // 3. 생성된 li를 ol에 추가
  document
    .getElementById('writegroup')
    .appendChild(piccontent)
    .appendChild(textcontent);
  
}

/*function write(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick: () => setIsClicked(true) },
    isClicked ? 'Clicked' : 'Click here!'
  )
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(write), domContainer);
*/


