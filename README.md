# README.md - Heritage Wood Co. 

This is a single-page React application I built for my Dad's company, 
Heritage Wood Co. (originally Heritage Millworks), a family-run custom 
cabinetry business in Guys Mills, PA. I began this project because my 
Dad's old website is outdated, and I saw this as an opportunity to 
generate real value for his business while completing my CS50 final 
project. His old website can be found here: https://www.heritagemillworks.com/



## Overview

This new website is fully custom built using the React JavaScript library 
without the use of UI frameworks such as Bootstrap or Tailwind. The 
browser only loads one HTML file and React handles all the page switching 
internally without ever making a new request to a server.



## Tech Stack

- **React** — component-based UI
- **Vite** — build tool and dev server
- **CSS** — fully custom stylesheet (no UI framework)
- **Formspree** — handles contact form submissions



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



## Contact Form

Forms are handled by **Formspree** using form ID `xeevvzkp`. When a 
user submits the form, an HTTP POST request is sent to:
https://formspree.io/f/xeevvzkp

Formspree receives it, processes it, and forwards it as an email to 
the business owner. No custom backend server is required.

> **Note:** The current Formspree account is on the free tier, which 
> has a cap of 50 submissions per month.



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



## Business Information

> Heritage Wood Co. is currently undergoing a name change from 
> "Heritage Millworks — Heritage Wood Co." this is why there is a name discrepancy between 
> the old and new websites.

📍 9436 State Hwy 198, Guys Mills, PA 16327  
📞 (814)-853-0323  
✉️ heritagemillworks@windstream.net  
🕐 Mon–Fri: 8:00 AM – 5:00 PM
