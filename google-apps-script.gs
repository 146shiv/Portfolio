// 1. Paste ALL of this into Apps Script (delete everything else in the editor)
// 2. Save (Ctrl+S)
// 3. Run doGet once from the editor dropdown → Authorize when prompted
// 4. Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone
// 5. Copy the /exec URL into your .env file

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      new Date(),
      e.parameter.name || '',
      e.parameter.email || '',
      e.parameter.message || '',
    ]);
    return ContentService
      .createTextOutput('{"success":true}')
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput('{"success":false,"error":"' + err.message + '"}')
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var p = e.parameter;
    sheet.appendRow([
      new Date(),
      p.name || '',
      p.email || '',
      p.message || '',
    ]);
    return ContentService
      .createTextOutput('{"success":true}')
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput('{"success":false,"error":"' + err.message + '"}')
      .setMimeType(ContentService.MimeType.JSON);
  }
}
