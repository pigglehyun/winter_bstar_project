const login_ID = document.getElementById('ID');
const login_PW = document.getElementById('PW');

function getLogin() {
    if( (login_ID.value == 'abc') && (login_PW.value == 123) ) {
        
        alert('Hi!');

        location.href = '../main_page/main.html';
    }
    else if(login_ID.value == ''){
        alert('아이디를 입력해주세요.');
    }
    else if(login_PW.value == ''){
        alert('비밀번호를 입력해주세요.');
    }
}

function searchPW() {
    location.href = '../find_page/find.html';
}

function getJoin() {
    location.href = '../signUp_page/signUp.html';
}