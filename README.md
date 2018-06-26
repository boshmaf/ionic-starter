# mobile
This is a toy Ionic app. The following instructions will show you how to use it.

## Installation
Follow these steps to get the app running:

```
⋊> ~ cd ~/
⋊> ~ git clone https://github.com/boshmaf/ionic-starter.git
⋊> ~ cd ionic-starter
⋊> ~/ionic-starter on master ◦ brew install node
⋊> ~/ionic-starter on master ◦ npm install -g cordova ionic
⋊> ~/ionic-starter on master ◦ ionic state restore
⋊> ~/ionic-starter on master ◦ npm install
⋊> ~/ionic-starter on master ◦ ionic build ios
⋊> ~/ionic-starter on master ◦ ionic build android
⋊> ~/ionic-starter on master ◦ ionic emulate ios
⋊> ~/ionic-starter on master ◦ ionic emulate android
```

## Structure

Here's an overview of the project structure:

### Custom styles
The project uses Sass and you can override Ionic's Sass or add your own under `scss/` directory.

### App logic
The project is an Ionic app, which means it uses AngularJS. The frontend home directory is `www/`.

### Structure?
The styling and app logic directories are divided by features or components. There is always a `core/` component that the app depends on, sometimes a number of independent `blocks/` that are available to anyone, and finally components for application features.

> It is better for directories to be structured by module and files by their functions.

For example, under `www/js/`, you'll find a directory called `login/`, and under it you'll find some files implementing defintions for the feature's module, config, run, provider, factory, service, etc.

### Interesting files
It is good to learn a little info about the following files:

#### `package.json`
There are npm pre and post install scripts. These are bash scripts to (pre) install Ruby gems and (post) install Bower dependencies so you don't have to manually do it.

The project comes shipped with basic and useful Cordova plugins. For example, `cordova-plugin-x-toast` allows the app to show non-intrusive popups called toasts. These are useful to show log messages on a debug build or release. Unless you want to remote debug the app, then the console shows the same toast messages but with more information like the cause of an error. When the Ionic state is recovered, Ionic CLI adds iOS and Android platforms under `platforms/`, and installs their plugins locally under `plugins/` which are also copied to each platform.

#### `ionic.project`
This is where Ionic configuration is defined. The app runs Crosswalk as a webview for Android. You can do interesting stuff with Ionic CLI, which uses this file too.

#### `gulpfile.js`
A number of basic tasks are defined here. Some of them run by default by typing `gulp` in your shell. Others demand that you spill them out, like `gulp install`. Do go through the jsdocs of these tasks, I'll go more into details later on, but keep in mind that `gulp.config.json` is the Gulp config file. The CLI reads it to perform some of these tasks.

#### `config.xml`
This find contains configurations that are used to generate automatically-configured platform projects under `platforms/`. Notice that by default a whitelist is defined for all network activity. You might want to change that. Also, there are some basic Crosswalk configuration, which you might wanna consider in the future.

#### `bower.json`
All Bower configs. Right now, it's pretty minimal. The project uses Ionic and MomentJS, and it installs them under `www/lib/`. That's the vendor directory. It is specified in the resource file `.bowerrc`.




