const express = require('express');
const router = express.Router({
	mergeParams: true
});

const filters = require('../routes/filters');

router.get('/loadFields', filters.loadFields);

router.get('/filter', filters.loadFilters);
router.post('/filter', filters.toggleFilter);

module.exports = router;
