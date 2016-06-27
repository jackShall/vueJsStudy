/**
 * Created by jackShall on 2016/6/27.
 */
var MyComponent = Vue.extend({
    template:'<div>A custom component!</div>'
});
Vue.component('my-component',MyComponent);

new Vue({
   el:'#example'
});