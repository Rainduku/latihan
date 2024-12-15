  
  function render(result) {
    console.log(result)
    let table = '';
    result.articles.forEach(data => {
      table +=`<div class="card" style="width: 18rem;">
  <img src="${data.urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.title}</h5>
    <p class="card-text">${data.content}</p>
    <a href="${data.url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>` 
    })
    return table;
  } 
  
  function message(msg) {
    return `<tr>
              <td class="text-center" colspan="8">${msg}</td>
          </tr>`;
  }
  let searchInput = document.getElementById('search')
  searchInput.addEventListener('input',function(e){
    let value = e.target.value
    console.log(value)
    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-12-15&' +
          'sortBy=popularity&' +
          'apiKey=d0df91bd323046cbb3c60ffdd75d0143';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })
    
  })
  axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-11-15&sortBy=publishedAt&apiKey=d0df91bd323046cbb3c60ffdd75d0143').then(res => {
    document.getElementById('data').innerHTML = render(res.data);
  })
