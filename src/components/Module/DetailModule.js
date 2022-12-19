import React , {useState,useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom'
import loading from './../../assets/loading.gif'
import axios from 'axios'

function DetailModule() {
    const history = useNavigate();
    const {id} = useParams();
    let[isLoading, setIsLoading] = useState(true)
    let[data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/module/${id}`)
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
      { (isLoading) ? <img src={loading} className="ml-5"/> : 
        <div class="limiter">
            <div class="container-login100" >
                <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                    <form class="login100-form validate-form">
                        <span class="login100-form-title p-b-49">
                            Detail module
                        </span>

                        <div>
                            <p>Name: {data.module.name}</p>
                            <p>Code: {data.module.code}</p>
                            <p>Hour: {data.module.hour}</p>
                        </div>
                        <hr/>
                        <div>
                            <h5>List d'enseignant:</h5>
                            {  
                                data.module.teachers.map((t)=>{
                                    return(
                                        <p>{t.name}</p>
                                    )
                                }) 
                            }
                            
                        </div>
                        <a href="/module" className="btn btn-dark mt-5">Retour</a>
                    </form>
                </div>
            </div>
        </div>
      }
    </div>
  )
}

export default DetailModule
