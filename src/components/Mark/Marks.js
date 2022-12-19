import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';



function Marks() {
    const [module_id, setModule_id] = useState(0);
    const [email, setEmail] = useState(''); 
    const [semester, setSemester] = useState();
    let [year, setYear] = useState();
    const [score, setScore] = useState();
    let[data, setData] = useState([]);
    let[student, setStudent] = useState([]);

    const handlesubmit = async (e) => {
      e.preventDefault();

      const note = { email, module_id, semester, year, score};
      console.log(note);

      const res = await axios({
          method: 'POST',
          url: "http://127.0.0.1:8000/api/mark",
          data: note,
        })
        console.log(res.status);
        if (res.status === 201) {
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: "Note Ajouter avec Succes",
            showConfirmButton: true,
          })
        }
    
  }

    useEffect (() =>{
      axios.all([
        axios.get('http://localhost:8000/api/module')
        .then((res)=>{setData(res.data)}),

        axios.get('http://localhost:8000/api/student')
        .then((res)=>{setStudent(res.data)}),
        ])
     },[]);
console.log(module_id);
  return (
    <div class="limiter">
		<div class="container-login100" >
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form"  onSubmit={handlesubmit}>
					<span class="login100-form-title p-b-49">
						Ajout note
					</span>

          <div class="wrap-input100 validate-input mt-3" data-validate="Password is required">
						<span class="label-input100"> Email étudiant </span>
                    <select className="form-control"
                    id='module_id'
                    name="module_id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                      {student.map((Item)=>{
                      return( 
                        
                         <option value={Item.student.email} >{Item.student.email}</option>  
                            )
                       })}
                    </select>
                    </div>
          
          <div class="wrap-input100 validate-input mt-3" data-validate="Password is required">
						<span class="label-input100"> Code module </span>
                    <select className="form-control"
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
          <div class="wrap-input100 validate-input m-b-23 mt-3" data-validate = "Username is reauired">
						<span class="label-input100">Semestre</span>
						<input class="input100" 
                  type="number"
                   name="hour"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="form-control"  ></input>
					
					</div>
					
            <div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
                <span class="label-input100">Année scolaire</span>
                <input class="input100" 
            type="number"
            name="hour"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="form-control"  ></input>
            
            </div>
                    
          <div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100">Note</span>
						<input class="input100" 
                  type="number"
                   name="hour"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
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

export default Marks
