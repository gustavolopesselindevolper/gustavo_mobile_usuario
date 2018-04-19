var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_orcamentos"]', function (e) {
    firebase.database().ref('orcamentos').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row block block-strong">';
                listHtml += '<div class="label-cell col-100 fonteestoquejs100">'+item.key+'</div>';
                listHtml += '<div class="col-33 fonteestoquejs100">'+ item.val().Nome +'</div>';
                listHtml += '<div class="col-33 fonteestoquejs100">'+ item.val().Email +'</div>';
                listHtml += '<div class="col-33 fonteestoquejs100">'+ item.val().Telefone +'</div>';
                listHtml += '<div class="col-100 fonteestoquejs100">'+ item.val().Mensagem +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
            
        })
    })
    
});

function apaga(){
    
        var apagar = document.getElementById('exclui').value;
    
        apagadb(apagar);
    }
    
    function apagadb(apag){
    
        return firebase.database().ref().child('orcamentos').child(apag).remove();
    }
      