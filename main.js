import Cliente from './Cliente.js';



let list = [new Cliente(1,"diego","1","1"),
    new Cliente(2,"diego2","2","2"),
    new Cliente(3,"diego3","3","3")];

console.log(list);

let test = list.find(x => x._id ===1 );
console.log(test);
if(test != undefined)
{
    test.setEmail("testEmail");
    console.log("test");
    console.log(list);

}




