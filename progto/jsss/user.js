const url_cad = "https://bora-14220-default-rtdb.firebaseio.com/";
const id_usuario = localStorage.getItem("chave");


fetch(url_cad+'user/'+id_usuario+'.json')
.then(resposta => resposta.json())
.then(dados =>{
    usuarionome.innerHTML += dados.nome;
})

try{
  mapear_predios()
}catch(err){
 console.log('0mapas')
}

adiciona_predio.addEventListener('click', e=>{
  predio ={
    'nome':nome.value,
    'tipo':tipo.value,
    'descricao':descricao.value,
    'cep':cep.value
  }
  fetch(url_cad+'user/'+id_usuario+'/predio.json',{method:'POST',body:JSON.stringify(predio)})
  mapear_predios()
})

function mapear_predios(){
  mapas.innerHTML ="";
  fetch(url_cad+'user/'+id_usuario+'/predio.json')
  .then(resposta => resposta.json())
  .then(dados =>{
    for (const key in dados) {

      mapas.innerHTML += ` <div class="card" style="width: 18rem;">
                    <img src="${dados[key].foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${dados[key].nome}</h5>
                      <p class="card-text">${dados[key].descricao}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${dados[key].tipo}</li>
                      <li class="list-group-item">${dados[key].cep}</li>
                    </ul>
                    <div class="card-body">
                        <button type="button" class="btn btn-danger" onclick="deleta('${key}')">deletar</button>
                      <button type="button" class="btn btn-warning" onclick="muda('${key}')">alterar</button>
                    </div>
                  </div>`
    }

  })

}


function deleta(n) {
    fetch(url_cad+'user/'+id_usuario+'/predio/' + n + '.json', { method: "DELETE" })
    .then(resposta=>resposta.json())    
    .then(dados=>(
      mapear_predios()
        )
        )

}
