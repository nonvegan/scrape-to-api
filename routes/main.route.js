const router = require('express').Router();
const realClearPoliticsScrapingController = require('../controllers/realClearPoliticsScraping.js')
router.get('/', function(req, res) {
    res.send("<ul><li href=\"/trump\">Trump Approval Rating</li><li href=\"/country\" >Direction of Country</li></ul>");
});
router.get('/trump', realClearPoliticsScrapingController.trumpApprovalRead);
router.get('/country', realClearPoliticsScrapingController.directionOfCountryRead);

module.exports = router;