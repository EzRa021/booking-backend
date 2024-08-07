const express = require('express');
const { getRevenue } = require('../controllers/revenue.controller');
// const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/revenue', getRevenue);

module.exports = router;
