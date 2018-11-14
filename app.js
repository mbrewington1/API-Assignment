<<<<<<< HEAD
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
=======
    const formatstock = function(stock) {
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
  
       
    const search = function (event) {
  
      // This line allows us to take advantage of the HTML 'submit' property
      // This way we can hit enter on the keyboard and it registers the search
      // (in addition to clicks). Prevents the page from reloading on form submit.
      event.preventDefault();
  
      // Empty the region associated with the articles
      clear();
  
      // Build the query URL for the ajax request to the NYT API
      const queryURL = buildQueryURL();
  
      // Make the AJAX request to the API - GETs the JSON data at the queryURL.
      // The data then gets passed as an argument to the render function
      $.ajax({
        url: queryURL,
        method: 'GET'
      }).then(render);
    }
  
    const buildQueryURL = function () {
    
      // queryURL is the url we'll use to query the API
      let queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
  
      // Begin building an object to contain our API call's query parameters
      // Set the API key
      const queryParams = { 'api-key': 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931' };
  
      // Grab text the user typed into the search input, add to the queryParams object
      queryParams.q = $('#search-term')
        .val()
        .trim();
  
      // If the user provides a startYear, include it in the queryParams object
      const startYear = $('#start-year')
        .val()
        .trim();
  
      if (parseInt(startYear)) {
        queryParams.begin_date = `${startYear}0101`;
      }
  
      // If the user provides an endYear, include it in the queryParams object
      const endYear = $('#end-year')
        .val()
        .trim();
  
      if (parseInt(endYear)) {
        queryParams.end_date = `${endYear}0101`;
      }
  
      // Logging the URL so we have access to it for troubleshooting
      console.log('---------------\nURL: ' + queryURL + '\n---------------');
      console.log(queryURL + $.param(queryParams));
      return queryURL + $.param(queryParams);
    }
  
    // Function to empty out the articles
    const clear = function () {
      $('#article-section').empty();
    }
  
    // CLICK HANDLERS
    // ==========================================================
  
    // .on('click') function associated with the Search Button
    $('#run-search').on('click', search);
  
    //  .on('click') function associated with the clear button
    $('#clear-all').on('click', clear);
  });

var stockLists = ['AAPL', 'GE', 'GOOGL', 'STI', 'KO', 'AMZN', 'WMT', 'VZ', 'MSFT', 'FB'];


$('#submit').on('click', function(){
var name = $('#stockName').val();

$.get('https://api.iextrading.com/1.0/stock/aapl/quote', function(data){
console.log(data);
});
})

$(document).on('click', '.stocks', function(){
var stockName = $(this).text();
$.get(`https://api.iextrading.com/1.0/stock/${stockName}/quote`, function(data){
console.log(data);
// append the information to html
});
});

function populateStocks(){

for(var i = 0; i < stockLists.length; i++ ) {
$('#stocks').append('<button class="stocks">' + stockLists[i] + '</button>');
}

>>>>>>> 242d31de66fd3b70173bae6909a654a55e97643e
}

populateStocks();

<<<<<<< HEAD
const search = function () {
  var stockitem = $('#search-term').val();
  $.get(`https://api.iextrading.com/1.0/stock/${stockitem}/quote`, function (data) {
    console.log(data);
  });

 }

// .on('click') function associated with the Search Button
$('#run-search').on('click', search);
=======
>>>>>>> 242d31de66fd3b70173bae6909a654a55e97643e
