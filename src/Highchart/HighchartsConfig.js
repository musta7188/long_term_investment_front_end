export default function (data) {

  return {
    

      title: {
        text: data.name
      },
      yAxis: {
        title: {
          text: 'Price'
        }
      },
      xAxis: {type: 'date'},
    
  
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

