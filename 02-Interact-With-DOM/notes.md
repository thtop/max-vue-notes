## Using VueJS to Interact with the DOM

### Module Introduction

- DOM interaction

--- 

### Underatanding VueJS Templates

- The `{{ }}` Syntax is also called "**Interpolation**" or "**String Interpolation**"

--- 

### How the VueJS Template Syntax and Instance Work Together

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <p>{{ sayHello() }}</p>
</div>
```

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

---

### Accessing Data in the Vue Instance

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <p>{{ sayHello() }}</p>
</div>
```

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

---

### Binding to Attributes

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
</div>
```

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

---

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

---

### Disable Re-Rendering with v-once

- Keep in mind: All usages of "title" get re-rendered once the property changes!
- `v-once`

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <h1 v-once>{{ title }}</h1>
  <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
</div>
```

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

--- 

### How to Output Raw HTML

- `v-html`

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <h1 v-once>{{ title }}</h1>
  <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
  <hr />
  <p v-html="finishedLink"></p>
</div>
```

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

---

### Assignment 1: Time to Practic - Outputting Data to Templates

- **Exercise-1**

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

--- 

### Listening to Events

```html
<div id="app">
  <button v-on:click="increase"> Click me</button>
  <p>{{ counter }}</p>
</div>
```

```js
new Vue({
 el: '#app',
 data: {
  	counter: 0
 },
 methods: {
 	increase: function() {
  	this.counter++;
  }
 }
});
```

---

### Getting Event Data from the Event Object

```html
<div id="app">
  <button v-on:click="increase"> Click me</button>
  <p>{{ counter }}</p>
  <p v-on:mousemove="updateCoordinates">
    Coordinates: {{ x }} / {{ y }}
   </p>
</div>
```

```js
new Vue({
 el: '#app',
 data: {
  	counter: 0,
    x: 0,
    y: 0
 },
 methods: {
 	increase: function() {
  	this.counter++;
  },
  updateCoordinates: function(event) {
  	this.x = event.clientX;
    this.y = event.clientY;
  }
 }
});
```

---

### Passing your own Arguments with Events

```html
<div id="app">
  <button v-on:click="increase(2, $event)"> 
    Click me
  </button>
  <p>{{ counter }}</p>
  <p v-on:mousemove="updateCoordinates">
    Coordinates: {{ x }} / {{ y }}
  </p>
</div>
```

```js
new Vue({
 el: '#app',
 data: {
  	counter: 0,
    x: 0,
    y: 0
 },
 methods: {
 	increase: function(step, event) {
  	this.counter += step;
  },
  updateCoordinates: function(event) {
  	this.x = event.clientX;
    this.y = event.clientY;
  }
 }
});
```
---

### Modifying an Event - with Event Modufiers

Version 1

```html
<div id="app">
  <button v-on:click="increase(2, $event)"> 
    Click me
  </button>
  <p>{{ counter }}</p>
  <p v-on:mousemove="updateCoordinates">
    Coordinates: {{ x }} / {{ y }}
    - <span v-on:mousemove="dummy">DEAD STOP</span>
   </p>
</div>
```

```js
new Vue({
 el: '#app',
 data: {
  	counter: 0,
    x: 0,
    y: 0
 },
 methods: {
 	increase: function(step, event) {
  	this.counter += step;
  },
  updateCoordinates: function(event) {
  	this.x = event.clientX;
    this.y = event.clientY;
  },
  dummy: function(event) {
  	event.stopPropagation();
  }
 }
});
```

Versoin 2

```html
<div id="app">
  <button v-on:click="increase(2, $event)"> 
    Click me
  </button>
  <p>{{ counter }}</p>
  <p v-on:mousemove="updateCoordinates">
    Coordinates: {{ x }} / {{ y }}
    - <span v-on:mousemove.stop="">DEAD STOP</span>
   </p>
</div>

<!-- <span v-on:mousemove.stop.prevent="">DEAD STOP</span> -->
```

```js
new Vue({
 el: '#app',
 data: {
  	counter: 0,
    x: 0,
    y: 0
 },
 methods: {
 	increase: function(step, event) {
  	this.counter += step;
  },
  updateCoordinates: function(event) {
  	this.x = event.clientX;
    this.y = event.clientY;
  }
 }
});
```

---

### Listening to Keyboard Events

```html
<div id="app">
  <button v-on:click="increase(2, $event)"> 
    Click me
  </button>
  <p>{{ counter }}</p>
  <p v-on:mousemove="updateCoordinates">
    Coordinates: {{ x }} / {{ y }}
    - <span v-on:mousemove.stop="">DEAD STOP</span>
   </p>
   <input type="text" v-on:keyup.enter.space="alertMe">
