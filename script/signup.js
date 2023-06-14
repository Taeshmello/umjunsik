function signup(event) {
    event.preventDefault();
  
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
  
    let newUser = {
      username: username,
      password: password
    };
  
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(function(response) {
        if (response.ok) {
          alert("회원가입이 완료되었습니다.");
          window.location.href = "http://127.0.0.1:5500/loginex.html";
        } else {
          alert("회원가입에 실패했습니다.");
        }
      })
      .catch(function(error) {
        console.error(error);
        alert("회원가입에 실패했습니다.");
      });
  }
  
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", signup);
  