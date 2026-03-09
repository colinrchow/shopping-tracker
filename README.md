# Shopping Tracker Chrome Extension

A simple and efficient Chrome extension designed to help users track shopping items by saving URLs and item names for later reference.

## Features

- **Save Custom Input**: Manually enter a URL and item name to save shopping items
- **Save Current Tab**: Quickly save the currently active browser tab with its title as the item name
- **Persistent Storage**: All saved items are stored locally using browser localStorage
- **Input Persistence**: Current input values are preserved across browser sessions
- **Delete All**: Double-click to clear all saved items at once
- **Keyboard Support**: Press Enter in input fields to save items quickly

## Technologies Used

- **HTML**: Structure and layout
- **CSS**: Styling and responsive design
- **JavaScript**: Core functionality and DOM manipulation
- **Chrome Extension API**: Tab querying and extension manifest
- **Local Storage API**: Data persistence

## Installation

1. **Clone or Download** this repository to your local machine
2. Open Google Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the project folder
5. The Shopping Tracker extension should now appear in your extensions list

## Usage

1. Click the extension icon in your Chrome toolbar to open the popup
2. **To save custom items:**
   - Enter a URL in the first input field
   - Enter an item name in the second input field
   - Click "SAVE INPUT" or press Enter
3. **To save current tab:**
   - Click "SAVE TAB" to save the current page's URL and title
4. **To delete all items:**
   - Double-click the "DELETE ALL" button
5. Click on any saved item link to open it in a new tab

## Project Structure

```
shopping-tracker/
├── index.html          # Extension popup HTML
├── index.js            # Main JavaScript functionality
├── index.css           # Styling for the popup
├── manifest.json       # Chrome extension configuration
└── images/
    ├── icon.png        # Extension icon (legacy)
    └── icon_v2.png     # Current extension icon
```

## Browser Permissions

This extension requires the following permission:
- **tabs**: To access information about the currently active tab when using the "Save Tab" feature

## Development

### Prerequisites
- Google Chrome browser
- Basic understanding of Chrome extension development

### Local Development
1. Make changes to the source files
2. Reload the extension in `chrome://extensions/` by clicking the refresh icon
3. Test the changes in the extension popup

### Key Code Components

- **Data Management**: Uses arrays and localStorage for storing URLs and item names
- **DOM Manipulation**: Dynamically renders saved items as clickable links
- **Event Handling**: Listens for button clicks, input changes, and keyboard events
- **Chrome API Integration**: Queries active tabs for the "Save Tab" functionality

## Future Enhancements

- Add categories/tags for better organization
- Implement search functionality
- Add export/import features
- Include price tracking capabilities
- Add notes or descriptions for items
