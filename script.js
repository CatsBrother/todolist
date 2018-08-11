var todo = new Vue({
    el:'#todolist',
    data:{
        item:0,
        lists:[],
        content:'',
        type:0,
    },
    methods:{
        submit:function(){
            this.lists.push({
                con:this.content,
                over:false
            });
            this.item = this.getItem();
            this.content = '';
        },
        delate:function(index){
            this.lists.splice(index,1);
            this.item = this.getItem();
        },
        finish:function(index){
            this.lists[index].over = !this.lists[index].over;
            this.item = this.getItem();
        },
        all:function(){
            let overarr=[];
            for(let i=0;i<this.lists.length;i++){
                overarr.push(this.lists[i].over)
            }
            if(overarr.indexOf(true) >= 0 && overarr.indexOf(false) >= 0){
                for(let i=0; i<this.lists.length; i++){
                    this.lists[i].over = true;
                }
            }else if(overarr.indexOf(true) < 0){
                for(let i=0; i<this.lists.length; i++){
                    this.lists[i].over = true;
                }
            }else if(overarr.indexOf(false) < 0){
                for(let i=0; i<this.lists.length; i++){
                    this.lists[i].over = false;
                }
            }
            this.item = this.getItem();
        },
        clear:function(){
            for(let i = 0; i<this.lists.length; i++){
                if(this.lists[i].over === true){
                    this.lists.splice(i,1);
                    i--;
                }
            }
            this.item = this.getItem();
        },
        // 获取item值
        getItem:function(){
            var num = 0;
            for(let i=0; i<this.lists.length; i++){
                if(this.lists[i].over === false){
                    num++;
                }
            }
            return num;
        },
        showall(){
            this.type = 0;
        },
        showactive:function(){
            this.type = 1;
        },
        showcompleted:function(){
            this.type = 2;
        },
    },
    computed:{
        comp:function(){
            if(this.type === 0){
                return this.lists;
            }else if(this.type === 1){
                return this.lists.filter(function(list){
                    return list.over ? false : true;
                  })
            }else if(this.type === 2){
                return this.lists.filter(function(list){
                    return list.over ? true : false;
                  })
            }
        }
    }
})
