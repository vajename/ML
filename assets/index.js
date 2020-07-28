const onLoad = () => {
  console.log("Load");
  const searchbar = document.querySelector("#query");
  const letterSections = document.querySelectorAll(".letter-section");
  const words = document.querySelectorAll(".word");

  searchbar.addEventListener("input", (event) => {
    const query = event.target.value.trim();

    if (!query.length) words.forEach((w) => (w.style.display = "block"));

    words.forEach(
      (w) =>
        (w.style.display = w
          .querySelector("a")
          .textContent.toLowerCase()
          .includes(query)
          ? "block"
          : "none")
    );

    letterSections.forEach((ls) => {
      if (
        [...ls.querySelectorAll(".word")].every(
          (w) => w.style.display === "none"
        )
      )
        ls.style.display = "none";
      else
        ls.style.display = "block";
    });
  });
};

window.onload = onLoad;
