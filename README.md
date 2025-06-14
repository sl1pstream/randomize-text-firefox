# Floorp Randomize Extension

**This is an AI-generated extension (GitHub Copilot running GPT 4.1).** While I have extensively tested different iterations of this extension before publishing this version, as with anything I publish, I will warn you to use at your own risk.

**This extension is not an original idea.** This extension was made thanks to the idea from ThioJoe's video, [You're Using AI WRONG - Surprising Capabilities You Didn't Know](https://youtu.be/YDiVl9q08DY?si=zITYwjjLCEPlJPjw&t=128) (the link is timestamped to where he talks about this). I just used AI to do the same thing but for Firefox-based browsers.

**I have only tested this extension on Floorp.** As Floorp is a Firefox-based browser, I expect it handles extensions the same as Firefox or any of the other mainstream forks. I have not tested this so if there is an issue on a different Firefox-based browesr, pleaes open an issue for it.

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
