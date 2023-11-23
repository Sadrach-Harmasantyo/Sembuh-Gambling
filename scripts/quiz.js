if (!localStorage.getItem("login")) {
  alert("Anda Belum Login");
  window.location.assign("/pages/penilaianDiri.html");
}

const questions = [
  {
    id: 1,
    question: "Apa pentingnya merencanakan anggaran keuangan pribadi?",
    options: [
      { text: "Tidak perlu merencanakan, uang selalu mencukupi", score: 0 },
      { text: "Menghindari pemborosan dan memastikan kestabilan keuangan", score: 3 },
      { text: "Anggaran hanya sesekali diperlukan", score: 1 },
      { text: "Lebih baik mengandalkan pendapatan bulanan tanpa rencana", score: 0 },
    ],
  },
  {
    id: 2,
    question: "Mengapa memiliki dana darurat sangat penting dalam manajemen keuangan?",
    options: [
      { text: "Tidak perlu dana darurat, bisa mengandalkan pinjaman", score: 0 },
      { text: "Melindungi dari keadaan darurat dan pengeluaran tak terduga", score: 3 },
      { text: "Dana darurat hanya untuk kebutuhan mewah", score: 1 },
      { text: "Dana darurat tidak relevan dalam manajemen keuangan", score: 0 },
    ],
  },
  {
    id: 3,
    question: "Bagaimana cara menghindari utang yang tidak perlu?",
    options: [
      { text: "Mengambil pinjaman setiap saat untuk kebutuhan sehari-hari", score: 0 },
      { text: "Hanya meminjam untuk keperluan yang benar-benar penting", score: 3 },
      { text: "Utang adalah bagian dari kehidupan sehari-hari", score: 1 },
      { text: "Tidak perlu memikirkan utang", score: 0 },
    ],
  },
  {
    id: 4,
    question: "Mengapa perlu merencanakan investasi untuk masa depan?",
    options: [
      { text: "Investasi tidak perlu, uang lebih baik disimpan di bawah kasur", score: 0 },
      { text: "Menghasilkan keuntungan dan memastikan keuangan pensiun", score: 3 },
      { text: "Investasi hanya cocok untuk orang kaya", score: 1 },
      { text: "Tidak perlu berinvestasi, hidup untuk saat ini", score: 0 },
    ],
  },
  {
    id: 5,
    question: "Bagaimana cara mengelola hutang kredit dengan bijak?",
    options: [
      { text: "Membayar hanya minimum setiap bulan", score: 0 },
      { text: "Melunasi secepat mungkin dan menghindari bunga tinggi", score: 3 },
      { text: "Hutang kredit tidak perlu diperhatikan", score: 1 },
      { text: "Menggunakan kartu kredit untuk kebutuhan sehari-hari", score: 0 },
    ],
  },
  {
    id: 6,
    question: "Apakah perlu membuat target keuangan jangka pendek dan panjang?",
    options: [
      { text: "Tidak perlu, keuangan bisa diatur kapan saja", score: 0 },
      { text: "Membantu fokus dan mencapai tujuan keuangan", score: 3 },
      { text: "Target keuangan hanya sesekali diperlukan", score: 1 },
      { text: "Lebih baik hidup tanpa rencana keuangan", score: 0 },
    ],
  },
  {
    id: 7,
    question: "Apa manfaat memiliki asuransi dalam perencanaan keuangan?",
    options: [
      { text: "Tidak perlu asuransi, uang lebih baik disimpan", score: 0 },
      { text: "Melindungi dari risiko finansial dan kejadian tak terduga", score: 3 },
      { text: "Asuransi hanya untuk orang yang takut risiko", score: 1 },
      { text: "Tidak memerlukan perlindungan asuransi", score: 0 },
    ],
  },
  {
    id: 8,
    question: "Bagaimana cara memilih jenis investasi yang sesuai dengan profil risiko?",
    options: [
      { text: "Investasi hanya berdasarkan saran teman-teman", score: 0 },
      { text: "Melakukan riset dan memahami profil risiko sebelum berinvestasi", score: 3 },
      { text: "Investasi tanpa memperhatikan risiko", score: 1 },
      { text: "Semua investasi memiliki risiko yang sama", score: 0 },
    ],
  },
  {
    id: 9,
    question: "Mengapa perlu menghindari godaan impulsive buying?",
    options: [
      { text: "Impulsive buying membuat hidup lebih seru", score: 0 },
      { text: "Menghemat uang dan mencegah pemborosan", score: 3 },
      { text: "Beli apa saja tanpa pertimbangan, tidak masalah", score: 1 },
      { text: "Tidak perlu memikirkan keuangan saat berbelanja", score: 0 },
    ],
  },
  {
    id: 10,
    question: "Bagaimana cara menciptakan kebiasaan menabung secara teratur?",
    options: [
      { text: "Menabung hanya jika ada sisa uang", score: 0 },
      { text: "Menetapkan jumlah tetap untuk ditabung setiap bulan", score: 3 },
      { text: "Tidak perlu menabung, uang bisa digunakan kapan saja", score: 1 },
      { text: "Menabung hanya saat ada promo atau diskon", score: 0 },
    ],
  },
];

