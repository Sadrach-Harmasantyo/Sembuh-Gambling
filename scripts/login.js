// Login Form
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const storedUsers = localStorage.getItem("user");

  if (storedUsers) {
    const users = JSON.parse(storedUsers);
    const user = users.find((user) => user.email === email);

    if (user && user.password === password) {
      // Login berhasil
      localStorage.setItem("login", JSON.stringify({ nama: user.nama, email: email, password: password }));
      window.location.assign("/home.html");
    } else {
      // Email atau kata sandi salah
      displayErrorMessage("Email atau kata sandi salah!");
    }
  } else {
    // Tidak ada pengguna terdaftar
    displayErrorMessage("Anda belum terdaftar!");
  }
});

function displayErrorMessage(message) {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = message;
  errorMessage.classList.add("text-red-500");

  // Ganti "login-password" dengan ID elemen tempat Anda ingin menampilkan pesan kesalahan
  document.getElementById("login-password").insertAdjacentElement("afterend", errorMessage);
}
