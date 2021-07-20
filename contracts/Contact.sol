pragma solidity 0.8.0;


   contract Contact {
       struct User{
           address add;
           string Name;
           string Email;
           string Message;
       }
    
    uint256 public userCounter;
    mapping(address=>User) public users;
    User[] public user;

    
    event Data(address _contract,address _user,string Uname,string  Uemail,string  Umsg);
      
      function setData(string memory _name,string memory _email,string memory _msg) public {
          userCounter++;
          User memory u = users[msg.sender];
          u.add = msg.sender;
          u.Name = _name;
          u.Email = _email;
          u.Message =_msg;
          user.push(u);
          emit Data(address(this),msg.sender,_name,_email,_msg);
          users[msg.sender] = u;
          
      }
      function getData() public view returns(User[] memory){
          return user;
      }
   }