Heritage Wood Co. – Website
This is a single-page React application that I built for my Dad’s company called Heritage Wood Co. (originally Heritage Millworks, but now Heritage Wood Co.), which is a family-run custom cabinetry business that primarily builds kitchens, vanities, bookcases, fireplace mantles, and entertainment centers. I began this project because my Dad’s old company website is outdated and inaccurate to its current state (you’ll find it here: https://www.heritagemillworks.com/), and I saw this as an opportunity to generate real value for my Dad’s business while completing my CS50 final project.

Overview:
This website is fully custom built using the React JavaScript library without the use of UI frameworks such as Bootstrap or Tailwind. The browser only loads one HTML file and React handles all the page switching internally without ever making a new request to a server. This website has multiple pages (Home, Custom Cabinetry, Portfolio, About Us, Contact Us). It also includes a hero image slideshow, service pages, a contact form, and a pre-footer info bar.

Tech Stack:
React – component based UI
Vite – build tool and dev server
CSS – fully customized stylesheet (no UI framework)
Formspree – handles contact form submissions

Pages:
Page
Description
Home
hero slideshow, service cards, testimonials carousel
Kitchen Cabinets
gallery page for kitchen cabinet work (tbr)
Bathroom Vanities
gallery page for vanity work (tbr)
Bookcases
gallery page for bookcase work (tbr)
Entertainment Centers
gallery page for entertainment centers (tbr)
Fireplace Mantles
gallery page for fireplace mantles (tbr)
Portfolio
image grid with lightbox
About Us
company history, shop info, contact modal
Contact Us
contact form, hours, map embed

Key Features:
Hero slideshow – auto-advances on the Home page every 4 seconds with a crossfade transition and dot navigation at the bottom
Service cards – clickable cards on the Home page that routes the user to each custom cabinetry category page
Testimonials carousel – revolving carousel that currently slides 6 customer review cards, and only 3 are visible at one time
Portfolio lightbox – full screen image viewer with arrow and keyboard navigation (arrow key + click arrow on image)
Contact modal – reusable modal with a Formspree connected form, used on Home, About Us, and Contact Us page
Pre-footer – four-column info bar at the bottom of every page that includes important contact information, location information, link to Facebook page, and branding

Project Structure:
heritage_millworks_react/
├── css/      
└── styles.css          # Full stylesheet
├── images/          # All the site images (avif, jpg, webp)
├── node_modules/
	└── ……          # All the pre-built packages needed for my website
├── src/
└── app.jsx          # The main React file containing all components
	└── main.jsx          # The entry point of the React app

Contact Form:
Forms are handled by Formspree using form ID “xeevvzkp”. This API software system receives an HTTP POST request from my Dad’s website to a URL that looks like this: https://formspree.io/f/xeevvzkp where it gets received. It processes the data and then forwards it as an email to my Dad. Currently, my Dad’s Formspree account is free, but the submission cap is 50 submissions a month. My Dad would have to pay for his account if he exceeds that number of submissions a month.
No backend server is required for form submission. Formspree’s backend receives it, processes it, and forwards it to my Dad.

Installation:
Currently the website can only be hosted locally because I haven’t completed it and published it to the web. The instructions are very detailed so that anybody with any level of coding experience can display my project.

Step #1 → Install VS Code (VS Code setup guide)
Download VS Code for your operating system (https://code.visualstudio.com/)
Run the installer and follow the prompts 
Step #2 → Install Node.js (Node.js installation guide)
Download the LTS version (https://nodejs.org/)
Run the installer and follow the prompts
To verify it installed correctly, open a terminal and run: node --version
Step #3 → Download the project files

Business Information:
Heritage Wood Co. is in the process of undergoing a name change, which is a discrepancy between the old website and the new website (Heritage Millworks → Heritage Wood Co.).
9436 State Hwy 198 Guys Mills, PA 16327
(814)-853-0323
heritagemillworks@windstream.net
Mon-Fri: 8:00AM - 5:00PM
