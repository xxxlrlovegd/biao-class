### vue watch监听对象及对应值的变化  2021-01-11
### 监听实例
var vm=new Vue({
    data:{
        x:1,
        info:{
            name:"gmx",
            age:18,
            sex:1
        }
    },
    watch:{
        x(val, oldVal){//普通的watch监听
            console.log("x: "+val, oldVal);
        },
        info:{//深度监听，可监听到对象、数组的变化
            handler(val, oldVal){
                console.log("info.name: "+val.name, oldVal.name);//但是这两个值打印出来却都是一样的
            },
            deep:true
        }
    }
})
vm.x=2
vm.info.name='gmx'

### 普通的变量不需要deep深度监听，当对复杂的对象监听的时候进行深度监听的时候新值和旧值监听到的数值是一样的 我们可以用以下两种方式进行监听:

## 1
watch: {
     'info.name': {
         handler: function() {
            //do something
         },
     }
}

## 2 推荐 可以对比新旧值的变化
computed: {
    //getName只是随便取个名字作为这次计算的名字
    getName() {
    	return this.info.name  //这次计算的属性是哪个属性
    }
}
watch: {
     //观察getName这次计算有啥变化
     getName(val, oldVal) {
        
            //do something
        
     }
}


