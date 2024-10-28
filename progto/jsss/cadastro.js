const url_cad = "https://meujsb-efd17-default-rtdb.firebaseio.com/";

const cargo ='user'

btn_cadastro.addEventListener('click',e=>{
    let usuario={
        'cargo':cargo,
        'nome':(nome.value).toUpperCase(),
        'cpf':cpf.value,
        'email':(email.value).toUpperCase(),
        'nick':(nick.value).toUpperCase(),
        'nome':nome.value,
        'nasci_data':nasci_dta.value,
        'senha':senha
    }


fetch(url_cad+'user')
.then(resposta =>resposta.json())
.then(dados =>{
    for (const key in dados) {
        if(dados[key].cpf == usuario.cpf){
           alertando(cpf_usado)
        }if(dados[key].nick == usuario.nick){
            alertando(NIck_usado)
        }if(dados[key].email == usuario.email){
            alertando(email_usado)
        }else{
            if(senha.value != senha_comfirma.value){
                alertando(senha_nãobate)
            }if(email.value != email_comfirma.value){
                alertando(email_nãobate)
            }else{
                fetch(url_cad+'user',{method:'POST',body:JSON.stringify(usuario)})
            }
        }

    }
})

})

function alertando(n){
    n.classlist.remove('esconde');
            setTimeout(()=>{
            n.classlist.add('esconde')
            },4000)
}