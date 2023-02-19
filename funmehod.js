var str="sdafgdfbg0";

console.log(str);
//console.log(str.join());
//usind anoymous arra7
[1,2,3];
[];

//function borrowing using apply

var arr=[1,2,3,"dsf"];
console.log(arr.join()); 
console.log([].join.apply(str,["+"]));

//function borrowing using call method

console.log([].join.call(str,"--","++"))

//binding
// it has an adv make us send the parameter within calling

var result=[].join.bind(str,":");
console.log(result("{"))