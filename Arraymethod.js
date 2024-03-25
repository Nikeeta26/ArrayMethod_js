/*********** foreach method in in ******************/
let a=[1,2,3,4];

function print(a)//using normal function
{
    console.log(a);
};
a.forEach(print);
  

a.forEach((a)=>//using arrow function
{
    console.log(a);
   
})


/************array of object using forEach********************** */

let arr=[
    {
        name:"nik",
        marks:799
    },
    {
        name:"sik",
        marks:700
    },
    {
        name:"mik",
        marks:767
    }
];
arr.forEach((arr)=>{
    console.log(arr.marks);
})

/***********by using normal function ***********/
arr.forEach(function(student){
    console.log(student.marks);
})



/***********************map method**************** */

let num=[1,3,4,5,6];
let double=num.map(function(el)/*normal function****/
{
    console.log(el*2);
    console.log(el*el);
    return el*2;
   
});
console.log(double);

/****by using arrow function******* */
let arrow=num.map((el)=>{
       console.log(el*2);
       return(el*2);
});
console.log(arrow);


let student=[
    {
        name:"nik",
        marks:799
    },
    {
        name:"sik",
        marks:700
    },
    {
        name:"mik",
        marks:767
    }
];
let gpa = student.map((el)=>{
    return el.marks/10;
});
console.log(gpa);

/************filter method**************/
let nums = [2,3,4,5,6,7];
let even = nums.filter((el)=>{      //****arrow function********* */
    if(el%2==0)
    return el;
});
console.log(even);

/*******normal function************ */
let odd = nums.filter(function(el){
    if(el%2!=0)
    return el;
});
console.log(odd);

/**************pass function name to filter method*******/
let n=[2,3,4,5,7,8];

 let p=n.filter(print);

 function print(n)
 {
            if(n%2==0)
            {
                console.log(n);
           
             }
 }

 /***************Every method*************/
 let b=[2,4,6];
console.log(b.every(el=>el%2==0));


/****************some method************/
let c=[7,9,,5,3,1];
console.log(c.some((el)=>(el%2==0)));

/****************Reduce method**************/
let r=[5,6,7,8,9];
let R=r.reduce((pre,cur)=>{
    return (pre+cur)/a.length;
})
console.log(R);

/**********print max no from array*************/
let number=[1,3,4,5,2];
let max=number.reduce((rew,cur)=>
{
   if(rew>cur)
   {
 
 return cur;
   }
   else{
    return rew;
   }
});
console.log(max);

/**************check if all no in our array are multiple of 10 or not**********/
let Arr=[8,5,4,3,79,2,1];
let N=Arr.every((el)=>{
    (el%10==0)
  
});
console.log(N);

/******find min no in array********** */
let m=[6,4,3,2];
let M=m.reduce((min,el)=>{
  if(min<el)
  {
    return min;
  }
  else{
    return el;
  }
});
console.log(M);


/**Qs1.Square and sum the array elements using  the arrowfunction and then find  theaverage ofthe array */
let a=[3,5,6,8,9];
let square=a.map((el)=>{
    //console.log(el*el);
   return el*el;
});
console.log(square);
let sum=square.reduce((pre,cur)=>{
    //console.log((pre+cur)/a.length);
 return (pre+cur)/a.length;
});
console.log(sum);

/**Qs2.Create a new array using the map function whose each element isequal to the original element plus 5 */
let arr=[1,2,3,4,5,6,7,8,9];
let map=arr.map((el)=>{
    return el+5;
});
console.log(map);

/**Qs3.Create a new array whose elements are in uppercase of words present in the original array */
let Arr=['niik',"hghjf","hdkdjg","jfdf","ebfejh"];

let Upper=Arr.filter((el)=>{
  console.log( el.toUpperCase());
});


/**Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.
 */
let  doubleAndReturnArgs=(arr,...args)=>[
     ...arr,
     ...args.map((v)=>v*2)
];
console.log(doubleAndReturnArgs([2,4,5,6],8,9));
console.log(doubleAndReturnArgs([1,3,7,6],0,9));

/**Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object. */
let obj1={
    n:"nik",
    a:21,
    c:"tybc",
    s:"math"
};

let obj2={
    name:"shiv",
    age:23,
    class:"mcs",
    subject:"math"
};

let mergeObjects={...obj1,...obj2};
console.log(mergeObjects);
/************* or *************** */
let mergeObject=(obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObject({
    n:"nik",
    a:21,
    c:"tybcs",
    s:"math"
},{
    name:"shiv",
    age:23,
    class:"mcs",
    subject:"math"
}));