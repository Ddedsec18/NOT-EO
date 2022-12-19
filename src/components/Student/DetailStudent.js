import React , {useState,useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import axios from 'axios'
import RDN from "./RDN";
import loading from './../../assets/loading.gif';


function DetailStudent() {
    const history = useNavigate();
    const {id} = useParams();
    let[year, setYear] = useState(2022);
    let[data, setData] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const Previous = ()=>{
        if (year !==  2019) {
            setYear(year-1)   
        }
        else{
            alert("Pas d'année scolaire correspondant");
        }
    }

    const Next = ()=>{
        if (year <  2022) {
            setYear(year+1)   
        }
        else{
            alert("Pas d'année scolaire correspondant");
        }
    }

    // useEffect(()=>{
    //     fetch(`http://localhost:8000/api/student/${id}`).then((res)=>{
    //         return res.json()
    //     }).then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })

    //     axios
    //     .get (`http://localhost:8000/api/student/${id}`)
    //     .then((res)=>{
    //         console.log(res.data);
    //         setData(res.data)   
    //     })
    // },[]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/student/${id}`)
        .then( res => {
            console.log(res.data);
            setTimeout(() => {
              setData(res.data);
              setIsLoading(false);
            }, 3000);
        })
    }, [])
  return (
    <div>
            <Link to={'/student'}
            className="mb-2 btn btn-sm btn-dark">List student</Link>
      <h1>Detail sur l'étudiant:</h1>
      { (isLoading) ? <img src={loading} className="ml-5"/> : 
        <>
                <p>Nom: {data.student.name}</p>
                <p>Email : {data.student.email}</p>
                <p>Age : {data.student.age}</p>
                <p>Genre : 
                  { data.student.gender ==='M'? "Masculin": "Feminin" }
                </p>
        </>
      }

    {/* Choosing the Academic year  */}
      <div className='row mt-5'>
            <div class="col-4"></div>
            <ul class="pagination col-8">
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
      <RDN year={year} id={id}/>
    </div>
  )
}

export default DetailStudent
