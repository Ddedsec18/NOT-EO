import '../../assets/style.css';
import Graph from './Graph'
import React, { useState } from 'react'


function Header() {
    let [grade, setGrade] = useState('L1');

  return (
    <>

       <div className="row ml-1 mt-3">
                <div className="col-1"></div>
                <div className="col-lg-3 col-6">
                    <div className="small-box" style={{backgroundColor: "rgb(171, 177, 176)", borderColor:"red" }}>
                        <div className="inner">
                        <h3>L1</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon">
                        <i className="ion ion-person-add" />
                        </div>
                        <a href='#' className="small-box-footer"
                        onClick={() => setGrade('L1')}
                        >Plus d'info<i className="fas fa-arrow-circle-right" /></a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box" style={{backgroundColor: "rgb(84, 175, 170)"}}>
                        <div className="inner">
                        <h3>L2</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon">
                        <i className="ion ion-person-add" />
                        </div>
                        <a href="#" className="small-box-footer"
                        onClick={() => setGrade('L2')}
                        >Plus d'info<i className="fas fa-arrow-circle-right" /></a>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box" style={{backgroundColor: "rgb(84, 98, 175)"}}>
                        <div className="inner">
                        <h3>L3</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon">
                        <i className="ion ion-person-add" />
                        </div>
                        <a href="#" className="small-box-footer"
                        onClick={() => setGrade('L3')}
                        >Plus d'info<i className="fas fa-arrow-circle-right" /></a>
                    </div>
                </div>
        </div>

        <div className='row'>
            <div className='col-2 mr-5'></div>
            <div className=" col-3">
                <div className="small-box" style={{backgroundColor: "rgb(175, 84, 89)"}}>
                    <div className="inner">
                    <h3>M1</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="icon">
                    <i className="ion ion-person-add" />
                    </div>
                    <a href="#" className="small-box-footer"
                    onClick={() => setGrade('M1')}
                    >Plus d'info<i className="fas fa-arrow-circle-right" /></a>
                </div>
            </div>
            <div className=" col-3">
                    <div className="small-box bg-warning">
                        <div className="inner">
                        <h3>M2</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="icon">
                        <i className="ion ion-person-add" />
                        </div>
                        <a href="#" className="small-box-footer"
                        onClick={() => setGrade('M2')}
                        >Plus d'info<i className="fas fa-arrow-circle-right" /></a>
                    </div>
            </div>
        </div>

        <Graph grade={grade} />
    </>
  )
}

export default Header
