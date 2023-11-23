import artikel from "../data/dataArtikel.js";

const urlParams = new URLSearchParams(window.location.search);
const artikelId = parseInt(urlParams.get("id"));

const artikelDetailContainer = document.getElementById("artikel-detail");

const selectedArtikel = artikel.find((item) => item.id === artikelId);

if (selectedArtikel) {
  artikelDetailContainer.classList.add("w-5/6", "max-w-screen-lg", "flex", "gap-5", "flex-col", "border-b-2");

  artikelDetailContainer.innerHTML = `
    <h1 class="text-3xl md:text-4xl font-semibold">${selectedArtikel.judul}</h1>
    <div class="flex gap-5 items-center">
        <div class="w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center">
            <p>${selectedArtikel.inisial}</p>
        </div>
        <p>${selectedArtikel.penulis}</p>
        <p class="hidden md:block">${selectedArtikel.terbit}</p>
    </div>
    <p class="block md:hidden">${selectedArtikel.terbit}</p>
    <img src="${selectedArtikel.gambar}">
        <div class="text-justify">${selectedArtikel.isi}</div>
    </p>
  `;
} else {
  // Jika psikolog tidak ditemukan
  artikelDetailContainer.innerHTML = "<p>Artikel tidak ditemukan.</p>";
}

function populateArtikelList(artikelData) {
  const artikelList = document.getElementById("artikel-list");

  for (let i = 0; i < Math.min(3, artikelData.length); i++) {
    const artikel = artikelData[i];

    const artikelCard = document.createElement("div");
    artikelCard.classList.add("w-full", "lg:max-w-xs", "bg-white", "border", "rounded-lg", "shadow", "overflow-hidden");

    artikelCard.innerHTML = `
            <a href="artikelDetail.html?id=${artikel.id}">
                <img src="${artikel.gambar}" alt="" class="w-full h-48"/>
                <div class="p-5 flex flex-col gap-5">
                    <h1 class="font-semibold text-2xl">${artikel.judul}</h1>
                    <p class="text-justify line-clamp-3">
                        ${artikel.isi}
                    </p>
                    <div class="flex gap-5">
                        <div class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                            <p>${artikel.inisial}</p>
                        </div>
                        <div>
                            <p>${artikel.penulis}</p>
                            <p>${artikel.terbit}</p>
                        </div>
                    </div>
                </div>
            </a>
        `;

    artikelList.appendChild(artikelCard);
  }
}

populateArtikelList(artikel);
