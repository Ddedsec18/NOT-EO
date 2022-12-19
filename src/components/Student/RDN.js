import React , {useState,useEffect,useRef} from "react"
import axios from 'axios'
import MarksList from "./MarksList";
import { useReactToPrint } from "react-to-print";

function RDN(props) {

    let [data, setData] = useState([]);
    let [student, setStudent] = useState([]);
    let [moyenne, setMoyenne] = useState(0);

    const componentRef = useRef();
    const printData = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: "test",
      onafterprint: () => alert("print success"),
    });

    let [isLoadingData, setIsLoadingData] = useState(true);
    let [isLoadingMoyenne, setIsLoadingMoyenne] = useState(true);
    let [isLoadingStudent, setIsLoadingStudent] = useState(true);

    useEffect(() => {
      axios.all([
          axios.get(`http://localhost:8000/api/student/all-marks/${props.year}/${props.id}`)
          .then( res => {
              console.log(res.data);
              setTimeout(() => {
                setData(res.data);
                setIsLoadingData(false);
              }, 3000);
          }),

          axios.get(`http://localhost:8000/api/student/average_point/${props.year}/${props.id}`)
          .then( res => {
              console.log(res.data);
              setTimeout(() => {
                setMoyenne(res.data);
                console.log(moyenne);
                setIsLoadingMoyenne(false);
              }, 3000);
          }),

          axios.get(`http://localhost:8000/api/student/${props.id}`)
          .then( res => {
              console.log('etudiant',res.data);
              setTimeout(() => {
                setStudent(res.data);
                setIsLoadingStudent(false);
              }, 3000);
          })

      ])

    }, [props.year, props.id])

  return (
    <div>
      { (isLoadingData) ? <p className="mt-5 ml-5 text-warning">Loading data marks...</p> :""}
<hr/>
      <div   ref={componentRef} className="mt-3 ml-4">
      { (isLoadingStudent) ? <>Loading personal info...</> : 
        <>
            <h3>Relevé de note de {student.student.name} pendant l'année scolaire {props.year - 1}-{props.year}</h3>
            <p>Email : {student.student.email}</p>
        </>
      }

        {data && <MarksList data={data} />}

        {moyenne && 
          ( moyenne.message === 'Fail') ? <p>Tsy afaka mcalcul moyenne satria mbola misy examen tsy natao</p> : 
          <h3>Moyenne: {moyenne.data}</h3>
        }
        </div>
<hr/>
        <div className="row mb-5">
          <div className="col-4"></div>
      <button onClick={printData} className="btn btn-dark text-center col-4 mb-5"> Downloat as pdf</button>  
      </div>
    </div>
  )
}

export default RDN
