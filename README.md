# README.md
### Heritage Wood Co. - Website

<br>

This is a single-page React application I built for my Dad's company, 
Heritage Wood Co. (originally Heritage Millworks), a family-run custom 
cabinetry business in Guys Mills, PA. I began this project because my 
Dad's old website is outdated, and I saw this as an opportunity to 
generate real value for his business while completing my CS50 final 
project. His old website can be found here: https://www.heritagemillworks.com/. I 
I built the website so that it supports desktop and mobile platforms. See the **Installation**
and the **Viewing the site on your phone** sections of this README.md file.

<br>

## Overview

This new website is fully custom built using the React JavaScript library 
without the use of UI frameworks such as Bootstrap or Tailwind. The 
browser only loads one HTML file and React handles all the page switching 
internally without ever making a new request to a server.

<br>

## Tech Stack

- **React** — component-based UI
- **Vite** — build tool and dev server
- **CSS** — fully custom stylesheet (no UI framework)
- **Formspree** — handles contact form submissions

<br>

## Project Structure
heritage_millworks_react/

	├── css/
		└── styles.css       # Full stylesheet
	├── images/              # All site images (avif, jpg, webp)
	├── node_modules/        # All pre-built packages needed for the website
	├── src/
		├── app.jsx          # Main React file containing all components
		└── main.jsx         # Entry point of the React app
	├── index.html           # The single HTML file the browser loads
	└── README.md            # This file

<br>

## Pages

| Page | Description |
|---|---|
| Home | Hero slideshow, service cards, testimonials carousel |
| Kitchen Cabinets | Gallery page for kitchen cabinet work *(tbr)* |
| Bathroom Vanities | Gallery page for vanity work *(tbr)* |
| Bookcases | Gallery page for bookcase work *(tbr)* |
| Entertainment Centers | Gallery page for entertainment centers *(tbr)* |
| Fireplace Mantles | Gallery page for fireplace mantles *(tbr)* |
| Portfolio | Image grid with lightbox |
| About Us | Company history, shop info, contact modal |
| Contact Us | Contact form, hours, map embed |

<br>

## Key Features

- **Hero slideshow** — auto-advances on the Home page every 4 seconds 
with a crossfade transition and dot navigation at the bottom
- **Service cards** — clickable cards on the Home page that route the 
user to each custom cabinetry category page
- **Testimonials carousel** — revolving carousel that cycles through 6 customer 
review cards, with only 3 visible at a time
- **Portfolio lightbox** — full-screen image viewer with arrow and 
keyboard navigation
- **Contact modal** — reusable modal with a Formspree-connected form, 
used on the Home, About Us, and Contact Us pages
- **Pre-footer** — four-column info bar at the bottom of every page 
with contact info, location, Facebook link, and branding

<br>

## Contact Form

Forms are handled by **Formspree** using form ID `xeevvzkp`. When a 
user submits the form, an HTTP POST request is sent to:
https://formspree.io/f/xeevvzkp

Formspree receives it, processes it, and forwards it as an email to 
the business owner. No custom backend server is required.

> **Note:** The current Formspree account is on the free tier, which 
> has a cap of 50 submissions per month.

<br>

## Installation

Currently the website can only be hosted locally, as it has not yet 
been published to the web. These instructions are written for anyone 
at any level of coding experience.

