const formatstock = function (stock) {
  const symbols = [
    'GE',
    'KO',
    'STI',
    'F',
    'GOOGL',
    'AAPL',
    'AMZN',
    'FB',
    'MSFT',
    'T',
    'VZ',
    'WMT'
  ];


   // Function to empty out the articles
  const clear = function () {
    $('#article-section').empty();
  }

  // CLICK HANDLERS
  // ==========================================================




  //  .on('click') function associated with the clear button
  $('#clear-all').on('click', clear);
};

var stockLists = ['AAPL', 'GE', 'GOOGL', 'STI', 'KO', 'AMZN', 'WMT', 'VZ', 'MSFT', 'FB'];


// append the information to html
function populateStocks() {

  for (let i = 0; i < stockLists.length; i++) {
    $('#stocks').append(`<button type='button' class="stocks" id="stock-${i}">` + stockLists[i] + '</button>');
  }
  for (let i = 0; i < stockLists.length; i++) {
    $(`#stock-${i}`).on('click', function () {
      $.get(`https://api.iextrading.com/1.0/stock/${stockLists[i]}/batch?types=quote,news,Logo,price`, function (data) {
        $('#stockCards').append(`
        <div class="card">
          <div class="card-body">
            <div class="row">
                <div class="col-3">Company Name</div>
                <div class ="col-9"> ${data.quote.companyName}</div>
            </div>
            <div class="row">
                <div class="col-3">Logo</div>
                <div class ="col-9">${ data.Logo}</div>
             </div>
            <div class="row">
                <div class="col-3">Primary Exchange</div>
                <div class ="col-9"> ${data.quote.primaryExchange}</div>
             </div>
             <div class="row">
                <div class="col-3">Current Price</div>
                <div class ="col-9"> ${data.price}</div>
             </div>
             </div>
             <div class="row">
                <div class="col-12">News</div>
                <div class ="col-12">${ data.news.map(a => { return '<div><a>' + a.url+ '</a></div>'})}</div>
             </div>
          </div>
        </div>`
    ) 
      });
    });
  }
}

populateStocks();



const search = function (event) {
  event.preventDefault();
  var stockitem = $('#search-term').val();
  $.get(`https://api.iextrading.com/1.0/stock/${stockitem}/batch?types=quote,news,Logo,price`, function (data) {
    // console.log(data, "This is the data");
      $('#stockCards').append(`
        <div class="card">
          <div class="card-body">
            <div class="row">
                <div class="col-3">Company Name</div>
                <div class ="col-9"> ${data.quote.companyName}</div>
            </div>
            <div class="row">
                <div class="col-3">Logo</div>
                <div class ="col-9">${ data.Logo}</div>
             </div>
            <div class="row">
                <div class="col-3">Primary Exchange</div>
                <div class ="col-9"> ${data.quote.primaryExchange}</div>
             </div>
             <div class="row">
                <div class="col-3">Current Price</div>
                <div class ="col-9"> ${data.price}</div>
             </div>
             </div>
             <div class="row">
                <div class="col-12">News</div>
                <div class ="col-12">${ data.news.map(a => { return '<div><a>' + a.url+ '</a></div>'})}</div>
             </div>
          </div>
        </div>`
    )
  });

 }

// .on('click') function associated with the Search Button
$('#run-search').on('click', search);
