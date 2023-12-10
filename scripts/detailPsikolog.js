import psikolog from "../data/dataPsikolog.js";

document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();

  // Mengambil ID psikolog dari URL
  const urlParams = new URLSearchParams(window.location.search);
  const psikologId = parseInt(urlParams.get("id"));

  // Mengambil elemen HTML di mana Anda ingin menampilkan detail psikolog
  const psikologDetailContainer = document.getElementById("psikolog-detail");

  // Cari psikolog berdasarkan ID
  const selectedPsikolog = psikolog.find((psikolog) => psikolog.id === psikologId);

  // Memeriksa apakah psikolog dengan ID yang diberikan ditemukan
  if (selectedPsikolog) {
    // Menampilkan detail psikolog
    psikologDetailContainer.classList.add("bg-white", "rounded-lg", "border-2", "p-5", "w-5/6", "mb-8", "flex", "flex-col", "items-center", "gap-4", "max-w-screen-lg");

    psikologDetailContainer.innerHTML = `
    <div class="flex flex-col md:flex-row w-full gap-5">
        <div class="w-full md:w-1/3 flex justify-center items-center">
            <div class="w-40 h-40 bg-slate-200 rounded-full">
                <img src="${selectedPsikolog.gambarProfil}" alt="Foto Profil" class="w-full rounded-full mx-auto mb-4">
            </div>   
        </div>

        <div class="w-full flex flex-col items-start gap-5">
            <div class="w-fit rounded-full bg-red-100 py-1 px-2 self-center md:self-auto">
              <p class="text-red-500 font-semibold text-sm">Psikolog Profesional</p>
            </div>
            <h2 class="text-xl font-bold">${selectedPsikolog.nama}</h2>
            <div class="flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-8 w-full">
              <div class="flex items-center gap-3">
                <img src="../assets/icon/people_alt.svg" alt="" class="w-7 h-7" />
                <p>${selectedPsikolog.jmlSesi}</p>
              </div>
              <div class="flex items-center gap-3">
                <img src="../assets/icon/thumb_up_alt.svg" alt="" class="w-7 h-7" />
                <p>${selectedPsikolog.rating}</p>
              </div>
              <div class="flex items-center gap-3">
                <img src="../assets/icon/work.svg" alt="" class="w-7 h-7" />
                <p>${selectedPsikolog.pengalaman}</p>
              </div>
            </div>
        </div>
    </div>
    
    <div>
        <p class="text-gray-700 text-justify">${selectedPsikolog.detail}</p>
    </div>
    
`;
  } else {
    // Jika psikolog tidak ditemukan
    psikologDetailContainer.innerHTML = "<p>Psikolog tidak ditemukan.</p>";
  }

  const randomReviews = [
    {
      id: 1,
      nama: "A",
      tanggal: "2023-05-15",
      ulasan: "Sangat puas dengan layanan dari Psikolog. Dia sangat membantu saya mengatasi masalah kecemasan saya dalam judi online.",
    },
    {
      id: 2,
      nama: "BTA",
      tanggal: "2023-05-20",
      ulasan: "Psikolog adalah seseorang yang sangat empatik dan berpengetahuan. Saya merasa lebih baik setelah konsultasi dengannya.",
    },
    {
      id: 3,
      nama: "CR",
      tanggal: "2023-05-25",
      ulasan: "Psikolog sangat luar biasa. Saya merasa didengarkan dan dipahami selama sesi konsultasi.",
    },
    {
      id: 4,
      nama: "DKS",
      tanggal: "2023-06-05",
      ulasan: "Saya sangat berterima kasih kepada Psikolog atas bantuannya. Dia sangat profesional dan penyayang.",
    },
    {
      id: 5,
      nama: "EM",
      tanggal: "2023-06-10",
      ulasan: "Psikolog sangat ahli dalam bidangnya. Saya merasa lebih baik setelah beberapa sesi bersamanya.",
    },
  ];

  const layanan = [
    {
      id: 1,
      Judul: "Konseling Individu",
      fasilitas: [
        "Psikolog rata-rata berusia 30 - 40 tahun",
        "Pengalaman menjadi psikolog >3 tahun",
        "Jumlah Klien yang ditangani berkisar 200+",
        "Memberikan dukungan khusus untuk individu yang ingin membebaskan diri dari masalah perjudian, dengan pendekatan personal dan bimbingan profesional untuk mencapai kebebasan dari judi",
        "Biaya <b>299.000 per sesi</b>",
      ],
    },
    {
      id: 2,
      Judul: "Konseling Keluarga",
      fasilitas: [
        "Psikolog rata-rata berusia 30 - 40 tahun",
        "Pengalaman menjadi psikolog >3 tahun",
        "Jumlah Klien yang ditangani berkisar 200+",
        "Memberikan dukungan penuh untuk keluarga yang berjuang dengan dampak perjudian, membantu mereka pulih dengan fokus pada harmoni keluarga dan pemulihan dari judi.",
        "Biaya <b>499.000 per sesi</b>",
      ],
    },
    {
      id: 3,
      Judul: "Konseling Profesional",
      fasilitas: [
        "Psikolog rata-rata berusia 30 - 55 tahun",
        "Pengalaman menjadi psikolog >8 tahun",
        "Jumlah Klien yang ditangani berkisar 500+",
        "Menyediakan dukungan holistik untuk membebaskan diri dari masalah perjudian, mencakup penanganan adiksi, gangguan klinis berat, serta membantu individu mencapai kesejahteraan dan kebebasan dari judi.",
        "Biaya <b>699.000 per sesi</b>",
      ],
    },
  ];

  // Mendapatkan elemen tombol Layanan dan Ulasan
  const layananButton = document.getElementById("layanan-button");
  const ulasanButton = document.getElementById("ulasan-button");

  // Mendapatkan elemen div untuk menampilkan Layanan dan Ulasan
  const layananUlasanContainer = document.getElementById("layanan-ulasan");

  // Mengatur tampilan awal
  let layananHTML = "";

  layanan.forEach((layananItem) => {
    layananHTML += `
    <div class="flex w-full flex-col gap-5 p-0 md:p-5 border-b-2 border-slate-200 mb-5">
        <h1>${layananItem.Judul}</h1>   
        <div class="flex flex-col gap-3">
            ${layananItem.fasilitas
              .map(
                (fasilitas) => `
                    <p class="text-gray-600 text-md">✅  ${fasilitas}</p>`
              )
              .join("")}
        </div>
        <div class="w-full flex justify-center md:justify-end mb-5 md:mb-0">
            <button id="buatJadwal" class="py-2 px-5 bg-[#2EC4B6] rounded-full text-white font-semibold">Buat Jadwal Konseling</button>
        </div>
    </div>
  `;
  });
  layananUlasanContainer.innerHTML = layananHTML;

  // Menambahkan event listener ke tombol Layanan
  layananButton.addEventListener("click", function () {
    layananButton.style.borderBottom = "2px solid #2EC4B6";

    ulasanButton.style.borderBottom = "none";

    layananUlasanContainer.innerHTML = layananHTML;
  });

  // Menambahkan event listener ke tombol Ulasan
  ulasanButton.addEventListener("click", function () {
    layananButton.style.borderBottom = "none";

    ulasanButton.style.borderBottom = "2px solid #2EC4B6";

    let ulasanHTML = "";
    randomReviews.forEach((review) => {
      ulasanHTML += `
    <div class="flex w-full flex-col gap-5 mb-5 border-b-2 border-slate-200 p-0 md:p-5">
      <div class="flex gap-5">
        <div class="w-1/3 lg:w-1/12 md:w-1/5 flex justify-start items-center">
          <div class="w-20 h-20 rounded-full bg-slate-200 flex justify-center items-center">
            <h1>${review.nama}</h1>
          </div>
        </div>
        <div class="w-full flex flex-col justify-evenly">
          <h1>${review.nama}</h1>
          <h1>${review.tanggal}</h1>
        </div>
      </div>
      <div class="text-justify mb-5 md:mb-0">${review.ulasan}</div>
    </div>
  `;
    });

    layananUlasanContainer.innerHTML = ulasanHTML;
  });

  const modal = document.getElementById("small-modal");
  const login = document.getElementById("login");

  const isLoggedIn = localStorage.getItem("login");
  console.log(isLoggedIn);

  const buatJadwalList = document.querySelectorAll("#buatJadwal");

  buatJadwalList.forEach((element) => {
    element.addEventListener("click", () => {
      if (isLoggedIn) {
        // Pengguna sudah login, buka tautan di tab baru
        console.log("sudah login");
        window.open("https://whatsapp.com", "_blank");
      } else {
        // Pengguna belum login, tampilkan modal login
        console.log("belum login");

        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }

      login.addEventListener("click", () => {
        window.location.assign("/pages/login.html");
      });
    });
  });
});
