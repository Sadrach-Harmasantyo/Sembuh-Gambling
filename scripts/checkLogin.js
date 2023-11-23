document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-button");
  const profileButton = document.getElementById("profile-button");

  // Cek apakah pengguna sudah login
  const isLoggedIn = localStorage.getItem("login");
  console.log(isLoggedIn);

  if (isLoggedIn) {
    // Pengguna sudah login, tampilkan tombol profil dan sembunyikan tombol login
    loginButton.style.display = "none";
    profileButton.style.display = "block";
    console.log("sudah login");
  } else {
    // Pengguna belum login, tampilkan tombol login dan sembunyikan tombol profil
    loginButton.style.display = "block";
    profileButton.style.display = "none";
    console.log("belum login");
  }
});
