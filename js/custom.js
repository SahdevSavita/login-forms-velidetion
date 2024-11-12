// const from = document.getElementById('from');
// const  firstname_input = document.getElementById('firstname-input');
// const  email_input = document.getElementById('email-input');
// const  password_input = document.getElementById('password-inpu');
// const  re_password_input = document.getElementById('re-password-input');


// from.addEventListener('submit',(e) => {
//     let errors = [];
    
//     if(firstname_input){
//         errors = getSignupFromErrors(firstname_input.value,email_input.value,password_input.value,re_password_input.value)
//     }else{
//         errors = getLoginFromErrors(email_input.value, password_input.value);
//     }

//     if(errors.length > 0){
//         e.preventDefault();
//     }
// })
// function getSignupFromErrors(firstname,email,password,repeatpassword){

//     if(firstname === '' || firstname == null){
//         errors.push('firstName is required')
//     firstname_input.parentElement.classList.add('incorrect')
//     }

//     if(email === '' || email == null){
//         errors.push('email is required')
//     email_input.parentElement.classList.add('incorrect')
//     }
//     if(password === '' || password == null){
//         errors.push('firstName is required')
//     password_input.parentElement.classList.add('incorrect')
//     }
//   return errors;

// }