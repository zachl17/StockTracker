
/**
* Request data from the server, add it to the graph and set a timeout to request again
*/

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
            chart_data.push({
                x: parseFloat(obj.minute),
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
            text: 'Water level of the last xx days'
        },
        subtitle: {
            text: 'Measured in xxxx'
        },
        credits: {
            text: 'Data from Pegelonline',
            href: 'http://www.pegelonline.wsv.de/'
        },
        xAxis: {
            type: 'datetime',
            minRange: 1 * 24 * 3600000 // one day
        },
        yAxis: {
            title: {
                text: 'Waterlevel'
            }
        },
        legend: {
            enabled: true
        },
        series: [{}]
    };

    $.getJSON('https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/BONN/W/measurements.json?start=P1D', function (data) {
        chart_data = [];
        $.each(data, function (i, obj) {
            chart_data.push([Date.parse(obj.timestamp), obj.value]);
        });
        options.series[0].data = chart_data;
        var chart = new Highcharts.Chart(options);
    });
});
