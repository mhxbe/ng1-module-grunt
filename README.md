# ng1-module-grunt

This is a Grunt-skeleton for AngularJS modules.

## Requirements
* Grunt
* AngularJS `>=1.6.3`

#### Can I use this for versions lower than 1.6.3?
Ofcourse, but our `grunt bump` task also modifies `src/js/info.js` which contains a new angular feature where you can provide extra information about the module.

Just remove this file & its reference in the `bump`-task in the `Gruntfile.js` and you're good to go.

## Tasks

#### `grunt` (default)
This will run `grunt development` and start the `watch`-task.

---

#### `grunt development`
This will:
* output `concat` **src/js**-files & generated `ngtemplates`-file together & to **dist/**-folder (*.js)
* output `sass`-compiled **css** file to **dist/**-folder (*.css)

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
* `clean:all`
* `ngtemplates:development`
* `concat`
* `ngtemplates:production`
* `uglify`
* `sass`
* `clean:tmp`

---
#### `grunt serve`
This spins up a local webserver (_localhost:9001_) in combination with the `watch`-task where changes will be reflected with `livereload`.

##### Grunt tasks:
* `connect:server`
* `watch`

---

## Releases

With the `bump`-task, it's very easy to release new versions of the module. To make things easier, npm-scripts are used:
* `npm run release:patch`
* `npm run release:minor`
* `npm run release:major`

This will run `grunt production` & bump the version used in  **package.json**, **bower.json** & **src/js/info.js**.

## Testing

Run `npm run karma` to test `src/`-folder and output test-coverage to `coverage/`-folder.
