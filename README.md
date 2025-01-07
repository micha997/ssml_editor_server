# SSML-Editor Server

The **SSML-Editor Server** is a backend service built with Node.js to handle Speech Synthesis Markup Language (SSML) processing. It acts as the core server for the corresponding [SSML Editor application](https://github.com/micha997/ssml_editor), leveraging the Google Text-to-Speech API to convert user input into high-quality audio files. This server is essential for enabling the text-to-speech functionality in the editor.

This project was developed as part of a class at the **University of Applied Sciences Düsseldorf (Hochschule Düsseldorf - HSD)**.

## Requirements
- Node.js
- Access to a Google Cloud Project with the Text-to-Speech API enabled
- A valid GOOGLE_APPLICATION_CREDENTIALS JSON file for authentication

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/micha997/ssml_editor_server.git
cd ssml_editor_server
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Google Cloud Credentials
Make sure you have the GOOGLE_APPLICATION_CREDENTIALS environment variable pointing to your JSON credentials file:
```bash
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/credentials.json
```

## Usage
```bash
npm run start
```
By default, the server will listen on http://localhost:4000

## How It Works
1. **Input:** The SSML Editor sends an HTTP request to this server containing SSML input. (POST request to http://localhost:4000/tts)
2. **Processing:** The server processes the input and sends a request to the Google Cloud Text-to-Speech API.
3. **Output:** The API response is processed, and the resulting audio file is returned to the editor.
