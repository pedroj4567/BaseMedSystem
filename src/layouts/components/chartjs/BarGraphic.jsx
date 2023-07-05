import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement,
} from "chart.js"

import { Bar } from "react-chartjs-2"
import { useMemo } from "react"
//Registra los elementos que vamos a utilizar
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
)
const labels = ["diabetes tipo I","diabetes tipo 2","hipertension","Hipertiroidismo","Hipotiroidismo","Asma Bronquial"]
const score = [10000,20000,2000,1000,20000,50000,50000,];

const options = {
}

function BarGraphic() {
    //datos
    const data = useMemo(()=>{
        return{
            datasets:[
                {
                    label:"Cantidad de pacientes por patología",
                    data:score,
                    backgroundColor:"#2fc4b2"
                }
            ],
            labels:labels
        }
    },[])

    //retornamos la grafica
  return (
    <div className=" ">
        <Bar data={data} options={options} className=" rounded-2xl px-4"/>
    </div>
  )
}

export default BarGraphic