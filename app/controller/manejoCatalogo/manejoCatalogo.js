let moduloCatalogo = angular.module('parcialAngular');

moduloCatalogo.controller('catalogoController', function(){
    let vm = this;

    let defaults = ()=>{
        loadItem();
        loadCatalogo();
    }

    let loadItem = ()=>{
        vm.item = {};
    }
    let loadCatalogo = ()=>{

        vm.catalogo = JSON.parse(localStorage.getItem("catalogo"))||[];

        if(!vm.cabezeraCatalogo){
            vm.cabezeraCatalogo = ['Marca', 'Modelo', 'Precio', 'Memoria RAM', 'Almacenamiento', 'Bateria', 'Display', 'OS'];
            localStorage.setItem('cabezeraCatalogo',JSON.stringify(vm.cabezeraCatalogo));
        }
    }

    vm.addItem = ()=>{

        if(vm.item.modelo){
            vm.catalogo.forEach(element => {if (element.modelo == vm.item.modelo) element = vm.item;});
        }else{
            vm.catalogo.push(vm.item);
        }
        saveCatalogo(vm.catalogo);
        vm.clean();
    }

    let saveCatalogo = (item)=>{
        localStorage.setItem('catalogo', JSON.stringify(item));
    }

    vm.clean = ()=>{
        vm.item = loadItem();
    }

    vm.edit = (item)=>{
        vm.item = item;
    }

    vm.delete = (index)=>{
        vm.catalogo.splice(index,1);
        saveCatalogo();
        vm.clean();
    }

    defaults();
});