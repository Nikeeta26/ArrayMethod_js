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