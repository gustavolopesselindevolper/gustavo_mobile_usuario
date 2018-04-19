var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_produtosadm"]', function (e) {
    firebase.database().ref('estoque').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
        
    
        snapshot.forEach(function(item){
                var listHtml = '<div class="row block block-strong">';
                listHtml += '<div class="label-cell col-100 fonteestoquejs100">'+item.key+'</div>';
                //listHtml += '<div class="col-20 fonteestoquejs">'+ item.val().Id +'</div>';
                listHtml += '<div class="col-33 fonteestoquejs100">'+ item.val().Nome +'</div>';
                listHtml += '<div class="col-33 fonteestoquejs100">'+ item.val().Fabricante +'</div>';
                listHtml += '<div class="col-33 fonteestoquejs100">'+ item.val().Preco +'</div>';
                listHtml += '<div class="col-100 fonteestoquejs100">'+ item.val().Descricao +'</div>';
                listHtml += '<div class="col-100"><img src="'+ item.val().photo +'" width="300" height="300"/></div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);  
    
            
        })
    })
    
});


function apagarrr(){
    
        var apagarrr = document.getElementById('excluirrr').value;
    
        apagardb(apagarrr);
    }
    
    function apagardb(apaga){
    
        return firebase.database().ref().child('estoque').child(apaga).remove();

        
        
    }
  