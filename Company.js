import Cliente from './Cliente.js';


class Company
{
    constructor(name, clients)
    {
        function flitrerClients() {
            
        }
        let _name = name;
        
        let _clients = [new Cliente(0,"","","")];
        _clients = clients;
        
        this.getName = () => _name;
        this.getClients = () => _clients;

        this.setName = function(newName)
        {
            _name = newName;
        }
        this.setClients = function(newClients)
        {
            _clients = clients;
        }
        
        this.addClient = function(newClient)
        { 
            if( _clients.find(x=>x.getEmail === newClient.getEmail || x.getPhone === newClient.getPhone) != undefined )
            {
                console.log("error 400: user email of user phone is existing ");
            }
            else
            {
                _clients.push(newClient);
            }
        }

       
        this.findClient = (clientEmail) => _clients.find(x=>x.getEmail === clientEmail );
        //TODO
        this.updateClient = function(ClientId,NewEntEmail, newPhone)
        { 
            let updateClient = _clients.find(x=>x.getId === ClientId);
            
            if(updateClient  != undefined )
            {
                if (condition) {
                    
                }   
            }
            else
            {
                console.log("error 404: user id not found");
            }
        }

        this.deleteAllClients = function()
        {
            _clients.splice(0, _clients.length);
        }

        
    }

}

