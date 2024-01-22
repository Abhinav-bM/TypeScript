// infer types (implicit types])
let college:string  = 'm-DIT'


// // defining types (explicit types)
let myName  = 'abhinav' 
let subscriber:number = 2000;
let isSubscribed:boolean = true
let skills:string[] = ['js','css','ts']
let numberArr:number[] = [1,2,3,4,5]
let emptyArray:[] = []


let usersDetails:{ name : string; age : number } = {
    name:"abhinav",
    age:22
}


// interface 
// interface Details {
//     name : string;
//     age : number;
//     salary : number;
//     getName: ()=>void;
// }
 
// let workerDetails : Details = {
//     name : 'rahul',
//     age : 22,
//     salary : 20000,
//     getName(){
//         console.log(this.name)
//     }
// }  

// type
type Details {
    name : string;
    age : number;
    salary : number;
    getName: ()=>void;
}
 
let workerDetails : Details = {
    name : 'rahul',
    age : 22,
    salary : 20000,
    getName(){
        console.log(this.name)
    }
}

function getUserName (workerDetails:Details){     // workerDetails:Details , it will give all the suggestion that inside the object if we done like this
    return workerDetails.age     
}



