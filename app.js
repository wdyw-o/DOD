/* ============================================================
   1. ПЕРЕМЕННЫЕ И ЭЛЕМЕНТЫ
   ============================================================ */
const header = document.getElementById("header");
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

const quizBody = document.getElementById("quizBody");
const quizResult = document.getElementById("quizResult");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

/* ============================================================
   2. МОБИЛЬНОЕ МЕНЮ
   ============================================================ */
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    burgerBtn.classList.remove("active");
    mobileMenu.classList.remove("open");
  });
});

/* ============================================================
   3. ШАПКА: скролл + подсветка навигации + отступ body
   ============================================================ */
function onScroll() {
  const scrollY = window.scrollY;

  // Сжатие шапки
  if (scrollY > 20) {
    header.classList.add("scrolled");
    document.body.style.paddingTop = "88px";
  } else {
    header.classList.remove("scrolled");
    document.body.style.paddingTop = "108px";
  }

  // Подсветка активного пункта навигации
  const scrollPos = scrollY + 120;
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", onScroll);
onScroll(); // запуск при загрузке

/* ============================================================
   4. ПЛАВНАЯ ПРОКРУТКА К ЯКОРЯМ
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#" || targetId === "") return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const headerOffset = header.offsetHeight + 16;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  });
});

/* ============================================================
   5. ФОРМА ЗАПИСИ НА ДОД
   ============================================================ */
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    const originalText = btn.textContent;

    btn.textContent = "Отправка...";
    btn.disabled = true;

    setTimeout(() => {
      alert(
        "✅ Спасибо! Мы отправили подтверждение на ваш e-mail и напомним о мероприятии за 24 часа.",
      );
      e.target.reset();
      btn.textContent = originalText;
      btn.disabled = false;
    }, 1000);
  });
}

