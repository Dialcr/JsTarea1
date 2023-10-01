export default class Client
{
    constructor(name, email, phone,address)
    {
         let _name = name;
         let _email = email;
         let _phone = phone;
         let _address = address;

          this.getAddress = () => _address;
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
          this.setAddress = function(address)
          {
               _address = address;
          }

          this.getInformation = () => `${_name} ${_email} ${_phone} ${_address}`;
          
    }


}

