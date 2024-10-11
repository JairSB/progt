const url_cad = "https://meujsb-efd17-default-rtdb.firebaseio.com/";

let cargo= 'user'

btn_cadastro.addEventListener('click',e=>{
    

    let user={
        
        'cargo': cargo,
        'senha':senha.value,
        'nick':nick.value
    }
    fetch(url_cad+'user.json',{
        method: 'POST',
        body: JSON.stringify(user)
    })
        
})
