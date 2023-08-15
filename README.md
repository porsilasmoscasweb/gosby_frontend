# Gosby Frontend

The goal of this exercise is to create an Angular application to listen to music podcasts.

## SET UP

Angular CLI: 16.2.0
Node: 18.17.1
Package Manager: npm 9.6.7
OS: darwin x64

Angular: 16.2.0
... animations, cli, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.0
@angular-devkit/build-angular   16.2.0
@angular-devkit/core            16.2.0
@angular-devkit/schematics      16.2.0
@schematics/angular             16.2.0
rxjs                            7.8.1
typescript                      5.1.6
zone.js                         0.13.1


npm install
npm i -D @angular-builders/custom-webpack
npm install bootstrap --save

ng serve --open

## TO DO

The application must contain three views:

- Podcast list => /
- Podcast details => /podcast/{podcastId}
- Episode details => /podcast/{podcastId}/episode/{episodeId}

The application must be a SPA with routing, and browsing must happen inside the client without any page refresh.

WEBPACK :: The application must be built/executed using a development mode and a production mode (with assets minimised, code optimised, etc).

STYLE :: SASS

### Data Endpoints

- Url to get the top 100 most popular podcast from Apple: [https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json]
- Url to get the podcast details: [https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20]
- If you have CORS issues use a service like [https://allorigins.win/]

## Documentation & source

- Search Podcasts [https://stackblitz.com/edit/angular-filter-list-of-items?file=src%2Fapp%2Fapp.component.html]