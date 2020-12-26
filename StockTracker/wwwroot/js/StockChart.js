
/**
* Request data from the server, add it to the graph and set a timeout to request again
*/
var root = 'https://sandbox.iexapis.com';
const testApiKey = "Tpk_4059c0cbd9b94e0ab33019b5daf7d8ba";
var stockToFind = "AAA";

var chart = Highcharts.chart;

$(document).ready(function () {
    var options = {
        chart: {
            renderTo: 'container-fluid',
            type: 'spline',
            shadow: true
        },
        title: {
            text: 'Stock Price'
        },
        subtitle: {
            text: 'Measured in xxxx'
        },
        credits: {
            text: 'Data from Pegelonline',
            href: 'http://www.pegelonline.wsv.de/'
        },
        xAxis: {
            tickInterval: 1,
            type: 'datetime', //ensures that xAxis is treated as datetime values
            dateTimeLabelFormats: {
                second: '%H:%M:%S',
                minute: '%H:%M:%S',
                hour: '%H:%M:%S',
                day: '%H:%M:%S',
                week: '%H:%M:%S',
                month: '%H:%M:%S',
                year: '%H:%M:%S'
            },
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: 'Stock Price'
            }
        },
        legend: {
            enabled: true
        },
        plotOptions: {
            series: {
                turboThreshold: 0,
            }
        },
        series: [{ }]
    };

    $.getJSON("Stock/GetText", null, function (data) {
        chart_data = [];
        $.each(data, function (i, obj) {
            console.log(parseFloat(obj.minute));
            var milliSeconds = Number(obj.minute.split(':')[0]) * 60 * 1000 + Number(obj.minute.split(':')[1]) * 1000;
            chart_data.push({
                x: parseFloat(milliSeconds),
                y: parseFloat(obj.open)
            })
        });
        console.log(chart_data);
        options.series[0].data = chart_data;
        var chart = new Highcharts.Chart(options);
    });
});




$(document).ready(function () {
    var options = {
        chart: {
            renderTo: 'container',
            type: 'spline',
            shadow: true
        },
        title: {
            text: 'Stock Price'
        },
        subtitle: {
            text: 'Measured in xxxx'
        },
        credits: {
            text: 'Data from Pegelonline',
            href: 'http://www.pegelonline.wsv.de/'
        },
        xAxis: {
            tickInterval: 1,
            type: 'datetime', //ensures that xAxis is treated as datetime values
            dateTimeLabelFormats: {
                second: '%H:%M:%S',
                minute: '%H:%M:%S',
                hour: '%H:%M:%S',
                day: '%H:%M:%S',
                week: '%H:%M:%S',
                month: '%H:%M:%S',
                year: '%H:%M:%S'
            },
            title: {
                text: 'Time'
            }
        },
        yAxis: {
            title: {
                text: 'Stock Price'
            }
        },
        legend: {
            enabled: true
        },
        plotOptions: {
            series: {
                turboThreshold: 0,
            }
        },
        series: [{}]
    };

    $('#stockSearchBtn').on('click', function () {
        $.ajax({
            type: 'GET',
            url: root + '/stable/stock/fb/intraday-prices?token=' + testApiKey,
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            success: function (data) {
                var ParsedObject = JSON.stringify(data);
                alert(ParsedObject);

                chart_data = [];
                $.each(JSON.parse(ParsedObject), function (i, obj) {
                    console.log(parseFloat(obj.minute));
                    var milliSeconds = Number(obj.minute.split(':')[0]) * 60 * 1000 + Number(obj.minute.split(':')[1]) * 1000;
                    chart_data.push({
                        x: parseFloat(milliSeconds),
                        y: parseFloat(obj.open)
                    })
                });
                console.log(chart_data);
                options.series[0].data = chart_data;
                var chart = new Highcharts.Chart(options);


            },
            error: function (ex) {
                alert("error");
            }

        });

    });

    //$.getJSON("Stock/FindStock", function (data) {
    //    chart_data = [];
    //    $.each(data, function (i, obj) {
    //        console.log(parseFloat(obj.minute));
    //        var milliSeconds = Number(obj.minute.split(':')[0]) * 60 * 1000 + Number(obj.minute.split(':')[1]) * 1000;
    //        chart_data.push({
    //            x: parseFloat(milliSeconds),
    //            y: parseFloat(obj.open)
    //        })
    //    });
    //    console.log(chart_data);
    //    options.series[0].data = chart_data;
    //    var chart = new Highcharts.Chart(options);
    //});
});
        

