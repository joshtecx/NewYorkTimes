
$("#submit").on("click" ,function() {
    console.log("SUBMIT");
    var query = ("#user-input").val();
    var begin_date = $("#end").val();
    var end_date = $("#end").val();
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
    'api-key': "1d39bceff8834caca1f0025bf8440e0e",
    'sort': "newest",
    'q': query,
    'begin_date': begin_date,
    'end_date': end_date
    });

    $.ajax({
    url: url,
    method: 'GET',
    }).then(function(result) {
    console.log(result);
    }).fail(function(err) {
    throw err;
    });
});

