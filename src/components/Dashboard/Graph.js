import axios from 'axios';

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
import Marks from './Marks'
ChartJS.register( 
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
    );

function Graph(props) {
    let[year, setYear] = useState(2022);

    let [moyenneGeneral2022, setMoyenneGeneral2022] = useState(0);
    let [moyenneGeneral2021, setMoyenneGeneral2021] = useState(0);
    let [nombre2022, setNombre2022] = useState(0);
    let [nombre2021, setNombre2021] = useState(0);

    let [ComparisonPerYear, setComparisonPerYear] = useState({
        datasets: [],
    });

    let [NombreEtudiants, setNombreEtudiants] = useState({
        datasets: [],
    });

    let [chartOptions, setChartOptions] = useState({});

    let Previous = ()=>{
        if (year !==  2019) {
            setYear(year-1)   
        }
        else{
            alert("Pas d'année scolaire correspondant");
        }
    }

    let Next = ()=>{
        if (year <  2022) {
            setYear(year+1)   
        }
        else{
            alert("Pas d'année scolaire correspondant");
        }
    }


    useEffect(() => {
        setComparisonPerYear({
            labels: ["2018-2019", "2019-2020", "2020-2021", "2021-2022"],
            datasets: [
                {
                    label: "Moyenne generale",   
                    data: [12, 15, moyenneGeneral2021, moyenneGeneral2022],
                },
            
            ],
        });

        setNombreEtudiants({
            labels: ["2018-2019", "2019-2020", "2020-2021", "2021-2022"],
            datasets: [
                {
                    label: "Nombre d'etudiants",   
                    data: [4, 3, nombre2021.length,nombre2022.length ],
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
        });    

        axios.all(
            [axios.get (`http://localhost:8000/api/student/general/average_point/${props.grade}/2022`)
                .then((res)=>{setMoyenneGeneral2022(res.data)}),
             axios.get (`http://localhost:8000/api/student/general/average_point/${props.grade}/2021`)
                .then((res)=>{setMoyenneGeneral2021(res.data)   }),
             axios.get (`http://localhost:8000/api/student/list/${props.grade}/2022`)
                .then((res)=>{setNombre2022(res.data)   }),
             axios.get (`http://localhost:8000/api/student/list/${props.grade}/2021`)
                .then((res)=>{setNombre2021(res.data)   }),
            ]
        )}, [props.grade]);
  

  return (
    <div>
       <h1 className='text-center text-light mt-5 bg-dark'>
            { props.grade }
        </h1>

        <div className="row mt-5">
            <div className="col-5 ml-5 mr-2">
                <Bar options={chartOptions} data={ComparisonPerYear}/> 
            </div>
            <div className="col-5 ml-4">
                <Bar options={chartOptions} data={NombreEtudiants}/> 
            </div>
        </div><hr/>

        {/** Choose the year */}
        <div className='row'>
            <div class="col-4"></div>
            <ul class="pagination div col-8">
                <li class="page-item"><a class="page-link" href="#"
                onClick={Previous}>Previous</a></li>
                <li class="page-item"><a class="page-link" href="#"
                onClick={() => setYear(2019)}>2019</a></li>
                <li class="page-item"><a class="page-link" href="#"
                onClick={() => setYear(2020)}>2020</a></li>
                <li class="page-item"><a class="page-link" href="#"
                onClick={() => setYear(2021)}>2021</a></li>
                <li class="page-item active"><a class="page-link" href="#"
                    onClick={() => setYear(2022)}>2022</a></li>
                <li class="page-item"><a class="page-link" href="#"
                onClick={Next}>Next</a></li>
            </ul>
        </div>

        <Marks year={year} grade={props.grade}/>
    </div>
  )
}

export default Graph
