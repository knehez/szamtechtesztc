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
./node_modules/@angular/cli/bin/ng build --prod --no-sourcemap --base-href "/szamtech-teszt-c/"
```
ha a backend kód változott akkor először kill-el ni kell a futó folyamatot: 

    ps -aux | grep c-compiler

majd a backend indítása a hagyományos módon, ami azért kell, hogy a .ts file-okat lefordítsuk .js-re:

    npm run gulp backend

Majd le kell állítani ctrl+c vel és ps-ben is megnézni hogy ne fusson:

    nohup node ./dist-server/app.js 3003 c-compiler &

## Kód összezavarás

https://github.com/javascript-obfuscator/javascript-obfuscator

Ez a sor azért kell hogy kézzel is le lehessen futtatni a lokálisan installált exe-t:

    npm link javascript-obfuscator

Gulp task a kódkeveréshez, majd az új állomány visszaírás
    npm run gulp obfuscate
    mv .\dist\main-obfuscated.bundle.js .\dist\main.bundle.js