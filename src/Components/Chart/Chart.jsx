import './Chart.css'
import { ChartBar } from './ChartBar'

export const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value)
  const totalMaximum = Math.max(...dataPointsValues)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          maxValue={totalMaximum}
          value={dataPoint.value}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  )
}
