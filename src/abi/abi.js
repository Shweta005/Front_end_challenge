 export const contactAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_contract",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "Uname",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "Uemail",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "Umsg",
        "type": "string"
      }
    ],
    "name": "Data",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "user",
    "outputs": [
      {
        "internalType": "address",
        "name": "add",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "Name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Message",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "userCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "internalType": "address",
        "name": "add",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "Name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "Message",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_msg",
        "type": "string"
      }
    ],
    "name": "setData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getData",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "add",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "Name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "Message",
            "type": "string"
          }
        ],
        "internalType": "struct Contact.User[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
// [
// 	{
// 		"inputs": [],
// 		"name": "data",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_data",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "setData",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ]







