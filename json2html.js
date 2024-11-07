export default function json2html(data) {
  // Create table structure with required attributes
  let html = `<table data-user="naveenrathod996@gmail.com">`;
  html += "<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead><tbody>";

  // Iterate over each object in the data array to create rows
  data.forEach((item) => {
    html += "<tr>";
    html += `<td>${item.Name || ""}</td>`;
    html += `<td>${item.Age || ""}</td>`;
    html += `<td>${item.Gender || ""}</td>`;
    html += "</tr>";
  });

  html += "</tbody></table>";
  return html;
}
