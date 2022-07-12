let btn = document.querySelector("#submit");
let tbody = document.querySelector("tbody");
let name = document.querySelector("#name");
let error = document.querySelector("#error");

btn.addEventListener("click", () => {
  let template = `<tr>
         <td>${name.value}</td>
         <td>${mobile.value}</td>
         <td>${email.value}</td>
                 <tr>`;
  tbody.innerHTML += template;
  if (error === "") {
    textContent = "Invald";
  }
});

let search = document.getElementById("search");

search.addEventListener("keyup", () => {
  const searchbox = document.getElementById("search").value.toUpperCase();
  const searchList = document.getElementById("contactSummary");
  const product = document.querySelector("#summaryTable");
  const searchName = document.querySelector("td");

  for (let i = 0; i < searchName.length; i++) {
    let item = product[1].querySelector("td")[0];

    if (item) {
      let textvalue = item.textContent || item.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = none;
      }
    }
  }
});

function sortTable() {
  let table, i, x, y;
  table = document.getElementById("summaryTable");
  let switching = true;

  while (switching) {
    switching = false;
    let rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      var Switch = false;

      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        Switch = true;
        break;
      }
    }
    if (Switch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
