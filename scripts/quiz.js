const questions = [
  {
    id: 1,
    question: "Berapa persen dari gaji bulanan Anda yang biasanya dihabiskan untuk biaya hidup?",
    options: [
      { text: "Kurang dari 25%", score1: 25 },
      { text: "Antara 25% - 50%", score1: 50 },
      { text: "Antara 50% - 75%", score1: 75 },
      { text: "Lebih dari 75%", score1: 100 },
    ],
  },
  {
    id: 2,
    question: "Berapa persen dari gaji bulanan Anda yang biasanya dihabiskan untuk perjudian online?",
    options: [
      { text: "Kurang dari 25%", score2: 25 },
      { text: "Antara 25% - 50%", score2: 50 },
      { text: "Antara 50% - 75%", score2: 75 },
      { text: "Lebih dari 75%", score2: 100 },
    ],
  },
  {
    id: 3,
    question: "Berapa persen dari gaji bulanan Anda yang biasanya dihabiskan untuk kegiatan investasi?",
    options: [
      { text: "Kurang dari 25%", score3: 25 },
      { text: "Antara 25% - 50%", score3: 50 },
      { text: "Antara 50% - 75%", score3: 75 },
      { text: "Lebih dari 75%", score3: 100 },
    ],
  },
  {
    id: 4,
    question: "Berapa persen dari gaji bulanan Anda yang biasanya dihabiskan untuk membayar hutang/cicilan?",
    options: [
      { text: "Kurang dari 25%", score4: 25 },
      { text: "Antara 25% - 50%", score4: 50 },
      { text: "Antara 50% - 75%", score4: 75 },
      { text: "Lebih dari 75%", score4: 100 },
    ],
  },
  {
    id: 5,
    question: "Berapa persen dari gaji bulanan Anda yang biasanya digunakan untuk hiburan?",
    options: [
      { text: "Kurang dari 25%", score5: 25 },
      { text: "Antara 25% - 50%", score5: 50 },
      { text: "Antara 50% - 75%", score5: 75 },
      { text: "Lebih dari 75%", score5: 100 },
    ],
  },
];

