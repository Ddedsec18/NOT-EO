import React, {setState, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';

const AddStudent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [grade, setGrade] = useState('');
    const [group, setGroup] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [school_year, setSchool_year] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const student = { name, email, password, grade, group, age, gender, school_year };
        console.log(student);

        const res = await axios({
            method: 'POST',
            url: "http://127.0.0.1:8000/api/student",
            data: student,
          })
        if (res.data.status === 200 ){
          console.log(res.data.status);
          Swal.fire({
            icon: 'success',
            title: 'Module Ajouter avec Succes',
            showConfirmButton: true,
          })
        }        
        // axios.defaults.xsrfCookieName = "csrftoken";
        // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        // axios.defaults.headers.common = {
        //     'X-Requested-With': 'HttpRequest',
        //     'X-CSRF-TOKEN': window.csrf_token,
        // };
        
        // axios.defaults.withCredentials = true;
        // await axios.post('http://localhost:8000/api/student', student).then(res => {
        //     if (res.data.status === 200) {
        //         console.log('student added successfully');
        //     }
        // })
        // setTimeout(()=>{
        // await fetch(' http://localhost:8000/api/student', {
        //     method: 'POST',
        //     headers: { "Accept": "application/json",
        //                "Content-Type": "application/json",
        //              },
        //     xsrfCookieName: "csrftoken",
        //     xsrfHeaderName: "X-CSRFTOKEN",
        //     body: JSON.stringify(student)
        // })
        // .then(() => {
        //     console.log('new student added');
        //     // history.push('/')
        // })
        // .catch(error=>{setState({errorMessage:error.toString() });
        // console.error('There was an error', error)
        // })
        // // },3000) 
    }

       
    return(
<div className="limiter">

		<div className="container-login100" >
			<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">

				<form className="login100-form validate-form"  onSubmit={handleSubmit}>
					<span className="login100-form-title p-b-49">
						Ajout d'un étudiant
					</span>

					<div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span className="label-input100" > Nom </span>
						<input className="input100" 
                  type="text"
                  name="name"
                  value = {name}
                  onChange={(e) => setName(e.target.value)}
                  classNameName="form-control"  ></input>
						
					</div>

                    <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span className="label-input100" > Email </span>
						<input className="input100" 
                  type='text'
                  id="email" 
                  name="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  classNameName="form-control"  ></input>
						
					</div>
                <div class="wrap-input100 validate-input mt-3" data-validate="Password is required">
					<span class="label-input100"> Genre </span>
                    <select className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}>
                       <option value="M">Femme</option>
                        <option value="F">Homme</option>
                    </select>
                </div>
                    <div className="wrap-input100 validate-input m-b-23 mt-4" data-validate = "Username is reauired">
						<span className="label-input100" > Age </span>
						<input className="input100" 
                    id="age" 
                    name="age" 
                    required 
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                  classNameName="form-control"  ></input>
						
					</div>

                    <div class="wrap-input100 validate-input mt-3" data-validate="Password is required">
                        <span class="label-input100"> Classe </span>
                        <select className="form-control"
                        id="grade" 
                        name="grade" 
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}>
                            <option value="L1">L1</option>
                            <option value="L2">L2</option>
                            <option value="L3">L3</option>
                            <option value="M1">M1</option>
                            <option value="M2">M2</option>
                        </select>
                    </div>

                    <div class="wrap-input100 validate-input mt-3" data-validate="Password is required">
                        <span class="label-input100"> Groupe </span>
                        <select className="form-control"
                        id="grade" 
                        name="grade" 
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}>
                            <option value="G1">Groupe 1</option>
                            <option value="G2">Groupe 2</option>
                            <option value="E-DEV">E-DEV</option>
                            <option value="RSI">RSI</option>
                        </select>
                    </div>


                    <div className="wrap-input100 validate-input m-b-23 mt-3" data-validate = "Username is reauired">
						<span className="label-input100" > Année scolaire </span>
						<input className="input100" 
                  id="school_year" 
                  name="school_year" 
                  value={school_year}
                  onChange={(e) => setSchool_year(e.target.value)}
                   type="text"
                  classNameName="form-control"  ></input>
						
					</div>

                    
                    <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span className="label-input100" > Mot de passe </span>
						<input className="input100" 
                 id="password" 
                 name="password" 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                   type="password"
                  classNameName="form-control"  ></input>
						
					</div>

                    <div className='row'>
          <button type='submit' value="envoyer"  className="btn btn-primary ">
           Enregistrer
           </button>
           <Link to={'/student'}>
            <p className='text-center mt-2' >Revenir dans liste etudiant? <a href="#">Retour</a></p>
           </Link>
           </div>
                   
                </form>
            </div>
        </div>
           
        </div>
    );
}


export default AddStudent;