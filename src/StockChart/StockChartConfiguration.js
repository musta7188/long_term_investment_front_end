
export default function (data, symbol) {

  return {

    body:{
      background: "black",
    },
    rangeSelector: {
      selected: 1
    },
    title: {
      text: `${symbol} Stock Price`,
      background: "black",
    },
    series: [{
      name: symbol,
      data: data,
      tooltip: {
        valueDecimals: 2
      }
    }]
  }
}