# nginit

[![NPM](https://nodei.co/npm/nginit.png?compact=true)](https://nodei.co/npm/nginit/)

[![npm version](https://badge.fury.io/js/nginit.svg)](https://badge.fury.io/js/nginit) [![Dependency Status](https://david-dm.org/vermicida/nginit.svg)](https://david-dm.org/vermicida/nginit)

This is a simple CLI util to create Angular applications. `nginit` clones the [ng-boilerplate](https://github.com/vermicida/ng-boilerplate) repository to your system and removes all the unnecessary data from it, like Git, LICENSE or README files. This is just a fast way to create Angular applications that runs _out of the box_; if you want to take advantage of testing, linting or serving your app, to quote some, I highly recommend you to use [Angular CLI](https://cli.angular.io).

## Getting started

You must have [Node.js](https://nodejs.org/en/) installed in your system, so do it if you haven't.

Install `nginit` globally running this command from your terminal:
```bash
$ npm install nginit -g
```

## Seeding Angular apps

Wherever you want to create a new Angular app, execute `nginit` and pass it a name for your app:
```bash
$ nginit heroes
```

You will get something like this:
```bash
Ready! Remember to run 'npm install' within the app folder.
```

So go into the application directory and run those npm tasks:
```bash
$ cd heroes
$ npm install
```

And finally, run the server:
```bash
$ npm start
```

And that's all. You're ready to start coding your new Angular app.

## License

Code released under the [MIT license](./LICENSE).
