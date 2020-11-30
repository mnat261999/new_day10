angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

.controller('mainController', function(){
    var vm = this;

    vm.bigMessage = 'Lop CNPM Moi: Lam viec voi Angular trong file public/js/app.js';
})

.controller('homeController', function(){
    var vm = this;

    vm.bigMessage = ' HOME PAGE ';

    vm.message = 'HOME PAGE';
})

.controller('aboutController', function(){
    var vm = this;

    vm.bigMessage = ' ABOUT PAGE '; 

    vm.message = 'ABOUT PAGE';
})

.controller('contactController', function(){
    var vm = this;

    vm.bigMessage = ' CONTACT PAGE '; 
    
    vm.message = 'CONTACT PAGE';
})
