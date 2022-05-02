import Vue from "vue";

export default () => {
  Vue.filter("toWords", function(string) {
      string = string.replace('_', ' ');
      string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
      string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
      return string.replace(/\b\w/g, l => l.toUpperCase());
  })

};