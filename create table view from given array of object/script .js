function createTableView(data) {
  let table = "<table border='1' cellpadding='5' cellspacing='0'>";

  table += "<tr><th>Name</th><th>Email</th><th>Mobile No.</th></tr>";

  data.forEach(item => {
    table += `<tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.mobile}</td>
              </tr>`;
  });

  table += "</table>";
  return table;
}

const data = [
  { name: "Vilas Shetkar", email: "vilasshetkar@gmail.com", mobile: 9049508514 },
  { name: "abc", email: "abc@gmail.com", mobile: 9000000078 }
];

console.log(createTableView(data));

document.getElementById("table-container").innerHTML = createTableView(data);

  