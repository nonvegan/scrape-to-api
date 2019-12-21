const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs');

async function fetchData(siteUrl) {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
}

async function trumpApprovalRead(req, res) {
    const date = new Date();
    const $ = await fetchData("https://www.realclearpolitics.com/epolls/other/president_trump_job_approval-6179.html");
    const approve = $('.polls > #container > .alpha-container  > .alpha > .chart_wrapper > .chart_header > .chart_legend > tbody > tr:nth-child(1)  > .candidate > .value').text();
    const disapprove = $('.polls > #container > .alpha-container  > .alpha > .chart_wrapper > .chart_header > .chart_legend > tbody > tr:nth-child(2) > .candidate > .value').text();
    console.log("teste")
    res.send({
        date: date,
        approve: approve,
        disapprove: disapprove
    })
}

async function directionOfCountryRead(req, res) {
    const date = new Date();
    const $ = await fetchData('https://www.realclearpolitics.com/epolls/other/direction_of_country-902.html');
    const right = $('.polls > #container > .alpha-container  > .alpha > .chart_wrapper > .chart_header > .chart_legend > tbody > tr  > .candidate:nth-child(1) > .value').text();
    const wrong = $('.polls > #container > .alpha-container  > .alpha > .chart_wrapper > .chart_header > .chart_legend > tbody > tr > .candidate:nth-child(2) >.value').text();
    console.log("teste")
    res.send(['directionOfCountry', {
        date: date,
        right: right,
        wrong: wrong
    }])
}


module.exports = {
    trumpApprovalRead: trumpApprovalRead,
    directionOfCountryRead: directionOfCountryRead
}



/*  var jsonContent = JSON.stringify(data);

   var array =
       fs.wr("output.json", jsonContent, 'utf8', function(err) {
           if (err) {
               console.log("An error occured while writing JSON Object to File.");
               return console.log(err);
           }
           console.log("JSON file has been saved.");
       }); */