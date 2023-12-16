import artikel from "../data/dataArtikel.js";

function populateArtikelList(artikelData) {
  const artikelList = document.getElementById("artikel-list");

  artikelData.forEach((artikel) => {
    const artikelCard = document.createElement("div");
    artikelCard.classList.add("max-w-xs", "bg-white", "border", "rounded-lg", "shadow", "overflow-hidden", "transition-all", "duration-300", "hover:bg-slate-100");

    artikelCard.innerHTML = `
        <a href="artikelDetail.html?id=${artikel.id}">
            <img src="${artikel.gambar}" alt="" class="h-48 w-full"/>
            <div class="p-5 flex flex-col gap-5">
                <h1 class="font-semibold text-2xl line-clamp-2">${artikel.judul}</h1>
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
  });
}

populateArtikelList(artikel);
