# Floorp Randomize Extension

This extension allows users to randomize selected text into a nonsensical string when they alt-click on it. The original text will be blurred to emphasize the randomized output.

## Features

- Randomizes selected text into a nonsensical string.
- Applies a blur effect to the original text for visual distinction.

## Installation

1. Download or clone the repository.
2. Open the Floorp browser.
3. Navigate to `about:debugging`.
4. Click on "This Firefox" or "This Floorp".
5. Click on "Load Temporary Add-on".
6. Select the `manifest.json` file from the `floorp-randomize-extension` directory.

## Usage

- Select any text on a webpage.
- Hold the `Alt` key and click on the selected text.
- The selected text will be replaced with a randomized string, and the original text will be blurred.

## Development

To modify or enhance the extension, you can edit the following files:

- `src/content.js`: Main logic for handling text randomization and blur effect.
- `src/styles/blur.css`: Styles for the blur effect.

## License

This project is licensed under the MIT License.