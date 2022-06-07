import React ,{useState}from 'react'
import { Doughnut} from 'react-chartjs-2'
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





const PieChart = () => {

    const [progress, setProgress] = useState(75)

    let percentage = progress
    const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
             var fontSize = (height / 160).toFixed(2);
             ctx.font = fontSize + "em sans-serif";
             ctx.textBaseline = "top";
             var text = `${percentage} %`,
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height / 2;
             ctx.fillText(text, textX, textY);
             ctx.save();
        } 
      }]

  return (
    
    <div>
    
      <Doughnut
  
   options ={{
        circumference: 360,
    borderWidth:'0',
 
    rotation: 30,
    cutout: '90',
    borderRadius:[{outerEnd:43,innerEnd:43},{outerStart:43,innerStart:43},{outerStart:43,innerStart:43} ],
    weight:50
   
   
   }}
plugins={plugins}
        data={{
           
            labels: [
                'Red',
                'Yellow',
                'Blue'],
         
            datasets: [{
                
                hoverOffset: 5,
              
                backgroundColor:[
                    'rgb(75, 192, 192)',
                    'purple',
             
             'transparent'
            ],
         
           
            
            
                data: [ 100 - percentage,percentage,percentage /2],
          }]
          ,}}
     
     
      />
    </div>
  )
}

export default PieChart