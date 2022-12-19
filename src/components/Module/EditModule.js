import React , {useState,useEffect} from "react";
import { useNavigate, useParams, Link } from 'react-router-dom'
import loading from './../../assets/loading.gif';
import axios from 'axios'

function EditModule() {

  const history = useNavigate();
  const {id} = useParams();
  let [data,setData] = useState ([]);
  let [name, setName] = useState('');
  let [code, setCode] = useState(''); 
  let [hour, setHour] = useState(0);
  let[isLoading, setIsLoading] = useState(true);
  console.log(id);
  useEffect  (() =>{
        fetch(`http://localhost:8000/api/module/${id}`).then((res)=>{
            return res.json()
        }).then((data)=>{
          setTimeout(() => {
            setData(data);
            setIsLoading(false);
          }, 3000);
        })
  },[]);

  return (
    <div class="limiter">
		<div class="container-login100" >
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
      { (isLoading) ? <p className="text-center h3">Please, wait a moment...<img src={loading}/></p>: 
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						Modification module {id}
					</span>
                  
					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100" > Nom </span>
						<input class="input100" 
                  type="text"
                  name="name"
                  value = {data.module.name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"  ></input>
						
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100"> Code </span>
						<input class="input100"  
                  type="text"
                  name="code"
                  value={data.module.code}
                  onChange={(e) => setCode(e.target.value)}
                  className="form-control"></input>
						
					</div>
          <div class="text-right p-t-8 p-b-31">
						<a href="#">
						</a>
					</div>

          <div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100">Heure</span>
						<input class="input100" 
                  type="number"
                   name="hour"
                  value={data.module.hour}
                  onChange={(e) => setHour(e.target.value)}
                  className="form-control"  ></input>
					
					</div>
					
					<div class="text-right p-t-8 p-b-31">
						<a href="#">
						</a>
					</div>
				
          <div className='row'>
          <button type='submit' value="envoyer"  className="btn btn-primary ">
           Enregistrer
           </button>
           <Link to={'/module'}>
            <p className='text-center mt-2' >Revenir dans liste module? <a href="#">Retour</a></p>
           </Link>
           </div>

           <div class="text-right p-t-8 p-b-31">
						<a href="#">
						</a>
					</div>

				</form>
}
			</div>
		</div>
	</div>

     
  )
}

export default EditModule