/* ============================================================
   ПОЛНЫЙ script.js — Люберецкий техникум, специальность 38.02.01
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* ==========================================================
       1. ШАПКА: скролл + подсветка навигации
       ========================================================== */
  const header = document.getElementById("header");

  function onScroll() {
    if (!header) return;

    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Подсветка активного пункта
    const scrollPos = window.scrollY + 150;
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll();

  /* ==========================================================
       2. МОБИЛЬНОЕ МЕНЮ
       ========================================================== */
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle("active");
      mobileMenu.classList.toggle("open");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        burgerBtn.classList.remove("active");
        mobileMenu.classList.remove("open");
      });
    });
  }

  /* ==========================================================
       3. ПЛАВНАЯ ПРОКРУТКА
       ========================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = header ? header.offsetHeight + 16 : 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    });
  });

  /* ==========================================================
       4. ФОРМА ЗАПИСИ
       ========================================================== */
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = e.target.querySelector("button");
      const originalText = btn.textContent;

      btn.textContent = "Отправка...";
      btn.disabled = true;

      setTimeout(() => {
        alert("✅ Спасибо! Мы отправили подтверждение на ваш e-mail.");
        e.target.reset();
        btn.textContent = originalText;
        btn.disabled = false;
      }, 1000);
    });
  }

  /* ==========================================================
       5. КВИЗ (полностью изолирован)
       ========================================================== */
  const quizBody = document.getElementById("quizBody");
  const quizResult = document.getElementById("quizResult");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (
    quizBody &&
    quizResult &&
    progressBar &&
    progressText &&
    prevBtn &&
    nextBtn
  ) {
    console.log("✅ Квиз: все элементы найдены");
    initQuiz();
  } else {
    console.warn("⚠️ Квиз: не все элементы найдены, пропускаем");
    console.log({
      quizBody,
      quizResult,
      progressBar,
      progressText,
      prevBtn,
      nextBtn,
    });
  }

  function initQuiz() {
    const quizData = [
      {
        question: "Как ты относишься к цифрам и таблицам?",
        options: [
          { text: "Обожаю, могу часами считать и анализировать", score: 3 },
          { text: "Нормально, если в этом есть практический смысл", score: 2 },
          { text: "Не моё, предпочитаю творчество и свободу", score: 0 },
        ],
      },
      {
        question: "Насколько ты внимателен к деталям?",
        options: [
          {
            text: "Очень, замечаю мелочи, которые другие пропускают",
            score: 3,
          },
          { text: "Стараюсь быть внимательным, но иногда бывает", score: 2 },
          { text: "Чаще вижу общую картину, детали не важны", score: 0 },
        ],
      },
      {
        question: "Как ты обычно принимаешь решения?",
        options: [
          { text: "Анализирую факты, цифры и логические цепочки", score: 3 },
          { text: "Слушаю интуицию, но потом проверяю фактами", score: 2 },
          { text: "Полагаюсь исключительно на чувства и эмоции", score: 0 },
        ],
      },
      {
        question: "Тебе нравится разбираться, как устроен бизнес изнутри?",
        options: [
          {
            text: "Да, особенно в вопросах денег, налогов и процессов",
            score: 3,
          },
          {
            text: "Интересно в общих чертах, но не хочу углубляться",
            score: 2,
          },
          { text: "Честно говоря, вообще не задумываюсь об этом", score: 0 },
        ],
      },
      {
        question: "Как ты относишься к работе с документами и правилами?",
        options: [
          {
            text: "Положительно, люблю порядок, чёткость и структуру",
            score: 3,
          },
          { text: "Могу работать, если понимаю, что это важно", score: 2 },
          { text: "Предпочитаю хаос и полную свободу действий", score: 0 },
        ],
      },
      {
        question: "Готов ли ты нести ответственность за финансовые решения?",
        options: [
          { text: "Да, я умею отвечать за свои действия и решения", score: 3 },
          {
            text: "По мере возможностей и под присмотром наставника",
            score: 2,
          },
          { text: "Стараюсь избегать любой ответственности", score: 0 },
        ],
      },
      {
        question: "Тебе интересна стабильная карьера с понятным ростом?",
        options: [
          { text: "Да, для меня это один из главных приоритетов", score: 3 },
          {
            text: "Скорее да, чем нет, но хочу оставить место для манёвра",
            score: 2,
          },
          {
            text: "Нет, хочу что-то более динамичное и непредсказуемое",
            score: 0,
          },
        ],
      },
    ];

    let currentQuestion = 0;
    let answers = new Array(quizData.length).fill(null);

    function renderQuestion() {
      const q = quizData[currentQuestion];

      quizBody.style.opacity = "0";

      setTimeout(() => {
        quizBody.innerHTML = `
                    <div class="quiz__question">${currentQuestion + 1}. ${q.question}</div>
                    <div class="quiz__options">
                        ${q.options
                          .map(
                            (opt, i) => `
                            <div class="quiz__option ${answers[currentQuestion] === i ? "selected" : ""}" data-index="${i}">
                                ${opt.text}
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                `;

        quizBody.style.opacity = "1";

        const progress = ((currentQuestion + 1) / quizData.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `Вопрос ${currentQuestion + 1} из ${quizData.length}`;

        prevBtn.disabled = currentQuestion === 0;
        nextBtn.textContent =
          currentQuestion === quizData.length - 1
            ? "Показать результат 🎉"
            : "Дальше →";
        nextBtn.disabled = false;
        nextBtn.style.background = "";
        nextBtn.style.color = "";

        quizBody.querySelectorAll(".quiz__option").forEach((opt) => {
          opt.addEventListener("click", () => {
            quizBody
              .querySelectorAll(".quiz__option")
              .forEach((o) => o.classList.remove("selected"));
            opt.classList.add("selected");
            answers[currentQuestion] = parseInt(opt.dataset.index);
          });
        });
      }, 150);
    }

    function showResult() {
      let totalScore = 0;
      answers.forEach((ansIdx, qIdx) => {
        if (ansIdx !== null) {
          totalScore += quizData[qIdx].options[ansIdx].score;
        }
      });

      const maxScore = quizData.length * 3;
      const percentage = (totalScore / maxScore) * 100;

      let result;
      if (percentage >= 70) {
        result = {
          emoji: "🎯",
          title: "Отлично! Эта специальность точно для тебя",
          text: "Твоя внимательность и любовь к цифрам — это то, что нужно бухгалтеру. Приходи на День открытых дверей!",
        };
      } else if (percentage >= 40) {
        result = {
          emoji: "💡",
          title: "Хорошие задатки — стоит попробовать",
          text: "У тебя есть качества для этой профессии. Приди на мастер-класс, чтобы лучше понять, твоё ли это.",
        };
      } else {
        result = {
          emoji: "🤔",
          title: "Возможно, стоит рассмотреть другие направления",
          text: "Эта специальность требует усидчивости и любви к цифрам. Посмотри «Навигатор специальностей» — у нас есть и другие интересные направления.",
        };
      }

      quizBody.classList.add("hidden");
      quizResult.classList.remove("hidden");
      quizResult.innerHTML = `
                <div class="quiz__result-emoji">${result.emoji}</div>
                <h3 class="quiz__result-title">${result.title}</h3>
                <p class="quiz__result-text">${result.text}</p>
                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 24px;">
                    <a href="#signup" class="btn btn--primary">Записаться на ДОД</a>
                    <button class="btn btn--ghost" id="restartQuiz">Пройти квиз заново</button>
                </div>
            `;

      nextBtn.classList.add("hidden");
      prevBtn.classList.add("hidden");
      progressBar.style.width = "100%";
      progressText.textContent = "Результат готов!";

      const restartBtn = document.getElementById("restartQuiz");
      if (restartBtn) {
        restartBtn.addEventListener("click", restartQuiz);
      }
    }

    function restartQuiz() {
      currentQuestion = 0;
      answers = new Array(quizData.length).fill(null);

      quizResult.classList.add("hidden");
      quizBody.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
      prevBtn.classList.remove("hidden");

      renderQuestion();
    }

    nextBtn.addEventListener("click", () => {
      if (answers[currentQuestion] === null) {
        nextBtn.textContent = "Выберите вариант!";
        nextBtn.style.background = "#ff5252";
        nextBtn.style.color = "#fff";
        setTimeout(() => {
          nextBtn.textContent =
            currentQuestion === quizData.length - 1
              ? "Показать результат 🎉"
              : "Дальше →";
          nextBtn.style.background = "";
          nextBtn.style.color = "";
        }, 1500);
        return;
      }

      if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        renderQuestion();
      } else {
        showResult();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
      }
    });

    renderQuestion();
    console.log("✅ Квиз запущен");
  }
});
