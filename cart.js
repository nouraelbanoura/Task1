
var cart = {

    price:int,
    id:int,
    name:String,
    product:{id,name,price},

    totalPrice:int,
    count:int,
    items: [{product,count,totalPrice}],

    getItems: function(){
        return items;
    },

        hasProduct:function(product){
            i:int
        for(i=0;i<items.length;i++){
            if(product.id = items[i].product.id)
            return true
    }
            return false
    },
    addItem: function(product){

        if(hasProduct(product)== true){
            i:int
           for(i=0; i<items.length;i++){
               if(product.id=items.product.id){
                   count++
               }
           }
        }
        else
        i:int
        for (i=0;i<items.length;i++){
            if (i=items.length){
                i++;
                items[i]=product;
            }
        }

},

removeItem: function(product){
    if(hasProduct(product)==true){
        if(items.product.count!=0){
            count--;
        }
        else
        i:int
        for (i=0;i<items.length;i++){
            if(items[i].product==product){
        items.splice(i,1);
        // 3yza a3ml hina eno ashel el product khales

        }
    }
}

},
removeProduct: function(product){
    i:int
    for(i=0;i<items.length;i++)
    if(items[i].product==product){
        items.product.splice(i, 1);
    }
},
        getItem: function(product){
              for(i=0;i<items.length;i++){
                  if(items[i].hasProduct==true){
                       index:int
                       index=i
                       return index
                       return items[i]
                  }
                  else 
                  return null
                
              }
        },
        getTotal: function(){
            total:int
            total=items.length
            return total
        },
        clearCart: function(){
            for(i=0;i<items.length;i++){
                items[i].splice(0,0)
                
            }
        }
}

module.exports = cart;