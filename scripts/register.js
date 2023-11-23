const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("register-nama").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  const existingUser = localStorage.getItem("user");

  if (existingUser) {
    const users = JSON.parse(existingUser);

    // Periksa apakah alamat email sudah terdaftar
    const isEmailRegistered = users.some((user) => user.email === email);

    if (isEmailRegistered) {
      displayErrorMessage("Alamat email sudah terdaftar!");
    } else {
      const newUser = {
        nama: nama,
        email: email,
        password: password,
      };

      // Tambahkan user baru ke data pengguna
      users.push(newUser);
      localStorage.setItem("user", JSON.stringify(users));

      // alert("Registrasi berhasil. Anda dapat login sekarang.");
      window.location.assign("/pages/login.html");
    }
  } else {
    const newUser = [
      {
        nama: nama,
        email: email,
        password: password,
      },
    ];

    localStorage.setItem("user", JSON.stringify(newUser));

    // alert("Registrasi berhasil. Anda dapat login sekarang.");
    window.location.assign("/pages/login.html");
  }
});

function displayErrorMessage(message) {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = message;
  errorMessage.classList.add("text-red-500");

  // Ganti "login-password" dengan ID elemen tempat Anda ingin menampilkan pesan kesalahan
  document.getElementById("register-password").insertAdjacentElement("afterend", errorMessage);
}
