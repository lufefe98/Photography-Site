# Photography-Site
A CSS project
This project was made with the aim of using CSS to create an aesthetically appealing web pages that display a photographer's works, blog posts, and services which they  provide.

This project is inspired by the following website: http://photographer-cms.webflow.io/


The design is meant to use a variety of layouts, specifically CSS Flex for the content of various pages, CSS grid for the gallery layout.

The project makes use of the EJS templating system, which reduces the amount of code needed for each page which would make use of the same navbar and footer or the same type of general page layout. Also, in future, should any new ideas come along, the inclusion of dynamic data.


In order to run the project, the user will need to clone the repo onto their local machine and then have Node.Js installed on their local machine.
A link to download Node.Js can be found [here](https://nodejs.org/en/download/).

After installing Node.Js, they will need to initialiaze the project thorugh the use of the termial, using the followig command: `npm init -y`.
Thereafter, they will need to install Express and EJS.
The next step is to run `$ nodemon index.js` in the terminal before going to their browser and entering "localhost:3400" in the url bar of their browser which will lead them to the home page of the project.
