import React from 'react'

// function User(props) {
//   return (
//     <div>User details
//         <h1>{props.myName}</h1>
//         <h1>{props.myAge}</h1>
//         <h1>{props.myPhone}</h1>
//         <h1>{props.myEmail}</h1>
//     </div>
//   )
// }

// function User({myName, myAge, myPhone, myEmail}) {
//     return (
//         <div> User data
//             <h1>{myName}</h1>
//             <h1>{myAge}</h1>
//             <h1>{myPhone}</h1>
//             <h1>{myEmail}</h1>  
//         </div>
//     )
// }

function User({name, age, phoneNumber, email, gender}) {
    return (
        <div> User data
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{phoneNumber}</h1>
            <h1>{email}</h1>
            <h1>{gender}</h1> 
        </div>
    )
}

export default User