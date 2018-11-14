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
      $.get(`https://api.iextrading.com/1.0/stock/${stockLists[i]}/quote`, function (data) {
        console.log(data); 
      });
    });
  }
}

populateStocks();

const search = function () {
  var stockitem = $('#search-term').val();
  $.get(`https://api.iextrading.com/1.0/stock/${stockitem}/quote`, function (data) {
    console.log(data);
  });

 }

// .on('click') function associated with the Search Button
$('#run-search').on('click', search);