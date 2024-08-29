const { google } = require('googleapis');
const { GoogleAuth } = require('google-auth-library');
const path = require('path');

const auth = new GoogleAuth({
  keyFile: path.join(__dirname, 'key_file.json'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });

async function testAccess() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: '1ld74oZ3M1sCIl41111LVzkgf-iu-D9C7KQnj4nMxJTA',
      range: 'Sheet1!A1:A1',
    });

    console.log('Test access response:', response.data);
  } catch (error) {
    console.error('Error during test access:', error.message);
  }
}

testAccess();
