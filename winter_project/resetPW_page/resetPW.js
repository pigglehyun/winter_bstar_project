var resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", resetPW);

function checkPW(){
    //영문, 숫자, 특수문자를 포함하고 8자 이상 16자 이내로 입력해주세요.
    //숫자와 영문을 혼합해야 합니다.
    //서버에서 .. 해야.. 
}

function resetPW(){
    var newPW = document.querySelector("#new_pw").value;
    var confPW = document.querySelector("#new_conf_pw").value;

    checkPW();
    
    if(newPW != "" && confPW != ""){
        if(newPW == confPW){
            //변경된 비밀번호 정보 넘겨주기
            alert("비밀번호가 변경되었습니다.");
            //login 페이지로 이동
            window.open('../login_page/login.html');
        }
        else{
            alert("비밀번호 확인이 잘못 입력되었습니다!!");
        }
        document.querySelector("#new_pw").value = "";
        document.querySelector("#new_conf_pw").value = "";
        document.querySelector("#new_pw").focus();
    }
    else if(newPW == ""){
        alert("새 비밀번호를 입력하세요.");
    }
    else{
        alert("새 비밀번호 확인을 입력하세요.");
    }
}