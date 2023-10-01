import Client from './Cliente.js';
import Company from './Company.js';


let clientList = [
    new Client("Diego","diego@email.com","1","calle1"),
    new Client("Thalia","thalia@email.com","2","calle2"),
    new Client("Jorge","jorge@email.com","3","calle3"),
    new Client("Dili","dili@email.com","4","calle1"),];

let _clients = [new Client(0,"","","")];
_clients = clientList;

let myCompany = new Company("NewCompany",clientList);

console.log(clientList.length);
console.log("clients list of myCompany");
myCompany.getClients().forEach(x=>console.log(x.getInformation()));

console.log("\nadd new client 1");
let newClient1 = new Client("Altro","diego@email.com","1234","calle5");
myCompany.addClient(newClient1);

console.log("\nadd new client 2");
let newClient2 = new Client("Altro","altro@email.com","3","calle5");
myCompany.addClient(newClient2);

console.log("\nadd new client 3");
let newClient3 = new Client("Altro","altro@email.com","5","calle2");
myCompany.addClient(newClient3);


console.log("");
console.log("clients list of myCompany");
myCompany.getClients().forEach(x=>console.log(x.getInformation()));

let firstSearch = myCompany.findClient("jorge@email.com");
if ( firstSearch!= undefined) {
    console.log(`\nfind client jorge@email.com is : ${firstSearch.getInformation()}`);
    
}
let secondSearch = myCompany.findClient("nada@email.com");
if ( secondSearch!= undefined) {
    console.log(`\nfind client nada@email.com is : ${secondSearch.getInformation()}`);
    
}
else
{
    console.log("nada@email.com not found");
}

console.log("\nfirst update");
myCompany.updateClient("jorge@email.com","calle1","jorgeNewEmail@email.com","6");
let otherSearch = myCompany.findClient("jorgeNewEmail@email.com");
if ( otherSearch != undefined) {
    console.log(`find client jorgeNewEmail@email.com is : ${otherSearch.getInformation()}`);
    
}

console.log("\nsecond update");
myCompany.updateClient("emailoNotFound@email.com","calle1","jorgeNewEmail@email.com","6");
let other1Search = myCompany.findClient("emailoNotFound@email.com");
if ( other1Search != undefined) {
    console.log(`find client emailoNotFound@email.com is : ${other1Search.getInformation()}`);
    
}

console.log("\nthird update");
myCompany.updateClient("dili@email.com","calle98","jorgeNewEmail@email.com","6");
let other2Search = myCompany.findClient("dili@email.com");
if ( other2Search != undefined) {
    console.log(`find client dili@email.com is : ${other2Search.getInformation()}`);
    
}

console.log("\nfisrt delete ")
myCompany.deleteClientByEmail("thalia@email.com");
myCompany.getClients().forEach(x=>x.getInformation());

console.log("clients list of myCompany");
myCompany.getClients().forEach(x=>console.log(x.getInformation()));

console.log("\nsecond delete ")
myCompany.deleteClientByEmail("thalia@email.com");
myCompany.getClients().forEach(x=>x.getInformation());

console.log("\ndelete all client ")
myCompany.deleteAllClients();
myCompany.getClients().forEach(x=>x.getInformation());










