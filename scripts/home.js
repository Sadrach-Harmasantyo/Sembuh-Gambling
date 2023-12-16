import psikolog from "../data/dataPsikolog.js";

document.addEventListener("DOMContentLoaded", function () {
  function populatePsikologList(psikologData) {
    const psikologList = document.getElementById("psikolog-list-home");

    for (let i = 0; i < Math.min(4, psikologData.length); i++) {
      const psikolog = psikologData[i];

      const psikologCard = document.createElement("div");
      psikologCard.classList.add("w-full", "lg:w-1/4", "border-2", "rounded-md", "flex", "gap-5", "justify-center", "items-center", "flex-col", "p-5");

      psikologCard.innerHTML = `
          <div class="bg-slate-200 flex rounded-full justify-center items-center w-44">
            <img src="${psikolog.gambarProfil}" alt="img-profile" class="">
          </div>
          <div class="flex flex-col gap-5 w-full">
            <div class="w-fit rounded-full bg-red-100 py-1 px-2">
              <p class="text-red-500 font-semibold text-sm">Psikolog Profesional</p>
            </div>
            <h1 class="text-lg font-bold">${psikolog.nama}</h1>
            <div class="">
              <div class="flex gap-3">
                <img src="../assets/icon/people_alt.svg" alt="people" class="w-7">
                <p>${psikolog.jmlSesi}</p>
              </div>
              <div class="flex gap-3">
                <img src="../assets/icon/thumb_up_alt.svg" alt="thumb" class="w-7">
                <p>${psikolog.rating}</p>
              </div>
              <div class="flex gap-3">
                <img src="../assets/icon/work.svg" alt="work" class="w-7">
                <p>${psikolog.pengalaman}</p>
              </div>
          </div>
          <a href="pages/detailPsikolog.html?id=${psikolog.id}" class="w-full text-center py-2 px-4 rounded-full bg-[#2EC4B6] font-semibold text-white hover:bg-white hover:text-[#2EC4B6] transition-all duration-300 border hover:border hover:border-[#2EC4B6]">Selengkapnya</a>
        </div>
      `;

      psikologList.appendChild(psikologCard);
    }
  }

  populatePsikologList(psikolog);
});
