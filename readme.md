# AngularJS directive for goalProgress.js

An AngularJS directive to work with my [goalProgress jQuery plugin](https://github.com/tinacious/goalProgress).

![](https://github.com/tinacious/goalProgress/blob/master/screenshot.png?raw=true)

## Usage

1. Add `tinacious.goalProgress` module as an app dependency.
2. Implement the directive as a `div` attribute.
3. Include jQuery and goalProgress dependencies in your HTML.

```html
<div goal-progress current="100" goal="150" before="$" after=" raised!"></div>
```