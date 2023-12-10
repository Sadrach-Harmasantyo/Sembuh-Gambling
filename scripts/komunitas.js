document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("small-modal");
  const userData = JSON.parse(localStorage.getItem("login"));

  if (userData) {
    console.log("Nama:", userData.nama);
    console.log("Email:", userData.email);
  } else {
    console.log("Data pengguna tidak ditemukan di local storage.");
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    login.addEventListener("click", () => {
      window.location.assign("/pages/login.html");
    });
  }

  localStorage.removeItem("imageData");

  // Get the necessary elements
  const imageInput = document.getElementById("imageInput");
  const imagePreview = document.getElementById("imagePreview");

  imageInput.onchange = function () {
    const file = imageInput.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imageDataURL = e.target.result;

        // Menyimpan data gambar ke local storage
        localStorage.setItem("imageData", imageDataURL);

        // Menampilkan gambar pada elemen img
        imagePreview.src = imageDataURL;
        imagePreview.classList.remove("hidden");
      };

      // Membaca konten file sebagai data URL
      reader.readAsDataURL(file);
    }
  };

  const inputPosting = document.getElementById("input-posting");
  const btnPosting = document.getElementById("btn-posting");
  let containerPosting = document.getElementById("container-posting");

  btnPosting.addEventListener("click", () => {
    if (inputPosting.value != "") {
      displayPosting(inputPosting.value);
      inputPosting.value = "";
    }

    containerPosting = document.getElementById("container-posting");
    containerPosting.classList.remove("hidden");

    imagePreview.classList.add("hidden");
  });

  function displayPosting(postingValue) {
    let postingWrapper = document.createElement("div");
    postingWrapper.classList.add("posting-wrapper");
    let storedImage = localStorage.getItem("imageData");

    postingWrapper.innerHTML = `
    <div class="posting p-6 border-2 rounded-md flex flex-col gap-5 w-full mb-5">
    <div class="w-full flex flex-col md:flex-row">
      <div class="w-full md:w-1/6 flex items-center">
        <div class="rounded-full w-24 h-24 bg-slate-200 overflow-hidden">
          <img src="../assets/user.png" alt="" />
        </div>
      </div>
      <div class="w-5/6 flex flex-col gap-3">
        <h1 class="text-xl font-bold">${userData.nama}</h1>
        <p>User</p>
        <button class="btn-hapus w-fit bg-[#2EC4B6] py-2 px-5 rounded-md text-white font-semibold">Hapus</button>
      </div>
    </div>
    <div>
      <p>
        ${inputPosting.value}
      </p>
    </div>
    <div class="flex gap-3 border-b-2 pb-5">
      <img id="imagePosting" src="${storedImage}" class="h-32 w-32 ${!storedImage ? "hidden" : ""}"></img>
    </div>
    <div class="container">
      <div class="balasan-wrapper">
        <div class="balasan w-full flex border-b-2 pb-5">
          <div class="w-1/4 md:w-1/6 flex items-center">
            <div class="rounded-full w-12 h-12 md:w-24 md:h-24 bg-slate-200 overflow-hidden">
              <img src="../assets/user.png" alt="" />
            </div>
          </div>
          <div class="w-3/4 md:w-5/6 flex flex-col gap-3">
            <p>Membalas</p>
            <div class="w-full flex flex-col md:flex-row gap-3 md:gap-10">
              <div class="w-full md:w-5/6">
                <input type="text" name="input-balasan" id="input-balasan" placeholder="Tulis Balasanmu" class="border-none focus:ring-0 rounded-md bg-gray-100 w-full" />
              </div>
              <div class="w-fit">
                <button id="btn-balas" class="py-2 bg-[#2EC4B6] px-5 rounded-full text-white font-semibold">Balas</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
    `;

    let btnHapus = postingWrapper.querySelector(".btn-hapus");

    btnHapus.addEventListener("click", () => {
      // Find the nearest posting wrapper element
      const postingWrapper = btnHapus.closest(".posting-wrapper");
      localStorage.removeItem("imageData");

      // Remove only the specific posting element
      postingWrapper.remove();
    });

    containerPosting.appendChild(postingWrapper);

    const inputBalasanList = postingWrapper.querySelectorAll("#input-balasan");
    const btnBalasList = postingWrapper.querySelectorAll("#btn-balas");
    const containerBalasList = postingWrapper.querySelectorAll(".container");

    btnBalasList.forEach((btnBalas, index) => {
      btnBalas.addEventListener("click", () => {
        if (inputBalasanList[index].value !== "") {
          displayBalasan(inputBalasanList[index].value, containerBalasList[index]);
          inputBalasanList[index].value = "";
        }
      });
    });

    function displayBalasan(balasanValue, containerBalas) {
      let balasanWrapper = document.createElement("div");
      balasanWrapper.classList.add("balasan-wrapper");

      balasanWrapper.innerHTML = `
    <div class="balasan w-full flex border-b-2 py-5">
      <div class="w-1/4 md:w-1/6 md:flex items-center">
        <div class="rounded-full w-12 h-12 md:w-24 md:h-24 bg-slate-200 overflow-hidden">
          <img src="../assets/user.png" alt="" />
        </div>
      </div>
      <div class="w-3/4 md:w-5/6 flex flex-col gap-3">
        <p>Membalas @hajinaim</p>
        <div class="w-full flex flex-col md:flex-row gap-3 md:gap-10">
          <div class="w-full md:w-5/6">
            <p>${balasanValue}</p>
          </div>
          <div class="w-fit">
            <button class="btn-hapus py-2 bg-[#2EC4B6] px-5 rounded-full text-white font-semibold">Hapus</button>
          </div>
        </div>
      </div>
    </div>
  `;

      let btnHapus = balasanWrapper.querySelector(".btn-hapus");

      btnHapus.addEventListener("click", () => {
        balasanWrapper.remove();
      });

      containerBalas.appendChild(balasanWrapper);
    }
  }

  const inputBalasanList = document.querySelectorAll("#input-balasan");
  const btnBalasList = document.querySelectorAll("#btn-balas");
  const containerBalasList = document.querySelectorAll(".container");

  btnBalasList.forEach((btnBalas, index) => {
    btnBalas.addEventListener("click", () => {
      if (inputBalasanList[index].value !== "") {
        displayBalasan(inputBalasanList[index].value, containerBalasList[index]);
        inputBalasanList[index].value = "";
      }
    });
  });

  function displayBalasan(balasanValue, containerBalas) {
    let balasanWrapper = document.createElement("div");
    balasanWrapper.classList.add("balasan-wrapper");

    balasanWrapper.innerHTML = `
    <div class="balasan w-full flex border-b-2 py-5">
      <div class="w-1/4 md:w-1/6 flex items-center">
        <div class="rounded-full w-12 h-12 md:w-24 md:h-24 bg-slate-200 overflow-hidden">
          <img src="../assets/user.png" alt="" />
        </div>
      </div>
      <div class="w-3/4 md:w-5/6 flex flex-col gap-3">
        <p>Membalas @hajinaim</p>
        <div class="w-full flex flex-col gap-3 md:flex-row md:gap-10">
          <div class="w-full md:w-5/6">
            <p>${balasanValue}</p>
          </div>
          <div class="w-fit md:w-1/6">
            <button class="btn-hapus py-2 bg-[#2EC4B6] px-5 rounded-full text-white font-semibold">Hapus</button>
          </div>
        </div>
      </div>
    </div>
  `;

    let btnHapus = balasanWrapper.querySelector(".btn-hapus");

    btnHapus.addEventListener("click", () => {
      balasanWrapper.remove();
    });

    containerBalas.appendChild(balasanWrapper);
  }
});
