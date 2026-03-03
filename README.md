# NCSSM-Durham Class of 2026 Senior Pledge Tracker

A fun, animated progress bar that tracks how many seniors have made the pledge! Features unicorn-themed design, milestone celebrations (ice cream social at 90, $5K gift at 180), and confetti when goals are hit.

## Quick Start

1. **Open `index.html`** in a browser — it works with a default count for demo purposes.

2. **To connect live data** from your Google Sheet, use **Option A** (recommended for school accounts) or **Option B**:

### Option A: Publish to Web (no Apps Script — works with school accounts!)

**Use this if you get "Access blocked" from your institution.**

1. Open your [responses spreadsheet](https://docs.google.com/spreadsheets/d/1oBKD1EmnxxhwFaTXm4RTYydZptTD4XU90LSUjIMEAto/edit)
2. Add a new sheet tab (e.g., name it "Count")
3. In cell A1, enter: `=COUNTA('Form Responses 1'!B2:B)`  
   (If your responses tab has a different name, replace `Form Responses 1` with that name)
4. **File → Share → Publish to web**
5. Select the **Count** sheet only, choose **Comma-separated values (.csv)**, click **Publish**
6. Copy the published URL (looks like `https://docs.google.com/spreadsheets/d/.../export?format=csv&gid=...`)
7. Paste it into `index.html` in the `CONFIG.publishedSheetUrl` field

**Note:** Only the count is published — no names, emails, or other response data.

### Option B: Google Apps Script

**May be blocked by school/Workspace accounts.**

1. Open your [responses spreadsheet](https://docs.google.com/spreadsheets/d/1oBKD1EmnxxhwFaTXm4RTYydZptTD4XU90LSUjIMEAto/edit)
2. Go to **Extensions → Apps Script**
3. Copy the contents of `GoogleAppsScript.js` into the script editor
4. **Deploy → New deployment** → Web app → **Who has access: Anyone**
5. Copy the Web app URL and paste it into `index.html` in the `CONFIG.scriptUrl` field

3. **Manual count**: Edit `CONFIG.manualCount` in `index.html` to update the number if neither option works.

## Hosting

You can host this on:
- **GitHub Pages** — push to a repo and enable Pages
- **Netlify** — drag & drop the folder
- **Any web server** — it's just static HTML

## Features

- Animated gradient progress bar with shimmer effect
- Sparkles when the count increases
- Confetti when milestones (90 and 180) are reached
- Unicorn theme for the Class of 2026
- Auto-refreshes every 2 minutes when using the Apps Script
- Link to the pledge form for easy sharing
