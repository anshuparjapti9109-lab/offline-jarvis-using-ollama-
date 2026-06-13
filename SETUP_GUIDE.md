# JARVIS AI Assistant — Setup Guide
## (Hindi + English Mixed)

---

## 🔧 STEP 1: Prerequisites Install Karo

### Node.js Install karo:
1. https://nodejs.org par jao
2. **LTS version** download karo (e.g., 20.x)
3. Install karo — default settings theek hain
4. Verify karo: Terminal/CMD mein likho:
   ```
   node --version
   npm --version
   ```
   Output aana chahiye: v20.x.x

---

## 📁 STEP 2: Project Setup

```bash
# Project folder mein jao (jo tune diya hai JARVIS folder)
cd jarvis

# Dependencies install karo
npm install

# Electron download hoga (~100MB, ek baar hi)
```

---

## 🤖 STEP 3: Free AI Provider Choose Karo

### OPTION A — Groq (RECOMMENDED - Fastest Free AI):
- Groq bilkul **FREE** hai, signup pe $0 credit chahiye
- Speed bahut fast hai — GPT-4 se bhi fast
- Steps:
  1. https://console.groq.com par jao
  2. Sign up karo (Google se bhi ho sakta hai)
  3. **"API Keys"** section mein jao
  4. **"Create API Key"** click karo
  5. Key copy karo — `gsk_xxxxxxxxxxxx` format mein hogi
  6. JARVIS open karo → API Key field mein paste karo
  7. Provider: **Groq** select karo
  8. Model: **Llama 3.3 70B** (best quality) ya **Llama 3.1 8B** (fastest)
  9. **"Test Connection"** dabao — "Connection successful" aana chahiye ✅

### OPTION B — Ollama (100% Local, No Internet, No API Key):
- Tera data kahi nahi jata — poora computer pe chalega
- Steps:
  1. https://ollama.com download karo
  2. Install karo
  3. Terminal mein likho:
     ```bash
     ollama pull llama3
     # (ya mistral, ya phi3 — 4-7GB download hoga)
     ```
  4. Ollama background mein run hona chahiye
  5. JARVIS mein Provider: **Ollama (Local)** select karo
  6. API Key ki zaroorat nahi
  7. Test Connection karo ✅

---

## 🚀 STEP 4: JARVIS Start Karo

```bash
# Folder mein ho tab run karo:
npm start
```

Ek Iron Man style window khulegii! 🎉

---

## 🎤 STEP 5: Voice Setup

- Chrome/Electron mein **Web Speech API** built-in hai
- **Microphone allow karo** jab popup aaye
- Mic button (🎤) dabao → bolo → JARVIS answer dega + bolega bhi

### Voice Tips:
- Clearly bolo, background noise kam karo
- Hindi bhi bol sakte ho — Lang setting mein **Hindi** select karo
- **English (India)** best hai Hindi accent ke saath

---

## 💬 Kya Kya Bol Sakte Ho JARVIS Se:

```
"Open YouTube"
"Search Google for Python tutorials"
"What time is it?"
"Tell me a joke"
"Explain machine learning simply"
"What is the weather in Delhi?"
"Translate 'good morning' to Hindi"
"Write a Python function to sort a list"
"Open GitHub"
"What is photosynthesis?"
```

---

## 🛠️ Common Problems & Solutions

### Problem: "npm install" mein error aaya
```bash
# Try karo:
npm install --legacy-peer-deps
```

### Problem: Groq API error - "Invalid API Key"
- Key sahi se copy ki? Spaces nahi hone chahiye
- console.groq.com pe login karo aur naya key banao

### Problem: Ollama se connect nahi ho raha
```bash
# Check karo Ollama chal raha hai ya nahi:
ollama list
# Agar nahi toh:
ollama serve
```

### Problem: Voice kaam nahi kar rahi
- Chrome pe try karo (file seedha browser mein open karo)
- Microphone permissions check karo

### Problem: Window white aa rahi hai
```bash
npm install
npm start
```

---

## 📦 STEP 6: .exe File Banana (Optional)

```bash
# Windows pe installer banana:
npm run build-win

# dist/ folder mein .exe milegi
```

---

## 📁 Project Structure:

```
jarvis/
├── main.js          ← Electron entry point
├── preload.js       ← Security bridge
├── package.json     ← Dependencies
└── public/
    └── index.html   ← JARVIS UI (poora app yahan hai!)
```

---

## 🔑 Free API Key Websites:

| Provider | Free Tier | Link |
|----------|-----------|------|
| **Groq** | Unlimited (rate limited) | console.groq.com |
| **Google Gemini** | 1M tokens/day free | aistudio.google.com |
| **Ollama** | 100% free, local | ollama.com |
| **Cohere** | Free tier | cohere.com |

---

## 💡 Pro Tips:

1. **Groq + Llama 3.3 70B** = Best combination (free + fast + smart)
2. **Ollama + Llama3** = Best for privacy (kuch internet pe nahi jata)
3. API key save hoti hai automatically browser storage mein
4. System Prompt customize karo apne according — JARVIS ko aur personal banao
5. Command buttons pe click karo quick actions ke liye

---

*Built with ❤️ using Electron + Web Speech API + Groq/Ollama*
