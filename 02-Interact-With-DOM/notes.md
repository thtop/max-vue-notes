## Using VueJS to Interact with the DOM

### Module Introduction

- DOM interaction

### Underatanding VueJS Templates

- The `{{ }}` Syntax is also called "**Interpolation**" or "**String Interpolation**"

### How the VueJS Template Syntax and Instance Work Together

**HTML**

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <p>{{ sayHello() }}</p>
</div>
```

**js**

```js
new Vue({
  el: '#app',
  data: {
    title: 'Hello World'
  },
  methods: {
    sayHello: function() {
      return 'Hello!';
    }
  }
});
```

### Accessing Data in the Vue Instance

**HTML**

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <p>{{ sayHello() }}</p>
</div>
```

**js**

```js
new Vue({
  el: '#app',
  data: {
    title: 'Hello World'
  },
  methods: {
    sayHello: function() {
      return this.title;
    }
  }
});
```

### Binding to Attributes

**HTML**

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
</div>
```

**js**

```js
new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    link: 'http://google.com'
  },
  methods: {
    sayHello: function() {
      return this.title;
    }
  }
});
```

### Understanding and Using Directives

- `<a v-bind:href="link">Google</a>`

```js
new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    link: 'http://google.com'
  },
  methods: {
    sayHello: function() {
      return this.title;
    }
  }
});
```

### Disable Re-Rendering with v-once

- Keep in mind: All usages of "title" get re-rendered once the property changes!
- `v-once`

**HTML**

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <h1 v-once>{{ title }}</h1>
  <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
</div>
```

**js**

```js
new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    link: 'http://google.com'
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello!';
      return this.title;
    }
  }
});
```

**output**

```
Hello World
Hello! - Google
```

### How to Output Raw HTML

- `v-html`

**HTML**

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <h1 v-once>{{ title }}</h1>
  <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
  <hr />
  <p v-html="finishedLink"></p>
</div>
```

**js**

```js
new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>'
  },
  methods: {
    sayHello: function() {
      this.title = 'Hello!';
      return this.title;
    }
  }
});
```

**output:**

```
Hello World
Hello! - Google

Google
```

### Assignment 1: Time to Practic - Outputting Data to Templates

- **Exercise-1**

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Exercise 1</title>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
  </head>
  <body>
    <div id="exercise">
      <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
      <p>VueJS is pretty cool - {{ name }} ({{ age }})</p>

      <!-- 2) Output your age, multiplied by 3 -->
      <p>{{ age * 3}}</p>

      <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
      <p>{{ random() }}</p>

      <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
      <div>
        <img v-bind:src="image" style="width:100px;height:100px" />
      </div>

      <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
      <div>
        <input type="text" v-on:input="changeName" v-bind:value="name" />
      </div>
    </div>

    <script src="app.js"></script>
  </body>
</html>
```

**JS**

```js
new Vue({
  el: '#exercise',
  data: {
    name: 'Thamonwan',
    age: '18',
    image:
      'https://i.etsystatic.com/11401535/r/il/792598/1356498232/il_794xN.1356498232_oxdb.jpg'
  },
  methods: {
    random: function() {
      return Math.random();
    },
    changeName: function() {
      this.name = event.target.value;
    }
  }
});
```

### Listening to Events