let currQuestion = 0;
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
let percentage = 0;
let totalScore = 0;

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
  if (selectedOption.score1) {
    score1 += selectedOption.score1;
    totalScore += selectedOption.score1;
  } else if (selectedOption.score2) {
    score2 += selectedOption.score2;
    totalScore += selectedOption.score2;
  } else if (selectedOption.score3) {
    score3 += selectedOption.score3;
    totalScore += selectedOption.score3;
  } else if (selectedOption.score4) {
    score4 += selectedOption.score4;
    totalScore += selectedOption.score4;
  } else if (selectedOption.score5) {
    score5 += selectedOption.score5;
    totalScore += selectedOption.score5;
  }

  if (currQuestion < questions.length - 1) {
    currQuestion++;
    percentage += 20;
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

  let resultText;
  let recommendationText;

  // Assuming you have a variable 'score' defined somewhere
  if (score2 > score1 && score2 > score3 && score2 > score4 && score2 > score5) {
    resultText = "Anda perlu mengurangi pengeluaran judi Anda.";
    recommendationText = "Dapat dilihat bahwa pengeluaran judi anda terbesar daripada pengeluaran yang lain. Kurangi pengeluaran tersebut dan tingkatkan investasi anda untuk hasil yang lebih maksimal";
  } else if (score2 < score1 && score2 < score3 && score2 < score4 && score2 < score5) {
    resultText = "Hasilmu bagus, pengeluaran judi Anda kecil. Tingkatkan investasi Anda.";
    recommendationText = "Dapat dilihat bahwa pengeluaran judi anda terkecil daripada pengeluaran yang lain. Anda dapat meningkatkan investasi anda untuk hasil yang lebih maksimal";
  } else if (score3 > score1 && score3 > score2 && score3 > score4 && score3 > score5) {
    resultText = "Hasilmu bagus, pertahankan dan tingkatkan investasi Anda.";
    recommendationText = "Dapat dilihat bahwa pengeluaran investasi anda terbesar daripada pengeluaran yang lain. Pertahankan hal tersebut untuk hasil yang maksimal";
  } else if (score1 > score2 && score1 > score3 && score1 > score4 && score1 > score5) {
    resultText = "Biaya hidup anda tinggi, berhati-hatilah terhadap pengeluaran yang lain";
    recommendationText = "Dapat dilihat bahwa pengeluaran biaya hidup anda terbesar daripada pengeluaran yang lain. Kurangi pengeluaran tersebut dan tingkatkan investasi anda untuk hasil yang lebih maksimal";
  } else if (score4 > score1 && score4 > score2 && score4 > score3 && score4 > score5) {
    resultText = "Anda perlu berhati-hati dalam pengeluaran cicilan/hutang anda";
    recommendationText = "Dapat dilihat bahwa pengeluaran cicilan/hutang anda terbesar daripada pengeluaran yang lain. Kurangi pengeluaran tersebut dan tingkatkan investasi anda untuk hasil yang lebih maksimal";
  } else if (score5 > score1 && score5 > score2 && score5 > score3 && score5 > score4) {
    resultText = "Pengeluaran hiburan anda tinggi, berhati-hatilah terhadap pengeluaran yang lain";
    recommendationText = "Dapat dilihat bahwa pengeluaran hiburan anda terbesar daripada pengeluaran yang lain. Kurangi pengeluaran tersebut dan tingkatkan investasi anda untuk hasil yang lebih maksimal";
  } else if (score1 === score2 && score1 === score3 && score1 === score4 && score1 === score5) {
    resultText = "Pengeluaran Anda seimbang di setiap kategori.";
    recommendationText = "Dapat dilihat bahwa pengeluaran anda seimbang disetiap kategori. Anda dapat mengurangi pengeluaran judi anda dan meningkatkan investasi anda untuk hasil yang lebih maksimal";
  } else {
    resultText = "Hasil anda cukup menarik";
    recommendationText = "Dapat dilihat bahwa pengeluaran anda cukup bervariasi. Anda dapat meningkatkan investasi anda untuk hasil yang lebih maksimal";
  }

  // Set the innerHTML based on the result
  quizContainer.innerHTML = `
    <div class="text-xl font-bold text-center flex flex-col lg:flex-row gap-10">
      <div class="w-full lg:w-1/2 flex flex-col gap-5 items-center justify-center">
        <h1 class="text-4xl font-bold">Tahukah Kamu?</h1>
        <h1 class="text-xl font-semibold">${resultText}</h1>
      </div>
      <div class="w-full lg:w-1/2">
        <div class="rounded-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9uZXklMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww" alt="" class="w-full"/>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col lg:flex-row gap-5 mt-32">
      <div class="w-full lg:w-1/2">
        <canvas id="myChart"></canvas>
      </div>
      <div class="w-full lg:w-1/2 flex flex-col gap-5 items-center justify-center">
        <h1 class="text-lg">${recommendationText}</h1>
        <a href="penilaianDiri.html" class="bg-[#2EC4B6] text-white rounded-md font-semibold py-2 px-5 w-fit">Kembali</a>
      </div>
    </div>
  `;

  // Create doughnut chart
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Biaya Hidup", "Perjudian Online", "Investasi", "Hutang/Cicilan", "Hiburan"],
      datasets: [
        {
          label: "Skor",
          data: [score1, score2, score3, score4, score5],
          backgroundColor: ["rgb(34, 197, 74)", "rgb(54, 162, 235)", "rgb(255, 205, 86)", "rgb(255, 99, 132)", "rgb(153, 102, 255)"],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "white", // Mengatur warna label menjadi putih
          },
        },
      },
    },
  });
}

function updateProgressBar() {
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = `${percentage}%`;
  const percentNumber = document.querySelector(".percent-number");
  percentNumber.textContent = `${percentage}%`;
}

// Initial load
loadQuestion();
