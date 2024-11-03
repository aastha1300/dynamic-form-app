const Form = require('../models/form');
const xlsx = require('xlsx');


// Add form entry
const addFormEntry = async (req, res) => {
  try {
    const { formType, name, countryCode, phoneNumber } = req.body;
    const newEntry = await Form.create({ formType, name, countryCode, phoneNumber });
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add entry' });
  }
};

// Get all form entries
const getFormEntries = async (req, res) => {
  try {
    const entries = await Form.findAll();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
};

const exportToGoogleSheet = async (req, res) => {
    try {
        // Fetch data from your Forms table
        const formsData = await getFormsData(); // Ensure this is an array
        console.log('Forms Data:', formsData); // Log the data to check its format

        // Ensure that formsData is an array
        if (!Array.isArray(formsData)) {
            throw new Error('Expected an array of forms data');
        }

        // Create a new workbook and a new worksheet
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(formsData);

        // Append the worksheet to the workbook
        xlsx.utils.book_append_sheet(wb, ws, 'Forms Data');

        // Create a buffer and write the workbook to it
        const fileBuffer = xlsx.write(wb, { bookType: 'xlsx', type: 'buffer' });

        // Set the response headers to indicate a file download
        res.setHeader('Content-Disposition', 'attachment; filename=forms_data.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

        // Send the file buffer as a response
        res.send(fileBuffer);
    } catch (error) {
        console.error('Error exporting to Excel:', error);
        res.status(500).send('Error exporting data');
    }
};
const getFormsData = async () => {
    // Replace this with your actual database fetching logic
    const forms = await Form.findAll();
    return forms.map(form => form.get({ plain: true })); // Ensure to get plain object format
};


module.exports = { addFormEntry, getFormEntries ,exportToGoogleSheet };
