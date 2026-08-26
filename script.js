document.addEventListener("DOMContentLoaded", () => {

  /* =================================
     MOBILE NAVIGATION
  ================================= */

  const menuButton =
    document.getElementById("menuButton");

  const navigation =
    document.getElementById("navigation");


  menuButton.addEventListener("click", () => {

    const opened =
      navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(opened)
    );

  });


  navigation
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });


  /* =================================
     CURRENT YEAR
  ================================= */

  document.getElementById(
    "currentYear"
  ).textContent =
    new Date().getFullYear();


  /* =================================
     QUOTE ENGINE
  ================================= */

  const quotes = [

    [
      "The future belongs to those who prepare for it today.",
      "Malcolm X"
    ],

    [
      "Education is the most powerful weapon which you can use to change the world.",
      "Nelson Mandela"
    ],

    [
      "The beautiful thing about learning is that nobody can take it away from you.",
      "B. B. King"
    ],

    [
      "An investment in knowledge pays the best interest.",
      "Benjamin Franklin"
    ],

    [
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      "Mahatma Gandhi"
    ],

    [
      "The roots of education are bitter, but the fruit is sweet.",
      "Aristotle"
    ]

  ];


  let quoteIndex = 0;


  const quoteText =
    document.getElementById("quoteText");

  const quoteAuthor =
    document.getElementById("quoteAuthor");

  const quoteCounter =
    document.getElementById("quoteCounter");


  function renderQuote() {

    quoteText.style.opacity = "0";

    quoteAuthor.style.opacity = "0";


    setTimeout(() => {

      quoteText.textContent =
        quotes[quoteIndex][0];

      quoteAuthor.textContent =
        "— " + quotes[quoteIndex][1];

      quoteCounter.textContent =
        String(quoteIndex + 1).padStart(2, "0")
        + " / "
        + String(quotes.length).padStart(2, "0");


      quoteText.style.opacity = "1";

      quoteAuthor.style.opacity = "1";

    }, 180);

  }


  document
    .getElementById("nextQuote")
    .addEventListener("click", () => {

      quoteIndex =
        (quoteIndex + 1)
        % quotes.length;

      renderQuote();

    });


  document
    .getElementById("previousQuote")
    .addEventListener("click", () => {

      quoteIndex =
        (quoteIndex - 1 + quotes.length)
        % quotes.length;

      renderQuote();

    });


  /* =================================
     AUTO QUOTE ROTATION
  ================================= */

  setInterval(() => {

    quoteIndex =
      (quoteIndex + 1)
      % quotes.length;

    renderQuote();

  }, 9000);


  /* =================================
     SCROLL REVEAL
  ================================= */

  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.12
      }

    );


  document
    .querySelectorAll(".reveal")
    .forEach(element => {

      observer.observe(element);

    });


  /* =================================
     BACK TO TOP
  ================================= */

  const backTop =
    document.getElementById("backTop");


  window.addEventListener(
    "scroll",
    () => {

      if (window.scrollY > 500) {

        backTop.classList.add("show");

      } else {

        backTop.classList.remove("show");

      }

    },
    {
      passive: true
    }
  );


  backTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );


});