### Step 1 — Install VS Code
- Download VS Code for your operating system: https://code.visualstudio.com/
- Run the installer and follow the prompts
- 📖 [VS Code setup guide](https://code.visualstudio.com/docs/setup/setup-overview)

### Step 2 — Install Node.js
- Download the **LTS** version: https://nodejs.org/
- Run the installer and follow the prompts
- Open a new terminal in your codespace and run:
`node --version`
- 📖 [Node.js installation guide](https://nodejs.org/en/download)

### Step 3 — Download the Project Files
- Go to the project's GitHub repository
- Click the green **Code** button and select **Download ZIP**
- Locate the file in your Downloads folder and unzip it
- 📖 [How to download a GitHub repository](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives)

### Step 4 — Open the Project in VS Code
- Open VS Code
- Go to `File → Open Folder` and select the `heritage_millworks_react` folder

### Step 5 — Open the Terminal
- In VS Code go to `View → Terminal`
- In the terminal run:
`cd path/to/heritage_millworks_react` (replace `path/to/` with the actual location of your folder) 
- 📖 [How to navigate folders in a terminal](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)

### Step 6 — Install Project Dependencies
- In the terminal run:
`npm install`
Wait for a `node_modules` folder to appear in your project files.

### Step 7 — Start the Development Server
- In the terminal run: `npm run dev`
Vite will print a local URL in the terminal — open it in your browser

<br>

## Viewing the Site on Your Phone

Once the development server is running on your computer, you can view 
the site on your phone as long as both devices are connected to the 
same WiFi network.

### Step 1 — Find your computer's IP address

You can find your IP address either through your system settings 
or by running a quick command in your terminal. 

**On macOS — Option A (System Settings):**
1. Click the Apple menu (top left corner of your screen)
2. Go to **System Settings**
3. Click **WiFi**
4. Click **Details** next to the network you are connected to
5. Look for the **IP Address** field — it will look something like
`192.168.1.45`

**On macOS — Option B (Terminal):**
1. Open a terminal (You do not need to be in any specific folder for this command)
3. Run: `ipconfig getifaddr en0`
4. Your IP address will be printed directly in the terminal — it will 
look something like `192.168.1.45`

**On Windows — Option A (Settings):**
1. Click the Start menu and go to **Settings**
2. Go to **Network & Internet → WiFi**
3. Click on the network you are connected to
4. Scroll down and look for the **IPv4 address** field — it will look 
something like `192.168.1.45`

**On Windows — Option B (Terminal):**
1. Open a terminal (You do not need to be in any specific folder for this command)
3. Run: `ipconfig`
4. Look for the line that says **IPv4 Address** — it will look 
something like `192.168.1.45`

Write this number down — you will need it in Step 4.

### Step 2 — Start the dev server with network access

Instead of the usual `npm run dev` command, run this 
command in your terminal:
`npm run dev -- --host`

The `--host` flag tells Vite to make the site visible to other devices 
on your network, not just your own computer.

After running it, Vite will print two URLs in the terminal:
`Local:    http://localhost:5173`
`Network:  http://192.168.1.45:5173`

The **Network** URL is the one you will use on your phone. It should 
match the IP address you found in Step 1.

### Step 3 — Connect your phone to the same WiFi

Make sure your phone is connected to the **same WiFi network** 
as your computer.

### Step 4 — Open the site on your phone

1. Open a browser on your phone (Safari on iPhone, Chrome on Android)
3. Type in the Network URL from Step 2 — for example:
`http://192.168.1.45:5173`

### Troubleshooting

- **The page won't load** — your computer's firewall may be blocking 
the connection. On macOS, go to **System Settings → Network → 
Firewall** and temporarily turn it off to test. On Windows, search 
for **Windows Defender Firewall** in the Start menu and turn it off 
temporarily.
- **The URL is not working** — double check that you typed the IP 
address exactly as it appears in your Vite terminal output, including 
the colon and port number at the end (`:5173`).
- **The site loads but looks broken** — make sure the dev server is 
still running on your computer. If you close the terminal or shut the 
laptop lid, the server stops and the phone will lose access.
- **I closed the terminal and it stopped working** — just reopen the 
terminal, navigate back to the project folder, and run 
`npm run dev -- --host` again.

<br>

## Business Information

> Heritage Wood Co. is currently undergoing a name change from 
> "Heritage Millworks — Heritage Wood Co." this is why there is a name discrepancy between 
> the old and new websites.
