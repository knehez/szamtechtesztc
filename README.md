# Szamtech C programozás teszt

## Frontend indítása (fejlesztés közben)
    npm run start

## Backend indítása (fejlesztés közben)
    npm run gulp backend


### Hogyan kell a szerverre kitenni a legfrissebb változatot?
```
sudo su
# ne kérje mindig a passwordot
git config credential.helper store
git pull

# rootként a node verziót át kell állítani > 14.x-re
sudo n

./node_modules/.bin/ng build --configuration production --base-href "/szamtech-teszt-c/"
```
ha a backend kód változott akkor először le kell állítani a futó szolgáltatást: 

    service szamtech stop

(megjegyzés: a szolgáltatás a háttérben így nézhető meg, hogy fut-e?)    
    
    ps -aux | grep c-compiler

majd a backend indítása a hagyományos módon, ami azért kell, hogy a .ts file-okat lefordítsuk .js-re:

    npm run gulp backend

Majd újra kell indítani a backend szolgáltatást:

    service szamtech restart

## Kód összezavarás

https://github.com/javascript-obfuscator/javascript-obfuscator

Ez a sor azért kell hogy kézzel is le lehessen futtatni a lokálisan installált exe-t:

    npm run gulp obfuscate

Az obfuscated file -> main-*.js átnevezése.

Gulp task a kódkeveréshez, majd az új állomány visszaírás
    npm run gulp obfuscate
    mv .\dist\main-obfuscated.bundle.js .\dist\main.bundle.js