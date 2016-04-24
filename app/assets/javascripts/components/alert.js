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
