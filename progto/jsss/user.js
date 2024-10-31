const url_cad = "https://bora-14220-default-rtdb.firebaseio.com/";
const id_usuario = localStorage.getItem("chave");


fetch(url_cad+'user/'+id_usuario+'.json')
.then(resposta => resposta.json())
.then(dados =>{
    usuarionome.innerHTML += dados.nome;
    try{
         mapear_predios(dados.predios)
    }catch(err){
        console.log('0mapas')
    }
})


adiciona_predio.addEventListener('click', e=>{

})


function mapear_predios(n){
    n.forEach(e => {
        mapas.innerHTML += ` <div class="card" style="width: 18rem;">
                    <img src="${dados[predios].foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${dados[predios].nome}</h5>
                      <p class="card-text">${dados[predios].descricao}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${dados[predios].tipo}</li>
                      <li class="list-group-item">${dados[predios].cep}</li>
                    </ul>
                    <div class="card-body">
                        <button type="button" class="btn btn-danger" onclick="deleta('${predios}')">deletar</button>
                      <button type="button" class="btn btn-warning" onclick="muda('${predios}')">alterar</button>
                    </div>
                  </div>`
    });
}