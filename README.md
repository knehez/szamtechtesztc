# Szamtech Teszt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Backend indítása
npm run gulp backend


### Hogyan kell a szerverre kitenni a legfrissebb változatot?
```
sudo su
cd /opt/purdb/
# ne kérje mindig a passwordot
git config credential.helper store
git pull
./node_modules/@angular/cli/bin/ng build --prod --base-href "/szamtech-teszt-c/"
```
ha a backend kód változott akkor először kill-el ni kell a futó folyamatot: 

    ps -aux | grep c-compiler

majd a backend indítása a hagyományos módon, ami azért kell, hogy a .ts file-okat lefordítsuk .js-re:

    npm run gulp backend

Majd le kell állítani ctrl+c vel és ps-ben is megnézni hogy ne fusson:

    nohup node ./dist-server/app.js 3003 c-compiler &

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.