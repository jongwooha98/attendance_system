/*
$("#checkAll").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
});
*/
document.addEventListener("DOMContentLoaded", function(){
    var checkbox = document.querySelectorAll("input[type='checkbox']");
    for(var item of checkbox){
        item.addEventListener("click", function(){
            localStorage.s_item ? // verifico se existe localStorage
                localStorage.s_item = localStorage.s_item.indexOf(this.id+",") == -1 // verifico de localStorage contém o id
                ? localStorage.s_item+this.id+"," // não existe. Adiciono a id no loaclStorage
                : localStorage.s_item.replace(this.id+",","") : // já existe, apago do localStorage
            localStorage.s_item = this.id+",";  // não existe. Crio com o id do checkbox
        });
    }
    if(localStorage.s_item){ // verifico se existe localStorage
        for(var item of checkbox){ // existe, percorro as checkbox
            item.checked = localStorage.s_item.indexOf(item.id+",") != -1 ? true : false; // marco true nas ids que existem no localStorage
        }
    }
});



