import React, { useState } from 'react';
// import react from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './../../assets/admin/css/util.css';
import './../../assets/admin/css/main.css';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router';



function Modules() {


  
  // <script type="text/javascript"> 
  // window.csrf_token = "{ csrf_token() }"
  // </script>
  const [name, setName] = useState('');
  const [code, setCode] = useState(''); 
  const [hour, setHour] = useState('');
  // const [password, setPassword] = useState([]);

  const handlesubmit= async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", name) 
    formData.append("code", code) 
    formData.append("hour", hour) 

  const res = await axios({
      method: 'POST',
      url: "http://127.0.0.1:8000/api/module",
      data: formData,
      
    })
    console.log(res.status);
    if (res.status === 200) {
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Module Ajouter avec Succes',
        showConfirmButton: true,
      })
      // alert("Etudiant Ajouter avec Succes");
    }

};
return (


  <div class="limiter">
		<div class="container-login100" >
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form"  onSubmit={handlesubmit}>
					<span class="login100-form-title p-b-49">
						Ajouts modules
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100" > Nom </span>
						<input class="input100" 
                  type="text"
                  name="name"
                  value = {name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"  ></input>
						
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100"> Code </span>
						<input class="input100"  
                  type="text"
                  name="code"
                  value={code}
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
                  value={hour}
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
          
			</div>
		</div>
	</div>
	
     )
}


export default Modules;

