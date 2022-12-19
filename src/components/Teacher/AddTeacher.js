import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Swal from 'sweetalert2';
import './../../assets/admin/css/util.css';
import './../../assets/admin/css/main.css';
import { Link } from 'react-router-dom';
//import { useHistory } from 'react-router';



function Professeurs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [diploma, setDiploma] = useState('');
  const [module_id, setModule_id] = useState( 1 );
  const [data ,  setData] = useState ([]);

  const handleSubmit = async (e) => {
      e.preventDefault();

      const teacher = { name, email, diploma, module_id };
      console.log(teacher);

      const res = await axios({
          method: 'POST',
          url: "http://127.0.0.1:8000/api/teacher",
          data: teacher,
        })
        if (res.status === 200) {
          //console.log(res);
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Professeur Ajouter avec Succes',
          //   showConfirmButton: true,
          // })
          alert("Proffesseur ajouter avec succes");
        }
          
     
}

useEffect (() =>{
  axios
 .get('http://localhost:8000/api/module').then((res)=>{
     setData(res.data)
 })
 },[]);;
return (
 
  <div class="limiter">
		<div class="container-login100" >
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form"  onSubmit={ handleSubmit }>
					<span class="login100-form-title p-b-49">
						Ajouts professeurs
					</span>

					<div class="wrap-input100 validate-input m-b-23" >
						<span class="label-input100" > Nom </span>
						<input class="input100"
                  id="name" 
                  type="text"
                  name="name"
                  value = {name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"  ></input>
						
					</div>

					<div class="wrap-input100 validate-input" >
						<span class="label-input100">Email</span>
						<input class="input100" 
                  id="email" 
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"></input>
						
					</div>
          <div class="text-right p-t-8 p-b-31">
						<a href="#">
						</a>
					</div>

          <div class="wrap-input100 validate-input m-b-23" >
						<span class="label-input100">Diplome</span>
						<input class="input100" 
                  id="diploma"
                  type="text"
                   name="diploma"
                  value={diploma}
                  onChange={(e) => setDiploma(e.target.value)}
                  className="form-control"  ></input>
					
					</div>
          {/* <div class="wrap-input100 validate-input m-b-23" >
						<span class="label-input100">Genre (M ou F) </span>
						<input class="input100" 
                  id='gender'
                  type="text"
                   name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-control" ></input>
                  </div> */}
            <div>
                  <label>Modules</label><br></br>
                    <select 
                    id='module_id'
                    name="module_id"
                    value={module_id} 
                    onChange={(e) => setModule_id(e.target.value)}>
                      {data.map((Item)=>{
                      return( 
                        
                         <option value={Item.module.id} >{Item.module.code}</option>  
                            )
                       })}
                    </select>
                    </div>
					<div class="text-right p-t-8 p-b-31">
						<a href="#">
						</a>
					</div>
				  <div className='row'>
          <button type='submit' value="envoyer"  className="btn btn-primary ">
           Enregistrer
           </button>
           <Link to={'/teacher'}>
            <p className='text-center mt-2' >Revenir dans liste professeurs? <a href="#">Retour</a></p>
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
export default Professeurs;

