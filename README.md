#Mithril Starter Kit

Starter kit for building web apps and pages with Mithril - a lightweight and lightspeed fast MVC framework (https://github.com/lhorie/mithril.js).

Mithril approach is strongly based on functional programming so I think you'd like to have a functional toolbelt around. Lodash is included by default (https://lodash.com/).

Project build and development processes are powered by Grunt nad Bower takes care of package management.
Grunt tasks include:
- Babel ES6 transpiling toolset which lets you write modern javascript today.
- Autogenerating documentation from your comments
- Checking your js code quality against google styleguide
- and bunch of basic things to get you up and running


Before installation please review Gruntfile.js as it's the heart of your project workflow. Structure and tasks are opinionated and based on my practice, however none of it is mandatory - tweak team for your own needs if you wish. Mirror your changes in package.json to avoid downloading dropped dependencies.

Small addition is CSS toolset with included reset, vertical rhythym and set of atomic classes that I often use (so my css feels also functional)

## Installation

You should have node.js installed on your computer.

Start your project:
- clone this repository
- run from terminal:
    - npm install (with sudo on unix if needed)
    - bower install
    - grunt

Project should be bootstraped. To make sure all is good run your first test from test dir. 


Lat but not least. This is just a compilation of existing tools really so big THX goes to all developers and contributors behind them!
