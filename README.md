# Felyne Fitters
Closing the gap between armor builds and players.

## Getting Started
To run a development build of this code, clone the repository onto your machine, make sure you have yarn installed, and run ```yarn``` to install all dependencies. If you are on a Unix machine, then go ahead and run

```
yarn dev
```

or if you're on a Windows machine,

```
yarn wdev
```

in one terminal, and

```
yarn webpack
```

in another terminal in order to have the ```bundle.js``` compiled and watched. Visit localhost:3000 to view the running application. Since the application is being watched, saving a document will automatically refresh the browser to reflect the changes.

If running on a Unix machine, refer to the pm2 documentation on starting and stopping the dev process. If using the script in the repository, running 

```
yarn pm2 stop server
```

will correctly kill the process.

### Build (Building) With
* React
* Redux (implementing soon)
* Express
* Node
* MongoDB

## About
Work in progress web-application focused on helping Monster Hunter: World players create and share armor build, while also being a learning experience for developing a SPA in React.

### Why?
Ever since I started playing Monster Hunter back in 2013, I was always searching for a useful, yet user-friendly, tool that could help me build sets for my character in-game. There are the ever-useful kiranico resources, wiki's and Athena's Assistant, but nothing I used felt intuitive or was easy to access.

Searching for builds online was a struggle, too. I always had to extrapolate what someone was using in a video, or crawl through forum or community posts looking for builds that always differed in formats.

### Felyne Fitters
Now that Monster Hunter is a globally recognized cross-platform game, I couldn't help but wonder how many other people felt the same way I do about theorying their characters loadouts and making them accessible. This application aims to help those players by providing an intuitive and helpful interface that they could interact with to create and share armor builds.

## Contributors
This project is currently under slow development by

[totemc](https://github.com/totemc)

[cabedi](https://github.com/cabedi)

### Thanks
Thanks to [LartTyler](https://github.com/LartTyler) for scraping and storing the information about the game needed to make the development of this application possible.
