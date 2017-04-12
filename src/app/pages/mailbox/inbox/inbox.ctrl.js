/**
 * @author wsl
 * created on 2017-02-24
 * updated on 2017-02-24
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.mailbox.inbox').controller('inboxCtrl', inboxCtrl);

    /** @ngInject */
    function inboxCtrl($scope, $timeout, $interval) {
        console.log("inbox");

        $scope.mails = [
            {
                id: 1,
                type: 0,
                read: false,
                title: "支付宝",
                label: {
                    css: "",
                    label: ""
                },
                content: "支付宝提醒",
                paperclip: "fa fa-paperclip",
                time: "昨天 10:20"
            }, {
                id: 2,
                type: 0,
                read: false,
                title: "Amaze UI",
                label: {
                    css: "",
                    label: ""
                },
                content: "Amaze UI Beta2 发布",
                paperclip: "",
                time: "上午10:57"
            }, {
                id: 3,
                type: 1,
                read: true,
                title: "WordPress",
                label: {
                    css: "label label-warning pull-right",
                    label: "验证邮件"
                },
                content: "wp-user-frontend-pro v2.1.9",
                paperclip: "fa fa-paperclip",
                time: "上午9:21"
            }, {
                id: 4,
                type: 1,
                read: false,
                title: "淘宝网",
                label: {
                    css: "",
                    label: ""
                },
                content: "史上最全！淘宝双11红包疯抢攻略！",
                paperclip: "",
                time: "中午12:24"
            }, {
                id: 5,
                type: 1,
                read: true,
                title: "淘宝网",
                label: {
                    css: "label label-danger pull-right",
                    label: "AD"
                },
                content: "亲，双11来啦！帮你挑货，还送你4999元红包！仅此一次！",
                paperclip: "fa fa-paperclip",
                time: "上午6:48"
            }, {
                id: 6,
                type: 1,
                read: false,
                title: "淘宝网",
                label: {
                    css: "label label-danger pull-right",
                    label: "AD"
                },
                content: "亲，双11来啦！帮你挑货，还送你4999元红包！仅此一次！",
                paperclip: "fa fa-paperclip",
                time: "上午6:48"
            }, {
                id: 7,
                type: 0,
                read: false,
                title: "支付宝",
                label: {
                    css: "",
                    label: ""
                },
                content: "支付宝提醒",
                paperclip: "fa fa-paperclip",
                time: "昨天 10:20"
            }, {
                id: 8,
                type: 0,
                read: false,
                title: "Amaze UI",
                label: {
                    css: "",
                    label: ""
                },
                content: "Amaze UI Beta2 发布",
                paperclip: "",
                time: "上午10:57"
            }, {
                id: 9,
                type: 1,
                read: true,
                title: "WordPress",
                label: {
                    css: "label label-warning pull-right",
                    label: "验证邮件"
                },
                content: "wp-user-frontend-pro v2.1.9",
                paperclip: "fa fa-paperclip",
                time: "上午9:21"
            }, {
                id: 10,
                type: 1,
                read: false,
                title: "淘宝网",
                label: {
                    css: "",
                    label: ""
                },
                content: "史上最全！淘宝双11红包疯抢攻略！",
                paperclip: "",
                time: "中午12:24"
            }, {
                id: 11,
                type: 1,
                read: false,
                title: "淘宝网",
                label: {
                    css: "label label-danger pull-right",
                    label: "AD"
                },
                content: "亲，双11来啦！帮你挑货，还送你4999元红包！仅此一次！",
                paperclip: "fa fa-paperclip",
                time: "上午6:48"
            }, {
                id: 12,
                type: 1,
                read: false,
                title: "淘宝网",
                label: {
                    css: "label label-danger pull-right",
                    label: "AD"
                },
                content: "亲，双11来啦！帮你挑货，还送你4999元红包！仅此一次！",
                paperclip: "fa fa-paperclip",
                time: "上午6:48"
            }
        ];
        $scope.selectedMails = [];

        $scope.selectMail = function (mail) {
            var k = false;
            angular.forEach($scope.selectedMails, function (item) {
                if (mail.id == item.id) {
                    k = true;
                }
            });

            if (!k) {$scope.selectedMails.push(mail);}
        };
        
        $scope.read = function () {
            angular.forEach($scope.selectedMails, function (item) {
                item.read = true;
            });
        };

        var tk = 1;
        $scope.paperclip = function () {
            angular.forEach($scope.selectedMails, function (item) {
                if (item.paperclip.length != 0 && tk != 1) {
                    item.paperclip = "";
                    tk = 1;
                }else {
                    item.paperclip = "fa fa-paperclip";
                    tk = 0;
                }
            });
        };

        $scope.delete = function () {
            angular.forEach($scope.selectedMails, function (item1) {
                angular.forEach($scope.mails, function (item2, index) {
                    if (item1.id == item2.id) {
                        $scope.mails.splice(index, 1);
                    }
                });
            });
        };
    }

})();
