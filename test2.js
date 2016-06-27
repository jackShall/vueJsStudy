/**
 * Created by jackShall on 2016/6/23.
 */
var vm = new Vue({
    el: '#example',
    data: {
        ok: false
    },
    methods: {
        trun: function () {
            this.ok = !this.ok;
        }
    }
});
var vm1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            {id: 1, text: 'java'},
            {id: 2, text: 'c'},
            {id: 3, text: 'c++'},
            {id: 4, text: 'php'}
        ],
        object: {
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        }
    },
    methods: {
        setArr: function (index) {
            //this.items.$set(index,{text:'这里是修改过的值'});//true
            //this.items[index].text='这里是修改过的值';  //true
            //this.items[index]= {};                      //fasle
            //this.items.$set(index,{});                  //true

            //这个方法参数是数组中的一个元素，并非索引
            this.items.$remove(this.items[index]);
            //var temp = this.items.indexOf(index);
            //if (temp !== -1) {
            //    this.items.splice(temp, 1)
            //}
        },
        print: function () {
            console.log(this.items.toString());
        }
    }
});
//vm1.items[0] = {}; //true
vm1.items.$remove(0);

var vm2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function (e) {
            alert('hello' + this.name + "!");
            alert(e.target.tagName);
        },
        stop: function () {
            alert('阻止冒泡事件');
        },
        noSubmit: function () {
            console.log("表单提交");
        }
    }
});
var vm3 = new Vue({
    el: '#example-3',
    data: {
        checkedNames: [],
        selected:'john',
        options:[{text:'java',value:'java'},{text:'c++',value:'c++'},{text:'c#',value:'c#'},{text:'php',value:'php'}],
        selectedNew:'php',
        msg:'',
        msgs:'',
        age:'1222',
        show:false
    }
});
vm3.$watch('msg',function(val){
    console.log("msg:  "+val);
})
vm3.$watch('msgs',function(val){
    console.log("msgs:  "+val);
})