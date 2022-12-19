import axios from 'axios';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import List from './List';

function   Table (){
    const [data,setData] = useState ([]);

    useEffect (() =>{
     axios
    .get ('http://localhost:8000/api/teacher').then((res)=>{
        setData(res.data)
    })
    },[]);
    console.log(data);
    return (
        <div>
            <h1 align = 'centre'>Les listes des Professeurs</h1>
            <Link to={'/addTeacher'}>
                <button className="btn btn-info float-right mr-5">Ajouter un Professeurs</button>
            </Link>
            <table class="table table-striped">
            <thead class="thead-dark">
            <tr>
            <td>id</td>
            <td>Nom</td>
            <td>Email</td>
            <td>Diplome</td>
            <td>modules</td>

            </tr>
            </thead>
            <tbody>
                {data &&  data.map((prof)=>{
                    // var test =   prof.teacher.modules.map((m)=>{
                    //     <>
                    //         <span>{m.code}</span>
                    //     </>})
                    return(
                    <tr key={prof.teacher.id}>
                        <td>{prof.teacher.id}</td>
                        <td>{prof.teacher.name}</td>
                        <td>{prof.teacher.email}</td>
                        <td>{prof.teacher.diploma}</td>
                        <td>{
                                prof.teacher.modules.map((m)=>{
                                    <>
                                        <span>{m}</span>
                                    </>})
                            }
                        </td>
                    </tr>)
                })
                
                }
                

            </tbody>
            </table>
        </div>

    )
} 



export default Table;
