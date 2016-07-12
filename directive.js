/**
 * Created by jackShall on 2016/6/27.
 */
var MyComponent = Vue.extend({
    template:'<div>A custom component!</div>'
});
Vue.component('my-component',MyComponent);
Vue.component('child', {
    // camelCase in JavaScript
    props: ['myMessage'],
    template: '<input v-model="myMessage">'
});
new Vue({
   el:'#example',
    data:{
        hello:''
    }
});
// 注册子组件
// 将当前消息派发出去
Vue.component('child', {
    template: '#child-template',
    data: function () {
        return { msg: 'hello' }
    },
    methods: {
        notify: function () {
            if (this.msg.trim()) {
                this.$dispatch('child-msg', this.msg);
                this.msg = '';
            }
        }
    }
});

Vue.directive('demo', {
    bind: function () {
        console.log('demo bound!')
    },
    update: function (value) {
        this.el.innerHTML =
            'name - '       + this.name + '<br>' +
            'expression - ' + this.expression + '<br>' +
            'argument - '   + this.arg + '<br>' +
            'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
            'value - '      + value
    }
});
var demo = new Vue({
    el: '#demo',
    data: {
        msg: 'hello!'
    }
});
// 初始化父组件
// 将收到消息时将事件推入一个数组
var parent = new Vue({
    el: '#events-example',
    data: {
        messages: []
    },
    // 在创建实例时 `events` 选项简单地调用 `$on`
    events: {
        'child-msg': function (msg) {
            // 事件回调内的 `this` 自动绑定到注册它的实例上
            this.messages.push(msg)
        }
    }
});