</div>

```

```js
new Vue({
 el: '#app',
 data: {
  	counter: 0,
    x: 0,
    y: 0
 },
 methods: {
 	increase: function(step, event) {
  	this.counter += step;
  },
  updateCoordinates: function(event) {
  	this.x = event.clientX;
    this.y = event.clientY;
  },
  alertMe: function() {
  	alert('Alert!');
  }
 }
});
```

---


### Assignment 2: Time to Practice - Events

```html
<div id="exercise">
  <!-- 1) Show an alert when the Button gets clicked -->
  <div>
    <button v-on:click="buttonClick">Show Alert</button>
  </div>
  <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
  <div>
    <input type="text" v-on:keydown="value = $event.target.value" />
    <p>{{ value }}</p>
  </div>
  <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
  <div>
    <input type="text" v-on:keydown.enter="value = $event.target.value" />
    <p>{{ value }}</p>
  </div>
</div>
```

```js
new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    buttonClick: function() {
      alert('alert');
    }
  }
});

```

---


### Writing JavaScript Code in the Templates

```html
<div id="app">
  <button v-on:click="increase(2, $event)"> 
    Click me
  </button>
  <button v-on:click="counter++"> 
    Click me
  </button>
  <p>{{ counter * 2 > 10 ? 'Greater than 10 : 'Smaller than 10'  }}</p>
  <p v-on:mousemove="updateCoordinates">
    Coordinates: {{ x }} / {{ y }}
    - <span v-on:mousemove.stop="">DEAD STOP</span>
   </p>
   <input type="text" v-on:keyup.enter.space="alertMe">
</div>

```

```js
new Vue({
 el: '#app',
 data: {
  	counter: 0,
    x: 0,
    y: 0
 },
 methods: {
 	increase: function(step, event) {
  	this.counter += step;
  },
  updateCoordinates: function(event) {
  	this.x = event.clientX;
    this.y = event.clientY;
  },
  alertMe: function() {
  	alert('Alert!');
  }
 }
});
```

---


### Using Two-Way-Bingind

- `v-model`

```html
<div id="app">
  <input type="text" v-model="name">
  <p>{{ name }}</p>
</div>
```

```js
new Vue({
	el: '#app',
  data: {
  	name: 'Max'
  }
});
```

---

### Reacting to Changes with Computed Properties

Version 1

```html
<div id="app">
  <button v-on:click="increase">Increase</button>
  <button v-on:click="decrease">Decrease</button>
  <p>Counter: {{ counter }}</p>
  <p>Result: {{ result }}</p>
</div>
```

```js
new Vue({
	el: '#app',
  data: {
  	counter: 0,
    result: ''
  },
  methods: {
  	increase: function() {
    	this.counter++;
      this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    },
    decrease: function() {
    	this.counter--;
      this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    }
  }
});
```

Version 2

```html
<div id="app">
  <button v-on:click="counter++">Increase</button>
  <button v-on:click="counter--">Decrease</button>
  <p>Counter: {{ counter }}</p>
  <p>Result: {{ result() }}</p>
</div>
```

```js
new Vue({
	el: '#app',
  data: {
  	counter: 0,
  },
  methods: {
  	result() {
    	return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  }
});
```

Version 3

```html
<div id="app">
  <button v-on:click="counter++">Increase</button>
  <button v-on:click="counter--">Decrease</button>
  <button v-on:click="secondCounter++">Increase Second</button>
  <p>Counter: {{ counter }} | {{ secondCounter }}</p>
  <p>Result: {{ result() }} || {{ output }}</p>
</div>

```

```js
new Vue({
	el: '#app',
  data: {
  	counter: 0,
    secondCounter: 0
  },
  computed: {
  	output: function() {
    	console.log('Computed');
    	return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
      }
  },
  methods: {
  		result: function() {
      console.log('Methods');
    	return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  }
});
```

**Known Options for Vue Instance**
- **el**: Connect to DOM
- **data**: Store Data to be used
- **methods**: Methods of this Vue Instance
- **computed**: Dependent Properties

### An Alternative to Computed Properties: Watching for Changes

### Saving Time with Shorthands

### Assingment 3: Time to Practice - Reactive Properties

### Dynamic Styling with CSS Classes - Basics

### Dynamic Styling with CSS Classes - Using Objects

### Dynamic Styling with CSS Classes - Using Names

### Setting Styles Dynamically (without CSS Classes)

### Styling Elements with the Array Syntax

### Assignment 4: Time to Practice - Styling 

### Module Weap Up

### Module Resources & Useful Links

