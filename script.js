
let UserName = document.getElementById("userName");
let Password = document.getElementById("password");
let tampilkanUsername = document.getElementById("tampilkanUsername");
let tampilkanPassword = document.getElementById("tampilkanPassword");
let buttonSubmit = document.getElementById("buttonSubmit");


hasilName = [];
hasilPass = [];

buttonSubmit.addEventListener("click", submit);


function submit() { 
        if (UserName.value.length < 6 || Password.value.length < 8) {
                console.log(hasilName);
                console.log(hasilPass);
        }else {
                hasilName.push(UserName.value);
                hasilPass.push(Password.value); 
                
        
        console.log(hasilName);
        console.log(hasilPass);

        tampilkanUsername.innerText = hasilName;
        tampilkanPassword.innerText = hasilPass;
     
        return false
        }

};

// function show() {
//       let usernameInput = '';
//       let usernamePassword = '';  
//         for(let i = 0;i < hasilName.length;i++) {
//                 username += hasilName[i];
//         }
//                 for(let i=0;i<hasilPass.length;i++) {
//                         password += hasilPass[i];
//                 }
//         document.getElementById("tampilkanUsername").innerHTML = usernameInput;
//         document.getElementById("tampilkanPassword").innerHTML = usernamePassword;
                
        // console.log('username');
        // console.log('password');
        // let user = `<p>${username}</p>
        // <p>${password}</p>`
        // listUser.innerHTML += user
        
        
// }



