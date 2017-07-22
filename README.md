# ng1-module-grunt

This is a Grunt-skeleton for AngularJS modules.

## requirements
* grunt
* AngularJS `>=1.6.3`

#### Can I use this for versions lower than 1.6.3?
Ofcourse, but our `grunt bump` task also modifies `src/js/info.js` which contains new angular feature where you can put extra information about the module.

Just remove this file & its reference in the `bump`-task in the `Gruntfile.js` and you're good to go.

## Tasks
---

#### `grunt` (default)
This will run `grunt development` en start the `watch`-task.

---

#### `grunt development`
This will:
* output `concat` **src/js**-files & generated `ngtemplates`-file together & to **dist/**-folder
* output `sass`-compiled **css** file to **dist/**-folder

##### Grunt tasks:
* `clean:developmentJS`
* `clean:developmentCSS`
* `ngtemplates:development`
* `concat`
* `sass:development`
* `clean:tmp`

---

#### `grunt production`
This will:
* output `concat` **src/js**-files & generated `ngtemplates`-file together & to **dist/**-folder (*.js)
* output `sass`-compiled **css** file to **dist/**-folder (*.css)
* output `uglified` **src/js**-files & generated `ngtemplates`-file  (*.min.js, *.min.js.map)
* output minified `sass`-compiled **css** file to **dist/**-folder  (*.min.css, *.min.css.map)

##### Grunt tasks:
* `clean:all`,
* `ngtemplates:development`,
* `concat`,
* `ngtemplates:production`,
* `uglify`,
* `sass`,
* `clean:tmp`

---
#### `grunt serve`
This spins up a local webserver in combination with the `watch`-task where changes will be reflected through `livereload`.

##### Grunt tasks:
* `connect:server`
* `watch`
