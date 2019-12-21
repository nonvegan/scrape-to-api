const router = require('express').Router();
const realClearPoliticsScrapingController = require('../controllers/realClearPoliticsScraping.js')
router.get('/', function(req, res) {
    res.send("<a href=\"/trump\">trump</a><br><a href=\"/country\">country</a>")
});
router.get('/trump', realClearPoliticsScrapingController.trumpApprovalRead);
router.get('/country', realClearPoliticsScrapingController.directionOfCountryRead);

module.exports = router;