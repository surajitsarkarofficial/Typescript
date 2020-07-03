//Number - int , float, duoble
var rollNumber : number = 10;
console.log("Roll Number is "+rollNumber);

var percentage : number = 89.66;
console.log("Percentage is "+percentage);

//String
var fName : string = "Surajit";
console.log("First Name is "+fName);

var mName : string = 'Nc.';
console.log("Middle Name is "+mName);

var lName : string = `Sarkar`;
console.log("Last Name is "+ lName);

//boolean
var isIndian : boolean = true;
console.log("Is Nationality Indian ? - "+ isIndian);

var isSpecialQuota : boolean =false;
console.log("Is holding any Reservations ? - "+isSpecialQuota);


//any
var identityNumber : any = "IN12345";
console.log("Identity Number is "+identityNumber);

identityNumber = 345278;
console.log("Second Identity Number is "+identityNumber);

identityNumber=false;
console.log("Third Identity Number is "+identityNumber);

var address:any = {
    houseNo:1001,
    buildingName:"YA Orchid",
    locality:"Baner",
    city:"Pune",
    state:"MH",
    pincode:411045,
    country:"India"
}

console.log(address);

//Homogenous Array
//You can only add values of the specified type
//here its String
//If you try to add values other then String then it will give erro
var array1:Array<string> = ["Red","Yellow","Green"];
console.log(array1);


//Heterogeneous array
//You can add values of any type
var data:Array<any> = ["Apple",100,true];
console.log(data);







