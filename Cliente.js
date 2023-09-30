export default class Cliente
{
    constructor(name, email, phone, id)
    {
          this._id = id;
           let _name = name;
           let _email = email;
           let _phone = phone;

           this.getId = () => _id;
           this.getName = () => _name;
           this.getEmail = () => _email;
           this.getPhone = () => _phone;

           this.setEmail = function(newEmail)
           {
                _email = newEmail;
           }
           this.setPhone = function(newPhone)
           {
                _phone = newPhone;
           }
           
    }


}

