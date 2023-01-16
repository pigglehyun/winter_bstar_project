var authBtn = document.querySelector("#authBtn");
var findIDBtn = document.querySelector("#findIDBtn");

authBtn.addEventListener("click", sendAuthNo);
findIDBtn.addEventListener("click", findID);

const constName = "ㅇ";
const constEmail = "abc@abc.com";
const constAuthNo = "123456";
//임시 이름 : ㅇ
//임시 이메일 : abc@abc.com
//임시 인증번호 : 123456

function findID(){
    var name = document.querySelector("#InputName").value;
    var email = document.querySelector("#InputEmail").value;
    var authNo = document.querySelector("#authNo").value;

    if(name != "" && email != ""){
        if(authNo == ""){
            alert("인증번호를 입력하지 않았습니다.");
        }
        else if(authNo != constAuthNo){
            alert("인증번호가 일치하지 않습니다.");
        }
        else{
            //name, email로 id 찾기
            alert("아이디는 abc 입니다.");
        }
        document.querySelector("#InputName").value = "";
        document.querySelector("#InputEmail").value = "";
        document.querySelector("#authNo").value = "";
    }
    else if(name == ""){
        alert("이름을 입력하세요.");
    }
    else{
        alert("이메일 주소를 입력하세요.");
    }
}

function sendAuthNo(){
    var name = document.querySelector("#InputName").value;
    var email = document.querySelector("#InputEmail").value;
    if(name != "" && email != ""){
        alert("인증번호를 발송했습니다. 인증번호가 오지 않으면 입력하신 정보가 회원정보와 일치하는지 확인해주세요. ");
    }
    else if(name == ""){
        alert("이름을 입력하세요.");
    }
    else{
        alert("이메일 주소를 입력하세요.");
    }
}

var helpBlock = document.querySelector("#authNoProb");
helpBlock.addEventListener("mouseover", displayBlock);
helpBlock.addEventListener("mouseout", displayBlock)

function displayBlock(){
    var help = document.querySelector("#help");
    if(help.style.display == 'none'){
        help.style.display = 'block';
    }
    else{
        help.style.display = 'none';
    }
}