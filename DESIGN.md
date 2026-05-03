# DESIGN.md — Heritage Wood Co. Website

## Scope / Outcomes Reached

My original project proposal defined three tiers of success:

- **GOOD** — A good looking homepage with a navbar and button features
- **BETTER** — A well designed homepage with a navbar and button 
features that direct the user to other specific pages
- **BEST** — All of the above, working on any device, plus a quote 
form for customers to fill out

I exceeded the BETTER outcome and largely hit the BEST outcome. The 
site has a fully working navbar with a dropdown menu, a hero slideshow, 
clickable service cards that route to individual pages, a testimonials 
carousel, a portfolio gallery with a lightbox, an About Us page, and a 
working contact form — which is essentially the quote form I described 
in my proposal. The one area where the site is still incomplete is the 
individual service gallery pages (Kitchen Cabinets, Bathroom Vanities, 
etc.), which are built and wired up but still need photos added to them.

Responsiveness is partially implemented via CSS media queries but is 
still a work in progress on some pages.

---

## Time Breakdown

Most of my time was spent on CSS. Getting the layout, spacing, hover 
animations, and overall visual feel right took significantly longer than 
writing the React logic. The hero slideshow, testimonials carousel, and 
portfolio lightbox each went through multiple rounds of revision. 
Learning React itself — components, state, props, and hooks — also took 
meaningful time up front before I could build productively.

---

## New Skills I Had to Learn

My proposal was honest about the gaps I was starting with. Here is what 
I actually had to learn to complete this project:

- **React** — I had to learn how to think in components, how state 
works, and how to pass data between components using props. This was 
the biggest learning curve of the project.
- **JSX** — React uses a syntax that mixes JavaScript and HTML-like 
code. It looked strange at first but became natural quickly.
- **Vite** — I had to learn how to set up and run a Vite development 
environment, and understand what a build tool actually does.
- **Formspree API** — I had to learn what an API is, what an HTTP POST 
request is, and how to connect a React form to a third-party service.
- **CSS animations and transitions** — The slideshow, carousel, and 
hover effects required learning `transform`, `transition`, 
`translateX`, and `keyframes`.
- **Git and GitHub** — I had to learn source control from scratch — 
how to commit files, push to a repository, and manage my project 
version history.

---

## Why React?

My proposal mentioned that I would build everything using React, and 
that turned out to be the right call. The site has a lot of repeated 
UI — the navbar, footer, pre-footer, and contact modal all appear on 
every page. React's component system meant I could write each of those 
once and reuse them everywhere. Managing things like which page is 
active, whether the modal is open, or which lightbox image is showing 
all became clean and straightforward using React's state system.

I deliberately avoided UI frameworks like Bootstrap or Tailwind. My 
Dad's site needed to look unique and specific to a woodworking brand, 
not like a generic template. Writing all the CSS by hand gave me full 
control over every visual decision.

---

## Why Formspree?

One of my BEST outcome goals was a quote form for customers. I needed 
form submissions to actually reach my Dad's email without building a 
backend server — which was beyond the scope of this project. Formspree 
solved this cleanly. It receives the form data via an HTTP POST request 
and forwards it as an email, with no server required on my end. The 
`@formspree/react` package made it straightforward to wire into React 
using a single `useForm` hook.

---

## Interesting Design Decisions

### No React Router
Page navigation is handled through a `currentPage` state string rather 
than React Router. When the user clicks a nav link, `currentPage` 
updates and React swaps out which component is rendered. This kept 
things simple for a single-developer project, though the tradeoff is 
that the URL never changes — every page lives at the same address. A 
future version of the site would use React Router to fix this.

### One Reusable Contact Modal
The contact form appears in three places — the Home page, the About 
page, and the Contact page. Rather than writing the form three times, 
I built a single `ContactModal` component that can be triggered from 
anywhere using an `isOpen` boolean. This was one of the cleaner 
patterns I used and saved a significant amount of repeated code.

### Hero Slideshow
The slideshow cycles through six kitchen photos automatically every 
4 seconds. Each image is absolutely positioned and assigned one of 
three CSS classes — active, exit, or neither — which triggers a 
`translateX` slide transition. A `setInterval` inside a `useEffect` 
hook handles the timing. The user can also click the dot navigation 
at the bottom to jump to any image manually.

### Testimonials Carousel
This was the most technically challenging component. The carousel 
renders 5 cards simultaneously — 3 visible and 1 hidden on each side 
as a buffer — and uses a pixel offset animation to create the sliding 
effect. After the animation completes, the index updates and the 
offset snaps back to zero instantly, creating the illusion of infinite 
scrolling without duplicating any data.

### CSS Variables
All colors and the font are defined as CSS custom properties at the 
top of the stylesheet. This kept the design consistent across every 
component and means a brand color change could be made in one place 
and propagate across the entire site instantly.

---

## What I Would Do Differently

- **Split components into separate files** — everything lives in one 
`app.jsx` file, which got long. A `/components` folder with one file 
per component would have been easier to navigate.
- **Add React Router** — proper URL routing would allow direct linking 
to specific pages and make the browser back button work correctly.
- **Finish the service gallery pages** — the individual pages for 
Kitchen Cabinets, Bathroom Vanities, Bookcases, Entertainment Centers, 
and Fireplace Mantles are all built and wired up but are waiting on 
photos from my Dad.
- **Deploy the site** — the site currently only runs locally. 
Publishing it to a platform like Vercel or Netlify is the next step 
so that it is actually accessible on the web.
- **Improve mobile responsiveness** — the site has some responsive 
CSS but certain pages and components still need work on smaller screens.
