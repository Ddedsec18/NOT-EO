import React , {useState,useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Student (props)
{

 const [data,setData] = useState ([]);
 const [group,setGroup] = useState ("");
 const [gender,setGender] = useState ("");
 const history = useNavigate();
const delteStudent = (id)=>{
    fetch(`http://localhost:8000/student/${id}`, {
        method: 'DELETE'
      }).then(() => {
        alert('Un etudiant supprimé')
        history.push('/student');
      }) 
}
    useEffect (() =>{
        if (gender == 'F' || gender == 'M') {
            axios
            .get (`http://localhost:8000/api/student/list/${props.grade}/${group}/${gender}/${props.school_year}`)
            .then((res)=>{ setData(res.data)   })
        }
        else{
            axios.get (`http://localhost:8000/api/student/list/${props.grade}/${props.school_year}`)
            .then((res)=>{setData(res.data)   })
        }
    },[props.grade, props.school_year]);


var Fdata = data;
// var list_module = module.list_module;
// console.log(module.list_module);
if (group !== '' && gender !== '') {
    Fdata = data.filter(data => ( data.group === group  && data.student.gender === gender ));   
}
else if (group !== '') {
    Fdata = data.filter(data => (data.group === group));   
}
else if (gender !== '') {
    Fdata = data.filter(data => (data.student.gender === gender));   
}

    return(
        <div>
             <h2 className="text-center mt-4">
                LISTE DES ETUDIANT EN {props.grade} ({props.school_year - 1} - {props.school_year })
                </h2>
            <hr/>

            <div  className="mt-3">
            <form>
                <label>Search </label> 
                <select
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                >
                <option value="">--Group--</option>    
                { (props.grade == 'L1') ?
                <>
                    <option value="G1">Group 1</option>
                    <option value="G2">Group 2</option>
                </>
                :
                <>
                    <option value="RSI">RSI</option>
                    <option value="E-DEV">E-DEV</option>
                </>
                }
                </select>

                <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                >
                <option value="">--Gender--</option>
                <option value="F">Fille</option>
                <option value="M">Garçon</option>
               
                </select>
            </form>


                <table className="table border ml-5 mt-5" style={{width:80+"%"}}>
                <thead>
                    <tr className="mt-2 mb-3" style={{float:"right"}}>
                        <Link to={'/addStudent'} className="text-primary">+ Ajouter un etudiant</Link>
                    </tr>
                </thead>    
                <tbody>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>age</td>
                        <td>gender</td>
                        <td>group</td>
                        <td colSpan={2}></td>
                    </tr>
                    {Fdata.map((students)=>{
                    return(
                    <tr key={students.student.id}>
                    <td>
                        <Link to={`/detailStudent/${students.student.id}`} >
                            {students.student.name}
                        </Link>
                    </td>
                    <td>{students.student.email}</td>
                    <td>{students.student.age}</td>
                    <td>{students.student.gender}</td>
                    <td>{students.group}</td>
                    <td>
                        <Link to={`/editStudent/${students.student.id}`} className="btn btn-sm btn-warning">Edit</Link>
                    </td>
                    <td><button className="btn btn-sm btn-danger"
                    onClick={()=>delteStudent(students.student.id)}>Delete</button></td>
                    </tr>)
                })}
                </tbody>
                </table>

                
            </div>
        </div>
    );
}
export default Student;