# JARVIS AI Assistant — Setup Guide

## Step 1: Install Prerequisites

### Install Node.js

1. Visit the Node.js website.
2. Download the latest **LTS (Long-Term Support)** version (e.g., v20.x).
3. Run the installer and proceed with the default settings.
4. Verify the installation by opening Command Prompt or Terminal and running:

```bash
node --version
npm --version
```

You should see output similar to:

```bash
v20.x.x
```

---

## Step 2: Set Up the Project

Navigate to the JARVIS project directory and install the required dependencies:

```bash
cd jarvis
npm install
```

During installation, Electron will also be downloaded (approximately 100 MB). This download occurs only once.

---

## Step 3: Choose an AI Provider

### Option A: Groq (Recommended)

Groq provides a fast, free AI inference service and is recommended for the best experience.

#### Setup Instructions

1. Create an account on Groq Console.
2. Navigate to the **API Keys** section.
3. Click **Create API Key**.
4. Copy the generated API key (format: `gsk_xxxxxxxxxxxx`).
5. Launch JARVIS.
6. Paste the API key into the API Key field.
7. Select **Groq** as the provider.
8. Choose one of the following models:

   * **Llama 3.3 70B** – Best quality
   * **Llama 3.1 8B** – Fastest response time
9. Click **Test Connection**.

A successful connection message should appear.

---

### Option B: Ollama (Local AI)

Ollama allows all AI processing to run locally on your computer without requiring an API key or internet connection.

#### Setup Instructions

1. Download and install Ollama.
2. Open Terminal or Command Prompt and run:

```bash
ollama pull llama3
```

Alternatively, you may use other models such as:

```bash
ollama pull mistral
ollama pull phi3
```

3. Ensure Ollama is running in the background.
4. In JARVIS, select **Ollama (Local)** as the provider.
5. No API key is required.
6. Click **Test Connection**.

---

## Step 4: Launch JARVIS

From the project directory, run:

```bash
npm start
```

The JARVIS desktop interface will open.

---

## Step 5: Configure Voice Features

JARVIS uses the built-in Web Speech API available in Chromium-based browsers and Electron.

### Setup

* Allow microphone access when prompted.
* Click the microphone button and begin speaking.
* JARVIS will process your request and respond using both text and voice.

### Best Practices

* Speak clearly and minimize background noise.
* Both Hindi and English are supported.
* For users in India, **English (India)** generally provides the best speech recognition accuracy.

---

## Example Voice Commands

You can ask JARVIS to perform tasks such as:

```text
Open YouTube
Search Google for Python tutorials
What time is it?
Tell me a joke
Explain machine learning simply
What is the weather in Delhi?
Translate "Good Morning" to Hindi
Write a Python function to sort a list
Open GitHub
What is photosynthesis?
```

---

## Troubleshooting

### npm install Fails

Try:

```bash
npm install --legacy-peer-deps
```

### Groq API Key Error

If you receive an "Invalid API Key" message:

* Ensure the key has been copied correctly.
* Remove any leading or trailing spaces.
* Generate a new API key from the Groq Console if necessary.

### Unable to Connect to Ollama

Check whether Ollama is running:

```bash
ollama list
```

If it is not running, start the service:

```bash
ollama serve
```

### Voice Recognition Not Working

* Verify microphone permissions.
* Test using a Chromium-based browser if applicable.
* Ensure your microphone is functioning correctly.

### Blank or White Window Appears

Reinstall dependencies and restart the application:

```bash
npm install
npm start
```

---

## Step 6: Build a Windows Executable (Optional)

To generate a Windows installer:

```bash
npm run build-win
```

The generated executable file will be available in the `dist` directory.

---

## Project Structure

```text
jarvis/
├── main.js          # Electron entry point
├── preload.js       # Secure bridge between renderer and main process
├── package.json     # Project dependencies and scripts
└── public/
    └── index.html   # Main JARVIS user interface
```

---

## Free AI Service Providers

| Provider      | Free Tier                     | Purpose              |
| ------------- | ----------------------------- | -------------------- |
| Groq          | Free (subject to rate limits) | Fast cloud-based AI  |
| Google Gemini | Generous free usage limits    | Advanced AI models   |
| Ollama        | Completely free               | Local AI processing  |
| Cohere        | Free tier available           | Language AI services |

---

## Recommendations

1. **Groq + Llama 3.3 70B** offers an excellent balance of speed, quality, and cost.
2. **Ollama + Llama 3** is ideal for privacy-focused users who prefer local processing.
3. API keys can be stored securely in local browser storage for convenience.
4. Customize the system prompt to tailor JARVIS to your specific requirements.
5. Use command shortcuts and quick-action buttons to improve productivity.

---

Built with Electron, Web Speech API, and modern AI providers including Groq and Ollama.
