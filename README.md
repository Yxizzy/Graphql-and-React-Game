How I created this app:

1) I created my react application
2) I removed the application initial file
3) I ran yarn run eject to reconfigure my app (I committed to git before this)
4) I reconfigured the app and added my graphcool endpoint to babel(if using window, do it on your cli)
5) I added config to my src folder to configure my client side
6) I created endpoint.js and added my relayApi (this way the url is present in all directories)
7) I installed react router@3.0.2 for routing
8) I added react router to my index.js and import Routes from another file
9) I created my route component in routes and exported Routes
10) I created my first component Template.js and added it to my routes
11) I created more components Profile and Home
12) I installed material ui for styling
13) I installed react-tap-event-plugin for tap events in mobile app, without it tapping might be slow on mobile apps
14) Now I logged into my heroku and created heroku app using buildpack from https://github.com/mars/create-react-app-builderpack.git