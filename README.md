# pace
Pace is a registration and management application for running events and competitions.

[![Build Status](https://snap-ci.com/lplotni/pace/branch/master/build_image)](https://snap-ci.com/lplotni/pace/branch/master)

## Features
The list of our issues/features can be found on our [trello board](https://trello.com/b/1gaDEa3O/pace-board).
## Demo
You can check out the latest version of the app on heroku: [https://dev-pace.herokuapp.com/](https://dev-pace.herokuapp.com/)
## Dev Setup
Pace is currently based on [express.js](http://expressjs.com/) and [node](https://nodejs.org), therefore you will need both on your machine. It also uses **Vagrant** for the database.
* To install Vagrant, go [here](https://www.vagrantup.com/). Or if you have **brew cask** on your machine, just do the following: `brew cask install vagrant`.
* To install node, go either to https://nodejs.org/ or if you are using a mac & brew use the following command: `brew install node`. 
* To get all the other dependencies and be able to start **pace** locally, just navigate to the pace folder and run: `npm install && gulp dev-setup`

To look at the db in your terminal, just connect to the vagrant box (from the postgres directory) via `vagrant ssh` and type psql.

#### Starting
Just run `gulp` and open http://localhost:3000 in your browser.

#### Running tests
For **unit** tests: `gulp test`

For **integration** tests: `gulp create-db test-integration` (and if your dev DB is already set up: `gulp test-integration`):

For **functional** tests: `gulp test-functional`

#### Running jshint
Here you go: `gulp lint`

## More info
If you would like to contribute, we have also few blog post explaining our
technical choices and setup:

 * [express
   structure](https://lplotni.github.io/blog/2015/08/04/bootstraping-a-node-dot-js-webapp/)
 * [testing](https://lplotni.github.io/blog/2015/10/10/express-testing/)
