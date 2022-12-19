import '../../assets/style.css';
import YearList from './YearList';
import React, { useState } from 'react'


function HeaderStudent() {
    let [grade, setGrade] = useState('L1');

  return (
    <>
       <div className="row mt-3">
            <div className='col-1'></div>
            <a href='#' className="col-2 btn btn-warning"
            onClick={() => setGrade('L1')}>L1</a>
        
            <a href="#" className="col-2 btn btn-dark"
            onClick={() => setGrade('L2')}>L2</a>
        
            <a href="#" className="col-2 btn btn-warning"
            onClick={() => setGrade('L3')}>L3</a>

            <a href="#" className="col-2 btn btn-dark"
            onClick={() => setGrade('M1')}>M1</a>

            <a href="#" className="col-2 btn btn-warning"
            onClick={() => setGrade('M2')}>M2</a>
                    
        </div>

        <YearList grade={grade} />
    </>
  )
}

export default HeaderStudent
