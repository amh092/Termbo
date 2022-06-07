

import React from 'react'
import { Line} from 'react-chartjs-2'

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);


const BarChart = () => {


  const labels = ['jan','mar','april','aug']
  return (
    <div>
      <Line
     
        data={{
       
          labels : labels,
          datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor:'rgb(75, 192, 192)',
            tension: .2
          }],}}
     
     
      />
    </div>
  )
}

export default BarChart