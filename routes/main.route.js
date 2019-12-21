const router = require('express').Router();
const realClearPoliticsScrapingController = require('../controllers/realClearPoliticsScraping.js')
router.get('/', function(req, res) {
    res.send("<ul><li><a href=\"/trump\">Trump Approval Rating</a></li><li><a  href=\"/country\">Direction of Country</a></li></ul>");
});
router.get('/trump', realClearPoliticsScrapingController.trumpApprovalRead);
router.get('/country', realClearPoliticsScrapingController.directionOfCountryRead);

module.exports = router;