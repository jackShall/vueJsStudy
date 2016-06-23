/**
 * Created by jackShall on 2016/6/23.
 */
var data = { a :1};
var vm = new Vue({
    el:'#test1',
    data:data,
    created:function(){
        console.log('a is;'+this.a);
    }
});
console.log(vm);
vm.a === data.a;
vm.a = 2;
console.log(data.a);
data.a = 3;
console.log(vm.a);

var data1 = {a :1};
var vm1  = new Vue({
    el:'#example',
    data:data1
});
vm1.$watch('a',function(newVal,oldVal){
    console.log(newVal);
    console.log(oldVal);
});
new Vue({
   el:'#example-1',
   data:{
       htmlVal:'\<h1\>'+'ceshi'+'\<\/h1\>'
   }
});
var vm2 = new Vue({
    el:'#example-2',
    data:{
        a:1,
        greeting:true,
        url:'http://www.baidu.com',
        items:[
            {id:1,text:'java'},
            {id:2,text:'c'},
            {id:3,text:'c++'},
            {id:4,text:'php'}
        ]
    },
    computed:{
      b:function(){
          return this.a+1;
      }
    },
    methods:{
        test:function(index){
            console.log(this.items[index]);
        },
        doSomething:function(){
            console.log("我好像需要做点什么")
        },
        otherThing:function(){
            console.log("点击的简写方式");
        }
    }
});
vm2.test(2);

var vm3 = new Vue({
   el:'#example-3',
    data:{
        firstName:'Foo',
        lastName:'Bar',
        fullName:'Foo Bar'
    },
    computed:{
        fullName:function(){
            return this.firstName + ' '+this.lastName;
        }
    }
});
vm3.$watch('firstName',function(val){
    this.fullName = val +" "+this.lastName;
});
vm3.$watch('lastName',function(val){
    this.fullName = this.firstName + " "+val;
});

var vm4 = new Vue({
   el:'#example-4',
    data:{
        firstName:'foo,',
        lastName:'bar',
        fullName:'foo bar'
    },
    computed:{
        fullName:{
            get:function(){
                return this.firstName + " " +this.lastName;
            },
            set:function(newValue){
                console.log(newValue);
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length -1];
            }
        }
    }
});
vm4.fullName =  'john doe ooo';

var vm5 = new Vue({
   el:'#example-5',
    data:{
       isA:true,
        isB:true,
        classObject: {
            'class-a': true,
            'class-b': false
        },
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
});