var findBtn = document.querySelector("#findBtn");
findBtn.addEventListener("click", findPassword);

const userID = "abc";

function findPassword(){
    var id = document.querySelector("#InputId").value;
    if(id != ""){
        //임시 아이디 : abc
        //아이디가 있는지 찾아보기
        //있으면 비밀번호 재설정 페이지로 넘어가기
        if(id == userID){
            window.open('../../resetPW_page/resetPW.html');
        }
        else{
            alert("아이디를 찾을 수 없습니다.");
            document.querySelector("#InputId").value = "";
        }
    }
    else{
        alert("아이디를 입력하세요.");
    }
}