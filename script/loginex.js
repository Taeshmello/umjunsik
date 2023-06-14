// 로그인 버튼 클릭 시 실행되는 함수
function login() {
  event.preventDefault(); // 폼 기본 동작 방지
  
  // 입력한 아이디와 비밀번호 가져오기
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // JSON 파일에서 사용자 정보 가져오기
  fetch("users.json")
    .then(response => response.json())
    .then(data => {
      // 사용자 정보 확인
      const users = data.users;
      const loggedInUser = users.find(user => user.username === username && user.password === password);
      
      if (loggedInUser) {
        // 로그인 성공 시 프로필 페이지로 이동
        window.location.href = "profile.html";
      } else {
        // 로그인 실패 시 알림 메시지 출력
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

// 회원가입 버튼 클릭 시 실행되는 함수
function signup() {
  event.preventDefault(); // 폼 기본 동작 방지
  
  // 입력한 회원 정보 가져오기
  const name = document.getElementById("name").value;
  const affiliation = document.getElementById("affiliation").value;
  const field = document.getElementById("field").value;
  
  // 회원 정보 JSON 파일에 저장
  const newUser = {
    "name": name,
    "affiliation": affiliation,
    "field": field
  };
  
  fetch("users.json")
    .then(response => response.json())
    .then(data => {
      // 기존 사용자 정보에 새로운 회원 정보 추가
      data.users.push(newUser);
      
      // 업데이트된 사용자 정보 JSON 파일 저장
      const updatedData = JSON.stringify(data);
      fetch("users.json", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: updatedData
      })
      .then(response => response.json())
      .then(data => {
        // 회원가입 성공 시 로그인 페이지로 이동
        window.location.href = "index.html";
      })
      .catch(error => {
        console.error("Error:", error);
      });
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

// 로그인 페이지 이벤트 리스너 등록
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", login);

// 회원가입 페이지 이벤트 리스너 등록
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", signup);
