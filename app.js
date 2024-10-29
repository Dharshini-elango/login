let form = document.getElementById('form').value;
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let user_err = document.getElementById('user_err');
/*function handlesubmit()
{
    if(user.value === '' || user.value == null )
        {
            user_err.innerHTML="Username is required"
        }
}*/
function handlesubmit()
{

                                                                                                                                                                   
    if(user === '' || user == null )
        {
            
            let user_error=document.getElementById('user_err')
            user_error.innerHTML = "Username is required";
            user_error.style.color="red"
           
        }
       
        if(pass === '' || pass == null  )
            {
                let pass_error=document.getElementById('pass_err')
                pass_error.innerHTML = "Password is required";
                pass_error.style.color="red"
                
            }
            if(user.length <=7)
                {
                    let user_error=document.getElementById('user_err')
                    user_error.innerHTML = "Username Invalid"; 
                }

}

// form.addEventListener("submit",(e)=>
//     {    e.preventDefault()
//         if(user.value === '' || user.value == null )
//             {
               
//                 user_error.innerHTML = "Username is required";
            

//             }

//     })