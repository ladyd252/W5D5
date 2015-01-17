Function.prototype.myBind = function(context){
  var fn = this;
  return function(){
    return fn.apply(context)
  }
}


function Cat(name){
  this.name = name;
}

var meow = function(){
  console.log(this.name + " says meow");
}

kitty = new Cat("kitty")

meow.myBind(kitty)()
