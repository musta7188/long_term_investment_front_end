export default function (data) {

  return {
    

      title: {
        text: 'TITLE'
      },
      yAxis: {
        title: {
          text: 'Price'
        }
      },
      xAxis: {type: 'datetime'},
    
  
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
    
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2020
        }
      },

      series: [data],
    
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    
    }
}

