# Node Express Handlebars

### Overview

In this assignment, you'll create a taco tracker with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

### Read This

When trying to connect remotely to your Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.

### Important

* **This assignment must be deployed.** Be sure to utilize the [MYSQL Heroku Deployment Guide](../../04-Resources/02-Supplementals/MySQLHerokuDeploymentProcess.pdf) in order to deploy your assignment.

### Before You Begin

* Taco Tuesday! is a food-truck app that lets users input the names of tacos they'd like to eat - include fields for shell type and whether its a vegetarian taco or not.

* Whenever a user submits a taco,  your app will display the taco on the left side of the page -- waiting to be picked up.

* Each taco in the waiting area also has a `Pick Up!` button. When the user clicks it, the taco will move to the right side of the page.

* Your app will store every taco in a database, whether it has been picked up or not.

* [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).

### Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

* Committing often is a signal to employers that you are actively working on your code and learning.

  * We use the mantra “commit early and often.”  This means that when you write code that works, add it and commit it!

  * Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

* Be clear and descriptive in your commit messaging.

  * When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.

* We would like you to have well over 200 commits by graduation, so commit early and often!

### Submission on BCS

* **This assignment must be deployed.** * Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

## Instructions

#### App Setup

1. Create a GitHub repo named appropriately for the taco food truck and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`.

4. Create a server.js file.

5. Install the Handlebars npm package: `npm install express-handlebars`.

6. Install MySQL npm package: `npm install mysql`.

7. Require the following npm packages inside of the server.js file:
   * express

#### DB Setup

1. Inside your directory, create a folder named `db`.

2. In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:

   * Create the `tacos_db`.
   * Switch to or use the `tacos_db`.
   * Create a `tacos` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **taco_name**: a string.
     * **shell**: a string (soft/hard ~ flour/corn)
     * **vegetarian**: a boolean
     * **picked_up**: a boolean.

3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `tacos` table with at least three entries.

4. Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

5. Now you're going to run these SQL files.

   * You can either open workbench, open the sql files and then run the queries
     * OR follow the directions below to run the files via CLI

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.

#### Config Setup

1. Inside your directory, create a folder named `config`.

2. Create a `connection.js` file inside `config` directory.

   * Inside the `connection.js` file, setup the code to connect Node to MySQL.

   * Export the connection.

3. Create an `orm.js` file inside `config` directory.

   * Import (require) `connection.js` into `orm.js`

   * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

   * Export the ORM object in `module.exports`.

#### Model setup

* Inside your directory, create a folder named `models`.

  * In `models`, make a `taco.js` file.

    * Inside `taco.js`, import `orm.js` into `taco.js`

    * Also inside `taco.js`, create the code that will call the ORM functions using taco specific input for the ORM.

    * Export at the end of the `taco.js` file.

#### Controller setup

1. Inside your `taco` directory, create a folder named `controllers`.

2. In `controllers`, create the `tacos_controller.js` file.

3. Inside the `tacos_controller.js` file, import the following:

   * Express
   * `taco.js`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

1. Inside your directory, create a folder named `views`.

   * Create the `index.handlebars` file inside `views` directory.

   * Create the `layouts` directory inside `views` directory.

     * Create the `main.handlebars` file inside `layouts` directory.

     * Setup the `main.handlebars` file so it's able to be used by Handlebars.

     * Setup the `index.handlebars` to have the template that Handlebars can render onto.

     * Create a button in `index.handlebars` that will submit the user input into the database.

##### Side note on design

- If you are looking to go front-end/design, perhaps try out a different front-end CSS framework like materialize or foundation.
- You may want to start with at least bootstrap for the design.
- The design is secondary to the functionality of the server
- **MAKE IT FUNCTIONAL, THEN MAKE IT PRETTY** That goes for Code or Design.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── tacos_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── taco.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── taco_style.css
│       └── img
│           └── any images (check unsplash) - Make sure you have permission for any images
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Reminder: Submission on BCS

* Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.
 
- - -

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

This is a really tough homework assignment, but we want you to put in your best effort to finish it.

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

### Reminder

When trying to connect remotely to your Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.

**Good Luck!**
