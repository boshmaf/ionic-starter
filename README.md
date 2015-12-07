# mobile
Hi! This is "mobile," a toy Ionic app. The following instructions will show you how to play with me.

## Installation
Here's what my author typed to get me running on his 2012 MacBook Air. Old but freaking sleek!

```
⋊> ~ # from your home dir we start
⋊> ~ 
⋊> ~ # clone me from github
⋊> ~ git clone https://github.com/boshmaf/ionic-starter.git
⋊> ~ 
⋊> ~ # go to my home dir
⋊> ~ cd ionic-starter
⋊> ~/ionic-starter on master ◦ 
⋊> ~/ionic-starter on master ◦ # oh yeah, we're in business
⋊> ~/ionic-starter on master ◦ # the fancy git theme is by an awesome shell called fish
⋊> ~/ionic-starter on master ◦
⋊> ~/ionic-starter on master ◦ # install node using brew, otherwise go to their website
⋊> ~/ionic-starter on master ◦ # this will also include node package manager called npm
⋊> ~/ionic-starter on master ◦ brew install node
⋊> ~/ionic-starter on master ◦ 
⋊> ~/ionic-starter on master ◦ # install cordova and ionic, you'll love this stuff
⋊> ~/ionic-starter on master ◦ npm install -g cordova ionic
⋊> ~/ionic-starter on master ◦ 
⋊> ~/ionic-starter on master ◦ # restore my Ionic state, and yeah ios and android are my
⋊> ~/ionic-starter on master ◦ # only platforms for now
⋊> ~/ionic-starter on master ◦ ionic state restore
⋊> ~/ionic-starter on master ◦ 
⋊> ~/ionic-starter on master ◦ # install my default and dev node dependencies
⋊> ~/ionic-starter on master ◦ # this will also install my few bower dependencies
⋊> ~/ionic-starter on master ◦ npm install
⋊> ~/ionic-starter on master ◦ 
⋊> ~/ionic-starter on master ◦ # nearly there, go ahead and build me for ios and android
⋊> ~/ionic-starter on master ◦ ionic build ios
⋊> ~/ionic-starter on master ◦ ionic build android
⋊> ~/ionic-starter on master ◦ 
⋊> ~/ionic-starter on master ◦ # now we can start playing! let's fake it for now
⋊> ~/ionic-starter on master ◦ ionic emulate ios
⋊> ~/ionic-starter on master ◦ ionic emulate android
```

## About my structure

Ok. Maybe you have noticed I'm a little different. Let's take from the bottom of the file list.

In `package.json`, you'll find I have npm pre and post install scripts. These are bash scripts to (pre) install Ruby gems and (post) install Bower dependencies so you don't have to manually do it.

I also come shipped with basic and useful Cordova plugins. For example, `cordova-plugin-x-toast` allows me to show non-intrusive popups called toasts. These are useful to show log messages on a debug build or release. Unless you want to remote debug me, then the console shows the same toast messages but with more information like the cause of an error. When you recover my Ionic state, I add iOS and Android platforms under `platforms/`, and also install their plugins locally under `plugins/` which I also copy to each platform.

You might have also noticed those Gulp packages. I'll talk about them in a minute.

In `ionic.project`, you'll find some of my Ionic configuration. As you can see, I run Crosswalk as a webview for Android. Yeah, I'm that badass! You can do interesting stuff with Ionic CLI, which uses this file too.

In `gulpfile.js`, my author has defined a number of basic tasks. Some of them run by default by typing `gulp` in your shell. Others demand that you spill them out, like `gulp install`. Do go through the jsdocs of these tasks, I'll go more into details later on, but keep in mind that `gulp.config.json` is my Gulp config file. I read it to perform some of those tasks you saw.

Moving on. In `config.xml`, you'll find some of the configurations that I use to generate automatically-configured platform projects under `platforms/`. Notice that by default I whitelist all network activity. You might want to change that. Also, there are some basic Crosswalk configuration, which you might wanna consider in the future.

In `bower.json`, you'll find my Bower hommies. Right now it's pretty minimal. I use Ionic and MomentJS and I install them under `www/lib`. That's my vendor directory. It is specific in my resource file `.bowerrc`. Yep, that's that.

For styles, I use Sass and you can override Ionic's Sass or add your own under `scss` directory. You might notice that the directory structure is divided by features or components. There is always a `core` component, sometimes a number of independent `blocks`, or ones for application features. For example, `login` is a feature, and it has its own directory. This structure is also followed for my JS files under `www/js/`. My author has been inspired by Papa's Angular Style Guide.

*I generally like directories structured by feature or module, and my files by their features' or modules' functions.* For example, under `www/js/`, you'll find a directory called `login`, and under it you'll find some files implementing defintions for the feature's module, config, run, provider, factory, service, etc.




