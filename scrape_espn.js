var url ='http://www.espn.com/college-football/scoreboard';
var page = new WebPage()
var fs = require('fs');


page.open(url, function (status) {
        just_wait();
});

function just_wait() {
    setTimeout(function() {
               fs.write('espn.html', page.content, 'w');
            phantom.exit();
    }, 7000);
}
