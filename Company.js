import Client from './Cliente.js';


export default class Company
{
    constructor(name, clients)
    {
        let _name = name;
        
        let _clients = [new Client(0,"","","")];
        _clients = clients;
        
        this.getName = () => _name;
        this.getClients = () => _clients;

        this.setName = function(newName)
        {
            _name = newName;
        }
        this.setClients = function(newClients)
        {
            _clients = newClients;
        }
        
        this.addClient = function(newClient)
        { 
            if( _clients.find(x=>x.getEmail() === newClient.getEmail() || x.getPhone() === newClient.getPhone()) != undefined )
            {
                console.log("error 400: user email of user phone is existing ");
            }
            else
            {
                _clients.push(newClient);
            }
        }

       
        this.findClient = (clientEmail) => _clients.find(x=>x.getEmail() === clientEmail );

        this.updateClient = function(ClientEmail,NewAddress,NewEmail, newPhone)
        { 
            let updateClient = this.findClient(ClientEmail);
            
            if(updateClient  != undefined )
            {
                if (_clients.find(x=>x.getEmail() === NewEmail|| x.getPhone() === newPhone ) != undefined ){
                    
                    console.log("error 400: user email of user phone is existing ");
                }   
                else
                {
                    updateClient.setAddress(NewAddress); 
                    updateClient.setEmail(NewEmail); 
                    updateClient.setPhone(newPhone); 
                }
            }
            else
            {
                console.log("error 404: user email not found");
                
            }
        }

        
        this.deleteClientByEmail = function(clientEmail)
        {
            let deleteIndex = _clients.findIndex(x=>x.getEmail()===clientEmail);
            if(deleteIndex !== -1 )
            {
                _clients.splice(deleteIndex,1);
            }
            else
            {
                
                console.log("error 404: user email not found ");
            }
        }
        this.deleteAllClients = function()
        {
            _clients.splice(0, _clients.length);
        }

        
    }

}

