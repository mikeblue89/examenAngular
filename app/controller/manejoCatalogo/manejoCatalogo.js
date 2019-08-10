let moduloCatalogo = angular.module('parcialAngular');

moduloCatalogo.controller('catalogoController', function(){
    let vm = this;

    let defaults = ()=>{
        vm.loadItem();
        loadCatalogo();
    }

    vm.loadItem = ()=>{
        vm.item = {};
    }
    let loadCatalogo = ()=>{

        vm.catalogo = JSON.parse(localStorage.getItem("catalogo"))||[];
        console.log(vm.catalogo);

        if(!vm.cabezeraCatalogo){
            vm.cabezeraCatalogo = ['Marca', 'Modelo', 'Precio', 'Memoria RAM', 'Almacenamiento', 'Bateria', 'Display', 'OS'];
            localStorage.setItem('cabezeraCatalogo',JSON.stringify(vm.cabezeraCatalogo));
        }
    }

    vm.addItem = ()=>{
        let exists = searchPhoneByModel();
        if(exists){
            vm.catalogo.forEach(element => {if (element.modelo == vm.item.modelo) element = vm.item;});
        }else{
            vm.catalogo.push(vm.item);
        }
        saveCatalogo();
        vm.loadItem();
    }

    let searchPhoneByModel = () => {
        vm.catalogo.filter(element => element.modelo == vm.item.modelo ).length > 0;
    }

    let saveCatalogo = ()=>{
        localStorage.setItem('catalogo', JSON.stringify(vm.catalogo));
    }

    vm.edit = (item)=>{
        vm.item = item;
    }

    vm.delete = (index)=>{
        vm.catalogo.splice(index,1);
        saveCatalogo();
        vm.loadItem();
    }

    defaults();
});