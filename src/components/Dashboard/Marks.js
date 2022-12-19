import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar, Doughnut, Pie } from 'react-chartjs-2';
  import React, {useState, useEffect} from "react";
  import axios from 'axios';
  import '../../assets/style.css';
  
  ChartJS.register( 
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
    );
  
function Marks(props) {

    
    let [data,setData] = useState ([]);
    let [isLoading,setIsLoading] = useState ([]);
   
    let [Moyenne, setMoyenne] = useState({
        datasets: [],
    });

    let [MoyenneGenre, setMoyenneGenre] = useState({
        datasets: [],
    });

    let [PasMoyenneGenre, setPasMoyenneGenre] = useState({
        datasets: [],
    });

    let [Participation, setParticipation] = useState({
        datasets: [],
    });
  
    let [chartOptions, setChartOptions] = useState({});
    var sup10 = data;
    var inf10 = data;
    sup10 = data.filter(data => ( data.data.average_point.data >= 10));
    inf10 = data.filter(data => ( data.data.average_point.data < 10));
    let [nbr_moyenne, setNbr_moyenne] = useState(0)
    let [nbr_pasmoyenne, setNbr_pasmoyenne] = useState(0)
    let [nbrFilleMoyenne , setNbrFilleMoyenne]= useState(0)
    let [nbrGarconMoyenne , setNbrGarconMoyenne]= useState(0)
    let [nbrFillePasMoyenne , setNbrFillePasMoyenne]= useState(0)
    let [nbrGarconPasMoyenne , setNbrGarconPasMoyenne]= useState(0)
    let [nbrParticipation  , setNbrParticipation]= useState(0)
    let [nbrNonParticipation , setNbrNonParticipation]= useState(0)
    
    
    useEffect(() => {
            axios.get (`http://localhost:8000/api/student/average-point/${props.grade}/${props.year}`)
            .then((res)=>{
                setTimeout(() => {
                    console.log('data',data);
                    setData(res.data);
                    setIsLoading(false);
                  }, 2000);
             })   ;         

             setParticipation({
                labels: ["Ont participé", "N'ont pas participé"],
                datasets: [
                    {
                        label: "Liste de participation des etudiants",
                        data: [nbrParticipation, nbrNonParticipation],
                        backgroundColor: ["cyan","red"],
                    },
                   
                ],
            });
        
            setMoyenne({
                labels: ["Moyenne", "Pas la moyenne"],
                datasets: [
                    {
                        label: "Liste de ceux qui ont la moyenne parmis ceux qui ont participé",
                        data: [nbr_moyenne, nbr_pasmoyenne],
                        backgroundColor: ["cyan","red"],
                    },
                   
                ],
            });
        
        
            setMoyenneGenre({
                labels: ["Fille", "Garçon"],
                datasets: [
                    {
                        label: "Ceux qui ont eu la moyenne",
                        data: [nbrFilleMoyenne, nbrGarconMoyenne],
                        borderColor: ["green","red"],
                        backgroundCololr: ["red","green"],
                    },
                   
                ],
            });
        
            setPasMoyenneGenre({
                labels: ["Fille", "Garçon"],
                datasets: [
                    {
                        label: "Ceux qui n'ont pas eu la moyenne",
                        data: [nbrFillePasMoyenne, nbrGarconPasMoyenne],
                        borderColor: ["green","red"],
                        backgroundCololr: ["red","yellow"],
                    },
                   
                ],
            });
        
            setChartOptions({
                responsive: true,
                plugins: {
                    legend: {
                        position: "top"
                    },
                    title:{
                        dsiplay: true,
                        text: ""
                    },
                },
            })
        
            
                data.forEach(data => {
                   if (data.data.average_point.data >= 10) {
                    console.log('moyenne');
                       setNbr_moyenne(nbr_moyenne++)
                       setNbrParticipation(nbrParticipation++)
            
                       if (data.data.student.gender == 'F') {
                           setNbrFilleMoyenne(nbrFilleMoyenne++)
                           console.log('fille');
                       }
                       else if (data.data.student.gender == 'M') {
                           setNbrGarconMoyenne(nbrGarconMoyenne++)
                           console.log('Garçon');
                       }
                   }
                   else{
                       setNbr_pasmoyenne(nbr_pasmoyenne++)
                       setNbrParticipation(nbrParticipation++)
                console.log('pas moyenne');
                       if (data.data.student.gender == 'F') {
                           setNbrFillePasMoyenne(nbrFillePasMoyenne++)
                       }
                       else if (data.data.student.gender == 'M') {
                           setNbrGarconPasMoyenne(nbrGarconPasMoyenne++)
                       }
            
                       if (data.data.average_point === 0) {
                           setNbrNonParticipation(nbrNonParticipation++)
                       }
                   }
               })
    
    }, [props.grade, props.year])

        console.log('after',data);
    
  

  return (
    <div>
        <h3 className='mb-5 mt-3 text-center'>Etudiants en {props.grade} ({props.year - 1}-{props.year})</h3>    
        <hr/>
        {
              
        }
    <div className='row'>
        <span className='col-3' >
            <Doughnut options={chartOptions} data={Participation}  /> 
        </span>
        <span className='col-3' >
            <Pie options={chartOptions} data={Moyenne}  /> 
        </span>
        <span className='col-3 mt-5' >
            <Bar options={chartOptions} data={MoyenneGenre}  className='mt-5'/> 
        </span>
        <span className='col-3 mt-5' >
            <Bar options={chartOptions} data={PasMoyenneGenre}  className='mt-5'/> 
        </span>
    </div>

    {/* List of students with their average points and retake module */}
        <div className='mt-4'>
            <div>
                <b className='ml-3' style={{color: 'black'}}>
                    Liste des etudiants qui ont eu la moyenne:
                </b>

                <table class="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th className='text-center'>Nom</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Sexe</th>
                            <th className='text-center'>Groupe</th>
                            <th className='text-center'>Moyenne</th>
                            <th className='text-center'>Module(s) à rattraper </th>
                        </tr>
                    </thead>
                    <tbody>
                    {sup10.map((data)=>{
                    return(
                        <tr key={data.data.student.id}>
                            <td className='text-center'>{data.data.student.name}</td>
                            <td className='text-center'>{data.data.student.email}</td>
                            <td className='text-center'>
                            { data.data.student.gender ==='M'? "Masculin": "Feminin" }
                            </td>
                            <td className='text-center'>{data.data.group}</td>
                            <td className='text-center'>{data.data.average_point.data}</td>
                            <td className='text-center'>-{data.data.retake_module}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>

            <div className='mt-5'>
            <b  className='ml-3' style={{color: 'black'}}>Liste des etudiants qui n'ont pas eu la moyenne :</b>
                <table className="table table-hover mt-3">
                    <thead className='text-dark'>
                        <tr>
                        <th className='text-center'>Nom</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Sexe</th>
                            <th className='text-center'>Groupe</th>
                            <th className='text-center'>Moyenne</th>
                            <th className='text-center'>Module(s) à rattraper </th>
                        </tr>
                    </thead>
                    <tbody>
                    {inf10.map((data)=>{
                    return(
                        <tr key={data.data.student.id}>
                            <td className='text-center'>{data.data.student.name}</td>
                            <td className='text-center'>{data.data.student.email}</td>
                            <td className='text-center'>{data.data.student.gender}</td>
                            <td className='text-center'>{data.data.group}</td>
                            <td className='text-center'><code style={{color: 'red'}}>{data.data.average_point.data}</code></td>
                            <td className='text-center'>-{data.data.retake_module}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        </div>

    </div>
  )
}

export default Marks
