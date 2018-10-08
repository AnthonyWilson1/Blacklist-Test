import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import axios from 'axios';
var moment = require('moment');


const day1 = moment().subtract(6,'days').format('MM-DD-YYYY')
const day2 = moment().subtract(5,'days').format('MM-DD-YYYY')
const day3 = moment().subtract(4,'days').format('MM-DD-YYYY')
const day4 = moment().subtract(3,'days').format('MM-DD-YYYY')
const day5 = moment().subtract(2,'days').format('MM-DD-YYYY')
const day6 = moment().subtract(1,'days').format('MM-DD-YYYY')
const day7 = moment().format('MM-DD-YYYY')



class Chart extends Component {


  componentDidMount() {
    let resultOne = 0
    let resultTwo = 0
    let resultThree = 0
    let resultFour = 0
    let resultFive = 0
    let resultSix = 0
    let resultSeven = 0

    let copy = {
      labels: [day1, day2, day3, day4, day5, day6 ,day7],
      datasets: [
        {
          label: 'Tasks Complete',
          data: [
            resultOne,
            resultTwo,
            resultThree,
            resultFour,
            resultFive,
            resultSix,
            resultSeven,
          ],
          backgroundColor: [
          
            'rgba(54, 162, 235, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(54, 162, 235, 0.6)'
          
            
          ]
        }
      ]   
    }

    axios.get('/api/productivity').then((result) => {
      // console.log(result.data[0].length)
      // console.log(copy.datasets[0].data[0])
      copy.datasets[0].data[0] = result.data[0].length
      copy.datasets[0].data[1] = result.data[1].length
      copy.datasets[0].data[2] = result.data[2].length
      copy.datasets[0].data[3] = result.data[3].length
      copy.datasets[0].data[4] = result.data[4].length
      copy.datasets[0].data[5] = result.data[5].length
      copy.datasets[0].data[6] = result.data[6].length

      this.setState({chartData: copy})
      })
}

  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    }
  }

  static defaultProps = {
  displayTitle:true,
  displayLegend:true,
  legendPosition:'right'
  } 

    render() {
      return (
        <div className="chart">
          <Bar
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Complete tasks this week',
                fontsize:25
                },
              legend:{
                display:this.props.displayLegend,
                  position:this.props.LegendPosition
                
              }
              
            }}
          />
        </div>
      )


    }

  }

  export default Chart;