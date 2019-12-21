const jsonMessages = require('../assets/jsonMessages/jsonMessages.js');
const axios = require("axios");
const cheerio = require("cheerio");

async function fetchData(siteUrl) {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
    
}

async function trumpApprovalRead(req, res) {
    const siteUrl = "https://www.realclearpolitics.com/epolls/other/president_trump_job_approval-6179.html";
    console.log("Fetching trump approval data from " + siteUrl)
    try{
    const date = new Date();
    const $ = await fetchData(siteUrl);
    const approve = $('.polls > #container > .alpha-container  > .alpha > .chart_wrapper > .chart_header > .chart_legend > tbody > tr:nth-child(1)  > .candidate > .value').text();
    const disapprove = $('.polls > #container > .alpha-container  > .alpha > .chart_wrapper > .chart_header > .chart_legend > tbody > tr:nth-child(2) > .candidate > .value').text();
    if(date&&approve&&disapprove){
        res.send({
            directionOfCountry: {
                date: date,
                approve: approve,
                disapprove: disapprove
            }
        })}else{
            res.status(jsonMessages.scraping.missingData.status).send(jsonMessages.scraping.missingData)
        }
        } 
        catch(error){
            if(error.response.status==403){
                res.status(jsonMessages.scraping.permissionDenied.status).send(jsonMessages.scraping.permissionDenied)
            }else{
                res.status(jsonMessages.scraping.error.status).send(jsonMessages.scraping.error)
            }
            }
    }



async function directionOfCountryRead(req, res) {
    const siteUrl = "https://www.realclearpolitics.com/epolls/other/direction_of_country-902.html";
    console.log("Fetching direction of country data from " + siteUrl)
    try{
    const date = new Date();
    const $ = await fetchData(siteUrl)
    const right = $('.polls > #container > .alpha-container >.alpha > .chart_wrapper > .chart_header > .chart_legend > tbody >   tr> .candidate:nth-child(1) > .value>').text();
    const wrong = $('.polls > #container > .alpha-container  > .alpha > .chart_wrapper > .chart_header > .chart_legend > tbody > tr > .candidate:nth-child(2) >.value').text();
    if(date&&right&&wrong){
    res.send({
        directionOfCountry: {
            date: date,
            right: right,
            wrong: wrong
        }
    })}else{
        res.status(jsonMessages.scraping.missingData.status).send(jsonMessages.scraping.missingData)
    }
    } 
    catch(error){
        if(error.response.status==403){
            res.status(jsonMessages.scraping.permissionDenied.status).send(jsonMessages.scraping.permissionDenied)
        }else{
            res.status(jsonMessages.scraping.error.status).send(jsonMessages.scraping.error)
        }
        }
}


module.exports = {
    trumpApprovalRead: trumpApprovalRead,
    directionOfCountryRead: directionOfCountryRead
}