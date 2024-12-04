function getData(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      return cb(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function table(data){
  const table=document.getElementById("data")
  const tableBody=document.querySelector("#data tbody")
  console.log(tableBody)
  data.forEach(user => {
    const row=document.createElement("tr")
    const valueId=document.createElement("td")
    valueId.textContent=user.id
    row.appendChild(valueId)
    tableBody.appendChild(row)
    console.log(row)
    const valueName=document.createElement("td")
    valueName.textContent=user.name
    row.appendChild(valueName)
    tableBody.appendChild(row)
    console.log(row)
    const valueUsername=document.createElement("td")
    valueUsername.textContent=user.username
    row.appendChild(valueUsername)
    tableBody.appendChild(row)
    console.log(row)
    const valueEmail=document.createElement("td")
    valueEmail.textContent=user.email
    row.appendChild(valueEmail)
    tableBody.appendChild(row)
    console.log(row)
    const valueAddress=document.createElement("td")
    valueAddress.textContent=user.address.city
    row.appendChild(valueAddress)
    tableBody.appendChild(row)
    console.log(row)
    const valuePhone=document.createElement("td")
    valuePhone.textContent=user.phone
    row.appendChild(valuePhone)
    tableBody.appendChild(row)
    console.log(row)
    const valueWebsite=document.createElement("td")
    valueWebsite.textContent=user.website
    row.appendChild(valueWebsite)
    tableBody.appendChild(row)
    console.log(row)
    const valueCompany=document.createElement("td")
    valueCompany.textContent=user.company.name
    row.appendChild(valueCompany)
    tableBody.appendChild(row)
    console.log(row)
  });
}
function fetchData(callback){
  getData("https://jsonplaceholder.typicode.com/users", function(data) {
    // console.log(data);
    callback(data)
  });
}
fetchData(table)
// const app = document.getElementById("app");
//   table.render(app);
  