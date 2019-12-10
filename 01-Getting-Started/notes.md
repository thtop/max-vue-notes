## Getting Started

### Course Introduction
- Extremely Lean & Small
- 16kb minified and gzipped

### Join our Online Learning Community
Join our Online Learning Community
As a student of this course you also get free access to our “**Academind Community**” on Discord: [https://discord.gg/gxvEWGU](https://discord.gg/gxvEWGU)

There, you can find **like-minded people**, **discuss** issues, **help each other**, share progress, successes and ideas and simply **have a good time**!

I believe that you learn the most if you **don’t learn alone** but find learning partners and other people with similar interests. Our community is a great place for this - it’s the perfect complimentary resource for this course.

Joining it is of course **free and 100% optional**.

### Let's Create our First ViewJS Application

- [Vue.js](https://vuejs.org/)
- [https://jsfiddle.net/](https://jsfiddle.net/)

**HTML**
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <p>{{ title }}</p>
</div>
```


**JavaScript**
```js
new Vue({
	el: '#app',
  data: {
  	title: 'Hello World'
  }
});
```

### Extending the VueJS Application
**HTML**
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
<input type="text" v-on:input="changeTitle">
  <p>{{ title }}</p>
</div>
```


**JavaScript**
```js
new Vue({
	el: '#app',
  data: {
  	title: 'Hello World'
  },
  methods: {
  changeTitle: function() {
  	this.title = event.target.value;
  }
  }
});
```

### Course Structure
- Gettng Started
- Interaction with the DOM (Templates)
- Understanding the VueJS Instance
- Vue CLI
- Components
- Forms
- Directives, Filters & Mixins
- Animations & Transitions
- Working with Http
- APAs
  - Routing
  - State Management
- Deploying a VueJS App

### Take Advantage of all Course Resources!

- Projects, Exercises, Code and Questions

1. Basics, Template Interaction
2. Components
3. Animations
4. Final Project (inct. Routing, State Management)

- **Quick Exercises** to practice the Concepts learned
- **Source Code** attached to **last Lecture** of each Course Module
- Ask Questions in **Q&A** But...
- ... **also answer existing Questions!** You learn the most by doing that!

### Setup VueJS Locally
- see in seup folder

### Module Resources & Useful Links
The starting project can be found on JSFiddle: [https://jsfiddle.net/smax/c4mcxu7s/](https://jsfiddle.net/smax/c4mcxu7s/)

Attached you find the local setup example.

**Editors/ IDEs you could use:**

- Atom: [https://atom.io/](https://atom.io/)
- Sublime: [https://www.sublimetext.com/](https://www.sublimetext.com/)
- Webstorm: [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/)
- Visual Studio Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)

**Useful Links:**

- Official Docs - VueJS Installation: [http://vuejs.org/guide/installation.html](http://vuejs.org/guide/installation.html)
