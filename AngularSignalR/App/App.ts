﻿/// <reference path="../scripts/typings/angular-ui/angular-ui-router.d.ts" />

module AngularSignalRApp {
    export class AngularSignalR {
        static module = angular.module('angularSignalR', ['ngResource', 'ui.bootstrap', 'ui.router', 'toaster', 'angular-loading-bar']);
    }

    AngularSignalR.module.config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $urlRouterProvider.otherwise("/orders");

        $stateProvider
            .state('Orders', {
                url: '/orders',
                templateUrl: '/app/views/orders.html',
                controller: 'OrdersController as vm'
            });
    });
}

