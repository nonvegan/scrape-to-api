const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs');

async function fetchData(siteUrl) {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
}

async function trumpApprovalRead(req, res) {
    const siteUrl = "https://www.realclearpolitics.com/epolls/other/president_trump_job_approval-6179.html";
    const date = new Date();
    const $ = await fetchData(siteUrl);
    const approve = $('.polls > #container > .alpha-container  > .alpha > .chart_wrapper > .chart_header > .chart_legend > tbody > tr:nth-child(1)  > .candidate > .value').text();
    const disapprove = $('.polls > #container > .alpha-container  > .alpha > .chart_wrapper > .chart_header > .chart_legend > tbody > tr:nth-child(2) > .candidate > .value').text();
    console.log("Fetching trump approval data from " + siteUrl)
    res.send({
        date: date,
        approve: approve,
        disapprove: disapprove
    })
}

async function directionOfCountryRead(req, res) {
    const siteUrl = "https://www.realclearpolitics.com/epolls/other/direction_of_country-902.html";
    const date = new Date();
    const $ = await fetchData(siteUrl);
    const right = $('.polls > #container > .alpha-container  > .alpha > .chart_wrapper > .chart_header > .chart_legend > tbody > tr  > .candidate:nth-child(1) > .value').text();
    const wrong = $('.polls > #container > .alpha-container  > .alpha > .chart_wrapper > .chart_header > .chart_legend > tbody > tr > .candidate:nth-child(2) >.value').text();
    console.log("Fetching direction of country data from " + siteUrl)
    res.send({
        date: date,
        right: right,
        wrong: wrong
    })
}


module.exports = {
    trumpApprovalRead: trumpApprovalRead,
    directionOfCountryRead: directionOfCountryRead
}