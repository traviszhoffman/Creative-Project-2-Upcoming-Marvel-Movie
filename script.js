document.getElementById("buttonClick").addEventListener("click", function (event) {
    event.preventDefault();
    const url = "https://www.whenisthenextmcufilm.com/api";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let results = "<div class='card center'>";
            results += '<h2>Releases in ' + json.days_until + " day";
            if(json.days_until > 1) results +='\'s';
            results += " on " +json.release_date + "</h2>";
            results += '<h1>' + json.title + "</h1>"
            results += '<img src="' + json.poster_url + '">';
            results += '<h3>' + "Next up afterward is " + json.following_production.title + '</h3>';
            results +=  "</div>";
            document.getElementById("upcomingMovieResults").innerHTML = results;
           console.log(json);
        });
    });