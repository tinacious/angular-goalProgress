# AngularJS directive for goalProgress.js

An AngularJS directive to work with my [goalProgress jQuery plugin](https://github.com/tinacious/goalProgress).

![](https://github.com/tinacious/goalProgress/blob/master/screenshot.png?raw=true)

## Usage

This directive and its dependencies can be downloaded and installed into your project with Bower:

```bash
bower install angular-goalProgress --save-dev
grunt bower-install
```

1. Add `tinacious.goalProgress` module as an app dependency.
2. Implement the directive as a `div` attribute.
3. Include jQuery and goalProgress dependencies in your HTML. Using Bower with the above commands will do this for you.

```html
<div goal-progress current="100" goal="150" before="$" after=" raised!"></div>
```