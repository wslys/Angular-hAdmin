/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.charts.peity').controller('peityCtrl', peityCtrl);

    /** @ngInject */
    function peityCtrl($scope, $timeout, $interval) {
        $("td span.pie").peity("pie", {
            fill: ['#1ab394', '#d7d7d7', '#ffffff']
        });

        $("td span.line").peity("line",{
            fill: '#1ab394',
            stroke:'#169c81',
        })

        $("td span.bar").peity("bar", {
            fill: ["#1ab394", "#d7d7d7"]
        })

        $("td span.bar_dashboard").peity("bar", {
            fill: ["#1ab394", "#d7d7d7"],
            width:100
        })

        var updatingChart = $(".updating-chart").peity("line", { fill: '#1ab394',stroke:'#169c81', width: 64 })

        setInterval(function() {
            var random = Math.round(Math.random() * 10)
            var values = updatingChart.text().split(",")
            values.shift()
            values.push(random)

            updatingChart
                .text(values.join(","))
                .change()
        }, 1000);
    }

})();
