/** Writing functions : this **/
console.log ("\n");
console.log("Writing functions : this");

var greet = function (name) {
    //1
    //console.log ("hello " + name);

    //2
    console.log (this.toUpperCase() + ' ' + name);

}

//1 + 2.1
//greet('Joe');

//2.2
greet.call('hello', 'Joe');
greet.call('howdy', 'Jane');

/** Writing functions : arguments **/
console.log ("\n");
console.log ("Writing functions : arguments");

/*
var max = function (a, b) {
    if (a>b)
        return a;
    return b;
}
console.log(max(1,2));
console.log(max(3,1));
console.log(max(1,2,7));
 */

/*
var max = function(a,b) {
    console.log(arguments);
}

max(2,7,4,6);
*/


var max = function(){
    var large = arguments[0];

    for(var i = 0; i < arguments.length; i++) {
        if (large < arguments[i])
            large = arguments[i];
    }
    return large;
}

console.log(max(1,2));
console.log(max(3,1));
console.log(max(1,3,7));



