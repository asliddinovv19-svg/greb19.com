<<<<<<< HEAD
// Ro‘yxatdan o‘tish
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("user", JSON.stringify({ name, email, password }));
  alert("Ro‘yxatdan o‘tildi!");
});

// Kirish
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === email && user.password === password) {
    alert("Xush kelibsiz, " + user.name + "!");
    window.location.href = "profile.html";
  } else {
    alert("Email yoki parol noto‘g‘ri");
  }
});
=======
// Ro‘yxatdan o‘tish
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("user", JSON.stringify({ name, email, password }));
  alert("Ro‘yxatdan o‘tildi!");
});

// Kirish
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === email && user.password === password) {
    alert("Xush kelibsiz, " + user.name + "!");
    window.location.href = "profile.html";
  } else {
    alert("Email yoki parol noto‘g‘ri");
  }
});
>>>>>>> 49844de1a885838918ca1b8ce805332ec497d517
