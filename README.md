# Website America

A multi-page website about the United States, written in Romanian. It has pages on history, geography, demographics, politics and presidents, plus sections on American actors, singers and athletes and a page of curiosities.

It was one of my first web projects (2023), built with plain HTML, CSS and JavaScript and a small PHP backend.

## Features

- An interactive SVG map of the US on the politics page: hovering over a state shows its name in a tooltip that follows the cursor (`Js/Harta.js`).
- Image sliders and modal popups written in vanilla JavaScript.
- A contact form that saves messages to a MySQL database through PHP.

## Running it

1. Install a local PHP + MySQL stack such as XAMPP.
2. Copy the folder into the server's document root (`htdocs` for XAMPP).
3. Create the database used in `Php/config.php` if you want the contact form to work.
4. Open `http://localhost/website-america/Acasa.html`.

The static pages also work if you open `Acasa.html` directly in a browser. Only the contact form needs PHP.
