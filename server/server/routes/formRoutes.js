const express = require('express');
const { addFormEntry, getFormEntries ,exportToGoogleSheet} = require('../controllers/formController');
const router = express.Router();

router.post('/forms', addFormEntry);
router.get('/forms', getFormEntries);
router.get('/export-excel', exportToGoogleSheet);

module.exports = router;
