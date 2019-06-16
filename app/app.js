(()=>{
    'use strict';

    let mainModule = angular.module('parcialAngular', ['ui.router']);

    let mainModuleConfig = ($stateProvider, $locationProvider, $urlRouterProvider) => {
        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/app/manejoCatalogo');

        let states = [
            {
                name: 'app',
                options: {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'app/app.html',
                    controller: 'appController',
                    controllerAs: 'vm'
                }
            },
            {
                name: 'app.catalogo',
                options: {
                    title: 'Catalogo',
                    url: '/manejoCatalogo',
                    templateUrl: 'app/controller/manejoCatalogo/manejoCatalogo.html',
                    controller: 'catalogoController',
                    controllerAs: 'vm'
                }
            },
            {
                name: 'app.market',
                options: {
                    title: 'Market',
                    url: '/market',
                    templateUrl: 'app/controller/market/market.html',
                    controller: 'marketController',
                    controllerAs: 'vm'
                }
            },
            {
                name: 'app.cart',
                options: {
                    title: 'Cart',
                    url: '/cart',
                    templateUrl: 'app/controller/cart/cart.html',
                    controller: 'cart',
                    controllerAs: 'vm'
                }
            }
        ];

        states.forEach(state => {$stateProvider.state(state.name, state.options)});
    };

    mainModule.config(mainModuleConfig);
    mainModuleConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

    mainModule.controller("appController", function($state){
        let vm = this;

        vm.isNavCollapsed = true;
        vm.isCollapsed = false;
        vm.isCollapsedHorizontal = false;

        vm.navbarItems = $state.get();
    });

})();