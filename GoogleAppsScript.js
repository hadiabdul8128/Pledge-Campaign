/**
 * NCSSM-Durham Class of 2026 Senior Pledge - Google Apps Script
 * 
 * SETUP:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1oBKD1EmnxxhwFaTXm4RTYydZptTD4XU90LSUjIMEAto/edit
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click Deploy → New deployment
 * 5. Select type: Web app
 * 6. Description: "Pledge count API"
 * 7. Execute as: Me
 * 8. Who has access: Anyone
 * 9. Click Deploy, authorize if prompted
 * 10. Copy the Web app URL and paste it into index.html (CONFIG.scriptUrl)
 */

// Your responses sheet ID (from the URL)
const SPREADSHEET_ID = '1oBKD1EmnxxhwFaTXm4RTYydZptTD4XU90LSUjIMEAto';

function doGet() {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];
    const data = sheet.getDataRange().getValues();
    
    // Count rows with data (excluding header row)
    // A row counts if it has a value in the "First Name" column (column B, index 1)
    let count = 0;
    for (let i = 1; i < data.length; i++) {
      const firstName = data[i][1]; // Column B = First Name
      if (firstName && String(firstName).trim() !== '') {
        count++;
      }
    }

    const result = {
      count: count,
      totalClassSize: 360,
      milestone1: 90,
      milestone2: 180,
      updatedAt: new Date().toISOString()
    };

    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ count: 0, error: e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
