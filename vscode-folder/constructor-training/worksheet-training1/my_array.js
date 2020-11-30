function MyArray(){

    let innerArray = [];
    this.length = 0;

    this.push = function(val){
        innerArray.push(val);
        this.length = innerArray.length;
    }


    this.pop = function() {
        var val = innerArray.pop();
        this.length = innerArray.length;
        return val;
    }
}


var arr = new MyArray();
arr.push("Sumaiya");
console.log(arr.length);
arr.push("Jasmin");