let currQuestion = 0;
let score = 0;
let percentage = 0;

function loadQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  const questionElement = document.createElement("div");
  questionElement.classList.add("text-xl", "font-bold", "mb-4");
  questionElement.textContent = questions[currQuestion].question;

  const optionsElement = document.createElement("div");
  optionsElement.classList.add("space-y-4");

  questions[currQuestion].options.forEach((option, index) => {
    const optionElement = document.createElement("button");
    optionElement.classList.add("w-full", "py-2", "bg-[#2EC4B6]", "text-white", "rounded", "hover:bg-white", "hover:text-[#2EC4B6]", "font-semibold");

    optionElement.textContent = option.text;
    optionElement.addEventListener("click", () => handleOptionClick(index));

    optionsElement.appendChild(optionElement);
  });

  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function handleOptionClick(selectedIndex) {
  const selectedOption = questions[currQuestion].options[selectedIndex];
  if (selectedOption.score) {
    score += selectedOption.score;
  }

  if (currQuestion < questions.length - 1) {
    currQuestion++;
    percentage += 10;
    loadQuestion();
    updateProgressBar();
  } else {
    showResult();
  }
}

function showResult() {
  const progress = document.getElementById("progress");
  progress.classList.add("hidden");

  const quizContainer = document.getElementById("quiz-container");

  let resultText, resultClass;

  if (score >= 0 && score <= 10) {
    resultText = "Anda perlu meningkatkan pengetahuan keuangan Anda.";
    resultClass = "text-red-500";
  } else if (score > 10 && score <= 20) {
    resultText = "Anda memiliki pemahaman dasar tentang manajemen keuangan.";
    resultClass = "text-yellow-500";
  } else if (score > 20 && score <= 30) {
    resultText = "Anda telah memahami prinsip-prinsip manajemen keuangan dengan baik.";
    resultClass = "text-green-500";
  } else {
    resultText = "Skor Anda di luar rentang klasifikasi.";
    resultClass = "text-gray-500";
  }

  quizContainer.innerHTML = `
    <div class="text-xl font-bold text-center flex flex-col lg:flex-row gap-10">
      <div class="w-full lg:w-1/2 flex flex-col gap-5 items-center">
        <h1 class="${resultClass}">${resultText}</h1>
        <a href="penilaianDiri.html" class="bg-[#2EC4B6] text-white rounded-md font-semibold py-2 px-5 w-fit">Kembali</a>
      </div>
      <div class="w-full lg:w-1/2 rounded-lg overflow-hidden">
        <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9uZXklMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww" alt="" class="w-full h-full"/>
      </div>
    </div>
  `;
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = `${percentage}%`;
  const percentNumber = document.querySelector(".percent-number");
  percentNumber.textContent = `${percentage}%`;
}

// Initial load
loadQuestion();
