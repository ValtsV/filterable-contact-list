// Get input
const filterInput = document.getElementById("filterInput");
// Add listener
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  const filterValue = document
    .getElementById("filterInput")
    .value.toUpperCase();

  //  get names Ul
  const names = document.getElementById("names");

  // get lis from names Ul
  const namesLi = names.querySelectorAll("li.collection-item");

  namesLi.forEach((el) => {
    const a = el.getElementsByTagName("a")[0];
    console.log(a);
    if (a.innerText.toUpperCase().includes(filterValue)) {
      el.style.display = "";
    } else {
      el.style.display = "none";
    }
  });
}
