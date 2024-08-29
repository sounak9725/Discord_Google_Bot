const { GoogleAuth } = require('google-auth-library');
const path = require('path');
const { google } = require('googleapis');

const auth = new GoogleAuth({
  keyFile: path.join(__dirname, '../key_file.json'),  // Adjust the path as needed
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });

module.exports = { sheets };
