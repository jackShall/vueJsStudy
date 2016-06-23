/**
 * Created by jackShall on 2016/6/23.
 */
new Vue({
   el:'#app',
    data:{
        message:'hello world vue.js'
    }
});
new Vue({
    el:'#fortest',
    data:{
        todos:[
            {text:'learn Javascript'},
            {text:'learn Vue.js'},
            {text:'learn Something Awesome'}
        ]
    }
});
new Vue({
    el:'#inputtest',
    data:{
        message:'hello Vue.js'
    },
    methods:{
        reverseMessage:function(){
            this.message =this.message.split('').reverse().join('');
        }
    }
});
new Vue({
    el:'#some',
    data:{
        newTodo:'',
        todos:[
            {text:'Add some todos'}
        ]
    },
    methods:{
        addTodo:function(){
            var text =this.newTodo.trim();
            if(text){
                this.todos.push({text:text});
                this.newTodo = '';
            }
        },
        removeTodo:function(index){
            this.todos.splice(index,1);
        }
    }
});
//这是我们的model
var exampleData = {
    name : 'Vue.js',
    pwd:'122314'
};
var exampleVM = new Vue({
    el:'#example-1',
    data:exampleData
}) ;
var exampleVM2 = new Vue({
    el:'#example-2',
    data:{
        greeting:true
    }
})