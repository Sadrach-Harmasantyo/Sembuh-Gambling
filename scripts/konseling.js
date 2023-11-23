import psikolog from "../data/dataPsikolog.js";

function populatePsikologSesuaiList(psikologData) {
  const psikologSesuaiList = document.getElementById("psikolog-sesuai-list");

  for (let i = 0; i < Math.min(4, psikologData.length); i++) {
    const psikolog = psikologData[i];

    const psikologCard = document.createElement("a");
    psikologCard.classList.add("p-6", "border-2", "rounded-md", "flex", "flex-col", "gap-5", "lg:w-[500px]", "w-full");
    psikologCard.href = `detailPsikolog.html?id=${psikolog.id}`;

    psikologCard.innerHTML = `
      <div class="w-full flex gap-5">
        <div class="w-1/3 md:w-1/6 lg:w-1/4 flex items-center">
          <div class="rounded-full w-24 h-24 bg-slate-200 overflow-hidden">
            <img src="${psikolog.gambarProfil}" alt="" />
          </div>
        </div>
        <div class="w-2/3 md:w-5/6 lg:w-3/4 flex flex-col gap-3">
          <div class="w-fit rounded-full bg-red-100 py-1 px-2">
            <p class="text-red-500 font-semibold text-sm">Psikolog Profesional</p>
          </div>
          <p class="font-bold text-xl">${psikolog.nama}</p>
        </div>
      </div>
      <div class="flex flex-wrap justify-start gap-5 lg:gap-0 lg:justify-evenly">
        <div class="flex items-center gap-3">
          <img src="../assets/icon/work.svg" alt="" class="w-7 h-7" />
          <p>${psikolog.pengalaman}</p>
        </div>
        <div class="flex items-center gap-3">
          <img src="../assets/icon/people_alt.svg" alt="" class="w-7 h-7" />
          <p>${psikolog.jmlSesi}</p>
        </div>
        <div class="flex items-center gap-3">
          <img src="../assets/icon/thumb_up_alt.svg" alt="" class="w-7 h-7" />
          <p>${psikolog.rating}</p>
        </div>
      </div>
    `;

    psikologSesuaiList.appendChild(psikologCard);
  }
}

populatePsikologSesuaiList(psikolog);

function populatePsikologList(psikologData) {
  const psikologList = document.getElementById("psikolog-list");

  psikologData.forEach((psikolog) => {
    const psikologCard = document.createElement("div");
    psikologCard.classList.add("bg-white", "rounded-lg", "shadow-lg", "p-7", "w-full", "mb-8", "flex", "flex-col", "items-center", "md:flex-row", "gap-4");

    psikologCard.innerHTML = `
          <div class="w-full md:w-1/3 flex justify-center">
            <div class="w-32 h-32 bg-slate-200 rounded-full">
              <img src="${psikolog.gambarProfil}" alt="Foto Profil" class="w-32 h-32 rounded-full mx-auto mb-4">
            </div>  
          </div>
          <div class="w-full flex flex-col items-start gap-3">
            <div class="w-fit rounded-full bg-red-100 py-1 px-2 self-center md:self-auto">
              <p class="text-red-500 font-semibold text-sm">Psikolog Profesional</p>
            </div>
            <h2 class="text-xl font-bold">${psikolog.nama}</h2>
            <div class="flex items-center gap-3">
              <img src="../assets/icon/people_alt.svg" alt="" class="w-7 h-7" />
              <p class="text-gray-600">${psikolog.jmlSesi}</p>
            </div>
            <div class="flex items-center gap-3">
              <img src="../assets/icon/thumb_up_alt.svg" alt="" class="w-7 h-7" />
              <p>${psikolog.rating}</p>
            </div>
            <div class="flex items-center gap-3">
              <img src="../assets/icon/work.svg" alt="" class="w-7 h-7" />
              <p>${psikolog.pengalaman}</p>
            </div>
            <div class="w-full flex justify-center md:justify-end">
              <a class="bg-[#2EC4B6] py-2 px-5 rounded-full text-white cursor-pointer font-semibold" href="detailPsikolog.html?id=${psikolog.id}">Selengkapnya</a>
            </div>
          </div>
        `;

    psikologList.appendChild(psikologCard);
  });
}

populatePsikologList(psikolog);
