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

        vm.catalogo = JSON.parse(localStorage.getItem('catalogo'))||[];

        if(!vm.cabezeraCatalogo){
            vm.cabezeraCatalogo = ['Marca', 'Modelo', 'Precio', 'Memoria RAM', 'Almacenamiento', 'Bateria', 'Display', 'OS'];
            localStorage.setItem('cabezeraCatalogo',JSON.stringify(vm.cabezeraCatalogo));
        }
    }

    vm.addItem = ()=>{
        vm.catalogo.push(vm.item);
        saveCatalogo(vm.catalogo);
        vm.clean();
        console.log(vm.catalogo);
    }

    let saveCatalogo = (item)=>{
        localStorage.setItem('catalogo', JSON.stringify(item));
    }

    vm.clean = ()=>{
        vm.item = loadItem();
    }

    defaults();
});