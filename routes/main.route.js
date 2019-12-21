const router = require('express').Router();
const realClearPoliticsScrapingController = require('../controllers/realClearPoliticsScraping.js')

router.get('/trump', realClearPoliticsScrapingController.trumpApprovalRead);
router.get('/country', realClearPoliticsScrapingController.directionOfCountryRead);

module.exports = router;