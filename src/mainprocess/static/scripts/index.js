 'use strict';
// var username = "USER"
// var password = "Password"
// console.log(document.getElementsByName('username').values());
// // var password = document.getElementById('password');
// console.log(username + " is  isjj" + password);
// // var loginIsClicked = () => {
// //     document.getElementById('username').value = "";
// //     if (username === "USER" && password === "Password") {
// //         console.log("User is Authenticated")
// //         event.preventDefault();
// //     } else {
// //         alert("Please Enter Correct Identitty");
// //     }
// // }

// document.getElementById('btnLogin').onclick = () => {
//     event.preventDefault();
//     var username = document.getElementById('username');
//     var password = document.getElementById('password');
//     console.log(username + " is  isjj" + password);
//     if (username === "USER" && password === "Password") {
//         console.log("User is Authenticated")
//         event.preventDefault();
//     } else {
//         alert("Please Enter Correct Identitty");
//     }
// };
function clickEvent(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username + " is  isjj" + password);
    if (username === "USER" && password === "Password") {
        console.log("User is Authenticated");
    } else {
        alert("Please Enter Correct Identitty");
        //event.preventDefault();
    }
}

