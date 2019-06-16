let moduleMarket = angular.module('parcialAngular');

moduleMarket.controller('marketController', function(){
    let vm = this;

    let defaults = ()=>{
        vm.getData();
        vm.flag();
    }

    vm.getData = ()=>{
        vm.data = JSON.parse(localStorage.getItem("catalogo"))||[]; 
    }

    vm.selectedProduct = (item)=>{
        vm.itemEnable = item;
        vm.default = vm.itemEnable.ifurl;
        vm.ifurl = vm.itemEnable.ifurl;
        vm.ilurl = vm.itemEnable.ilurl;

    } 

    vm.flag = ()=>{
        img="./img/promo.jpg";
        vm.default = img; 
        vm.ifurl = img;
        vm.ilurl = img;
    }


    vm.changeImg = (img)=>{
            vm.default = img; 
    }


    defaults();

});