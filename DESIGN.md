# DESIGN.md 
### Heritage Wood Co. - Website

<br>

## Scope / Outcomes Reached

My original project proposal defined three tiers of success:

- **GOOD** — A well designed homepage with a navbar and button features
- **BETTER** — A well designed homepage with a navbar and button 
features that direct the user to other pages within the website
- **BEST** — A website that runs well on mobile and desktop platforms, as
well as a contact form that sends sends emails directly to my Dad

I should have increased the difficulty jump from **Good** to **Better**, but I largely
underestimated AI's ability to write code. So, I completed both of those,
though the subpages under "Custom Cabinetry" arent' finished because I ran out of time and my Dad wasn't able to get photos for me. But, those two tiers were accomplished. My third tier of success was a significant jump from the previous two in that I wanted to add a Contact Form that sends emails directly to my Dad, and I wanted my website to look
well on mible devices and desktop platforms, which I was able to get done. There are still some bugs here and there that I need to work out, especially the "About Us" page on mobile, but I plan to do that before I publish this website to the web.

<br>

## Time Breakdown

Most of my time was spent on CSS (design and styling can eat up a lot of time!!). Getting the layout, spacing, hover animations, and overall visual feel right took significantly longer than writing the React logic. The hero slideshow, testimonials carousel, and 
portfolio lightbox each went through many rounds of revision. I spent about 31 hours on this project. Like I said, the functionality of this project, like the Contact Form and mobile application, didn't take too long, but styling the website took the bulk of my time. I spent about 2.5 hours working with my Dad to understand what he wanted and to get photos from him, which never really happened (I have a couple). I spent about 3.5 hours at the beginning doing "real-world" work with the gentleman who managed my Dad's website. I had to ask him for the files and get setup to take my Dad's website "in house" so to speak (I will now be managing his website). I spent about 3 hours looking for images that were high enough resolution to demo my website on presentation day. I spent about 4.5 hours writing the README.md and DESIGN.md files. And the rest of the time was spent designing, implementing the Contact Form, making it look good on mobile, learning how to run my website on mobile, and other miscellaneous work. 

<br>

## Tools Used

### Languages
- **JSX** = the syntax used to write React components.
- **CSS** = used to style every element on the site.
- **HTML** = the shell that React mounts into.

### Libraries & Frameworks
- **React** = the JavaScript library the entire site is built on. 
- **Formspree (`@formspree/react`)** = a third-party API that handles 
contact form submissions and forwards them to my Dad's email.

### Build Tools
- **Vite** = the build tool and local development server. Runs the 
site locally during development and bundles all files for deployment.
- **Node.js / npm** = required to install packages and run Vite. 

### Development Environment
- **Antigravity** = 95% of coding was done here.
- **VS Code** = 5% of coding was done here.
- **GitHub** — used for source control and storing the project files.

<br>

## Why React?

Using a language that removed the need to code separately in Javascript 
and HTML was key for me. It kept all of my code (except CSS classnames)
in one page, which really simplified the process for me. Also, the site 
has a lot of repeated user interface features (navbar, footer, pre-footer, 
and contact modal all that I could use on multiple pages. React's component 
system meant I could write each of those once and reuse them everywhere. 

I didn't use UI frameworks like Bootstrap or Tailwind. Writing all the CSS
myself gave me full control over all the visual designs.

<br>

## Why Formspree?

One of my BEST outcome goals was a quote form for customers. I wanted
to implement a form that didn't require a backend, and Formspree offered that. 
It receives the form data through an HTTP POST request 
and then forwards it as an email to my Dad, with no server required on my end. The 
`@formspree/react` package made it straightforward to put into React 
using a `useForm` hook.

<br>

## New Skills I Had to Learn

- **JSX** — React uses a syntax that mixes JavaScript and HTML-like 
code. It's challenging for me to code manually in React, but AI helped me.
- **Vite** — I had to learn how to set up and run a Vite development 
environment. I still don't understand this process perfectly, but the
terminology and steps are becoming more familiar.
- **Formspree API** — I learned how to implement APIs into my code. I downloaded
the @formspree/react module and imported it at the top of my app.jsx code. Then,
I called it in the body of my code.
- **CSS styling** — I did a lot of manual 'fine-tuning'
to the website styling, which took some time to become comfortable with.
- **Git and GitHub** — I had to learn source control — 
how to commit files, push to a repository, and manage my project 
version history (I still don't understand it super well, but I understand
a lot more).

<br>

## How a page render works from start to finish:

1. The browser loads `index.html`
2. `main.jsx` mounts the `App` component into the `<div id="root">`
3. `App` reads `currentPage` state (default is `'home'`)
4. `PAGE_META` maps `'home'` to the `HomePage` component
5. `HomePage` renders — including the hero slideshow, service cards, 
and testimonials carousel
6. The `Nav` component sits above every page and calls 
`onNavigate(id)` when a link is clicked, which updates `currentPage`
7. React re-renders with the new component, simulating a page change

<br>

## Interesting Design Decisions

### One Reusable Contact Modal
The contact form (from Formspree) appears in three places — the Home page, 
the About Us page, and the Contact page. Rather than writing the form three times, 
I built a single `ContactModal` component that can be called anywhere I 
want it. This saved significant time and repeated code.

### Hero Slideshow
The slideshow cycles through six kitchen photos every 
4 seconds. The user can also click the dot navigation 
at the bottom to jump to any image manually.

### Testimonials Carousel
This was the most technically challenging component. The carousel 
renders 5 cards simultaneously — 3 visible and 1 hidden on each side 
— and uses a pixel offset animation to create the sliding 
effect. After the animation completes, the index updates and the 
offset snaps back to zero instantly, creating the illusion of infinite 
scrolling without duplicating any data. (AI helped me significantly on 
this piece, and I don't understand it very well at the moment.)

### CSS Variables
All colors and the font style are defined as CSS custom properties at the 
top of the stylesheet. This kept the design consistent across every place 
and means that a brand color change could be easily implemented to the
website. I would just have to change the colors defined at the top of the 
stylesheet.

<br>

## What I Would Do Differently

- **Split components into separate files** — everything lives in one 
`app.jsx` file, which got long. A `/components` folder with one file 
per component would have been easier to navigate.
- **Finish the service gallery pages** — the individual pages for 
Kitchen Cabinets, Bathroom Vanities, Bookcases, Entertainment Centers, 
and Fireplace Mantles are all built but still waiting to be finished. 
- **Improve mobile responsiveness** — the site has some responsive 
CSS but certain pages still need work.
