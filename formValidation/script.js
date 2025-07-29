const email = document.querySelector('#Email')
const mailSpan = document.querySelector('#mailerror')

const country = document.querySelector('#country')
const countrySpan = document.querySelector('#countryerror')

const postalCode = document.querySelector('#postalcode')
const postalSpan = document.querySelector('#postalcodeerror')

const password = document.querySelector('#password')
const passwordSpan = document.querySelector('#passworderror')

const passwordC = document.querySelector('#passwordconformation')
const passwordCSpan = document.querySelector('#passwordconformationerror')

const btn = document.querySelector('button')

email.addEventListener('input',(e)=>{
    mailSpan.style.display = 'block'
   if(email.validity.valid){
    mailSpan.textContent = ''
   }else if(email.validity.valueMissing){
    mailSpan.textContent = `Fill Email`
  }else if (email.validity.patternMismatch){
    mailSpan.textContent = `Write in correct way`
  }
else if(email.validity.typeMismatch){
    mailSpan.textContent = `Not as Expeceted Should be like this "example@gmail.com`
} 
          
})

country.addEventListener('input',(e)=>{
    countrySpan.style.display = 'block'
   if(country.validity.valid){
    countrySpan.textContent = ''
   } else if(country.validity.valueMissing){
    countrySpan.textContent = `Fill Country Name`
  }else if (country.validity.patternMismatch){
    countrySpan.textContent = `Write in this way India`
  }
else if(country.validity.typeMismatch){
    countrySpan.textContent = `Not as Expeceted Should be like this`
}
})


postalCode.addEventListener('input',(e)=>{
    postalSpan.style.display = 'block'
    if(postalCode.validity.valid){
     postalSpan.textContent = ''
    } else if(postalCode.validity.valueMissing){
     postalSpan.textContent = `Password `
   }else if (postalCode.validity.patternMismatch){
     postalSpan.textContent = `Write in this way 400102`
   }
 else if(postalCode.validity.typeMismatch){
     postalSpan.textContent = `Not as Expeceted Should be like this`
 }
 })

     
 password.addEventListener('input',(e)=>{
    passwordSpan.style.display = 'block'
    if(password.validity.valid){
     passwordSpan.textContent = ''
    } else if(password.validity.valueMissing){
     passwordSpan.textContent = `Fill Passoword `
   }else if (password.validity.patternMismatch){
     passwordSpan.textContent = `Should be 8-16 characters long with number`
   }
 
 }
 )





passwordC.addEventListener('input',(e)=>{
    passwordCSpan.style.display = 'block';
if(passwordC.validity.valid){
    passwordCSpan.textContent = ""
}else if(passwordC.validity.valueMissing){
    passwordCSpan.textContent = "Confirm Password"
}else if(password.value !== passwordC.value){
    passwordCSpan.textContent = "The password doesnt match "
}
})

btn.addEventListener('click',(e) =>{
    e.preventDefault();
    if(password.value !== passwordC.value){
        passwordC.value = ""
        passwordCSpan.textContent = "The password doesnt match "
    }else if (email.value && country.value && postalCode.value && password.value && passwordC.value){
        alert("Form Submitted")
        
    }
})