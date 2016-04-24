# Zero to Rails & Vue

This is the Day 1 for a 5 day JavaScript & Rails workshop.

## Instructions

+ Clone this repo & run bundle install
+ Install [vue devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) if you haven't already.
+ start the rails server
+ `open localhost:3000`
+ Use the videos & wireframe to complete the goals
+ Complete the bonus goals if you wish

### Goals

[Presentation](hybrid-rails-code-platoon-1.pdf?raw=true)
![Wireframe](/wireframe.png?raw=true)

+ Follow the videos to create a vue-alert component
+ Use what you've learned to create a vue-show-more component

#### Video 1: [Include Vue.js in a Rails App](https://youtu.be/HcL2jjen61o)

#### Video 2: [Extract a Component](https://youtu.be/wrB-0XvFYDc)

#### Video 3: [Bring that Component to Life](https://youtu.be/RPpTQKxoEPI)

### Bonus Goals
+ Research how to add animations and transitions to Vue's v-if
+ Add a subtle fade out effect when the alert is dismissed
+ Add a slide up and slide down effect when the show-more component is toggled.



## Rails & Vue Cheatsheet

See also the product-detail-prototype branch for specific examples.


### file boilerplate

```javascript
// All javascript files start with this
;(function () {
  "use strict"

})();
```

### Add vue to the project

```
vendor
└── assets
    ├── javascripts
    │   └── vue.js
```

In application.js
```
//= require vue
```

### Boot the main Vue app

```javascript
// app/assets/javascripts/main.js
;(function () {
  "use strict"

  $(document).ready(function () {

    new Vue({

      el: "body",

      data: {}

    })
  })
})();
```

### Add a Vue component

```html
<!-- app/views/vue_templates/_alert.html -->
<script id="alert-template" type="text/template">
  <div class="alert" v-if="isDisplayed">
    <button class="alert__close" aria-label="Close" v-on:click="dismiss">
      <span aria-hidden="true">×</span>
    </button>
    <strong>Did You Know?</strong>
    This is a free shipping weekend!
  </div>
</script>
```

```erb
<%# in app/views/pages/home.html.erb %>

<vue-alert></vue-alert>

<%= render partial: "vue_templates/alert" %>
```

```javascript
//app/assets/javascripts/components/alert.js
;(function () {
  "use strict"

  Vue.component("vue-alert", {

    template: "#alert-template",

    data: function () {
      return {
        isDisplayed: true
      }
    },

    methods: {
      dismiss: function () {
        var self = this
        self.isDisplayed = false
      }
    }

  })

}());
```

