function openTab(tabName) {
  let i, tabContent, tabLinks;
  
  // Hide all tab content
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  
  // Remove "active" class from all tab links
  tabLinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  
  // Show the selected tab content and mark the tab link as active
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Activate the default tab (Profile) on page load
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab-link").click();
});


// 로그인 정보를 저장할 변수
let loggedInUser = null;

// 프로필 폼 요소 가져오기
const profileForm = document.getElementById("profileForm");
const nameInput = document.getElementById("name");
const affiliationInput = document.getElementById("affiliation");
const departmentInput = document.getElementById("department");

// 프로필 폼 제출 시 이벤트 처리
profileForm.addEventListener("submit", function(event) {
  event.preventDefault(); // 폼 제출 기본 동작 방지

  // 로그인한 사용자가 있는지 확인
  if (loggedInUser) {
    // 입력한 정보를 로그인한 사용자 정보에 저장
    loggedInUser.name = nameInput.value;
    loggedInUser.affiliation = affiliationInput.value;
    loggedInUser.department = departmentInput.value;

    // 저장 완료 메시지 출력
    alert("프로필 정보가 저장되었습니다.");
  } else {
    // 로그인한 사용자가 없는 경우 예외 처리
    alert("로그인을 먼저 해주세요.");
  }
});