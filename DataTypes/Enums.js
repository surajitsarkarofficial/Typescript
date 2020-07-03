var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
;
//This will print the index
console.log(Gender.Male);
console.log(Gender.Female);
//This will print the value
console.log(Gender[0]);
console.log(Gender[1]);
