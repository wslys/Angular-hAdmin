/**
 * @author wsl
 * created on 2017-02-23
 * updated on 2017-02-23
 */
(function () {
    'use strict';

    angular.module('hAdmin.pages.dashboard')
        .controller('dashboardCtrl', dashboardCtrl);

    /** @ngInject */
    function dashboardCtrl($scope, $timeout, $interval) {
        console.log("dashboardCtrl");

        $scope.list = [];
        for (var i = 0; i < 15; i++) {
            var obj = {
                title: "title" + i,
                time: i + "小时",
            };

            $scope.list.push(obj);
        }

        /*serve status */
        var serve_status = echarts.init(document.getElementById('flot-line-chart-moving'));
        var data = [];
        var now = +new Date(1997, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var value = Math.random() * 60;
        for (var i = 0; i < 1000; i++) {
            data.push(randomData());
        }

        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                    Math.round(value)
                ]
            }
        }

        var option = {
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            grid: {
                x: 40,
                y: 0,
                x2: 5,
                y2: 20
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                min: 0,
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
        };

        $interval(function () {

            for (var i = 0; i < 5; i++) {
                data.shift();
                data.push(randomData());
            }

            serve_status.setOption(option);
        }, 1000);

        /* 往年数据 */
        var yesterday = echarts.init(document.getElementById('yesterday'));
        var option2 = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['新玩家', '老玩家']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2月2007', '4月2007', '6月2007', '8月2007', '10月2007', '12月2007', '2月2008', '4月2008', '6月2008', '8月2008']
            },
            grid: {
                x: 25,
                y: 20,
                x2: 20,
                y2: 20
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name: '新玩家',
                    type: 'line',
                    data: [11, 11, 15, 17, 19, 18, 16, 13, 11, 10],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '老玩家',
                    type: 'line',
                    data: [3, 5, 6, 6, 7, 8, 8, 9, 10, 10],
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'},
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    normal: {
                                        position: 'start',
                                        formatter: '最大值'
                                    }
                                },
                                type: 'max',
                                name: '最高点'
                            }]
                        ]
                    }
                }
            ]
        };
        yesterday.setOption(option2);
    }

})();
