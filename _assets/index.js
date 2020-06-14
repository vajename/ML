const onLoad = () => {
  console.log("Load");
  const searchbar = document.querySelector("#query");
  const letterSections = document.querySelectorAll(".letter-section");
  const words = document.querySelectorAll(".word");

  searchbar.addEventListener("input", (event) => {
    const query = event.target.value.trim();
    const letter = query[0];

    if (!query.length)
      letterSections.forEach((ls) => (ls.style.display = "block"));

    if (query.length < 3) {
      letterSections.forEach(
        (ls) =>
          (ls.style.display =
            ls.id.toLowerCase() !== letter.toLowerCase() ? "none" : "block")
      );
      words.forEach((w) => (w.style.display = "block"));
    } else
      words.forEach(
        (w) =>
          (w.style.display = w
            .querySelector("a")
            .textContent.toLowerCase()
            .includes(query)
            ? "block"
            : "none")
      );
  });
};

window.onload = onLoad;
