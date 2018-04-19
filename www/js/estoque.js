var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="listar_produtos"]', function (e) {
    firebase.database().ref('estoque').on('value', function (snapshot){
        //usersList.innerHTML = '';
        $$("#usersList").empty();
    
        snapshot.forEach(function(item){
              var listHtml = '<div class="row block block-strong">';
                //listHtml += '<td class="label-cell">'+item.key+'</td>';
                listHtml += '<div class="col-100 fonteestoquejs100">'+ item.val().Nome +'</div>';
                listHtml += '<div class="col-100 fonteestoquejs100"><img src="'+ item.val().photo +'" width="200" height="200"/></div>';
                listHtml += '<div class="col-100 fonteestoquejs25">'+ item.val().Fabricante +'</div>';
                listHtml += '<div class="col-100 fonteestoquejs25">'+ item.val().Preco +'</div>';
                listHtml += '<div class="col-100 fonteestoquejs25">'+ item.val().Descricao +'</div>';
                listHtml += '</div>';
                //e.append(listHtml).innerHTML;
                $$("#usersList").append(listHtml);
    
            
        })
    })
    
});
  
