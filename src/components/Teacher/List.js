import React from "react";


function List(props) {

  return (
    <div>
      {(props.modules)?
      props.modules.map((m)=>{
        <>
            <span>{m.code}</span>
        </>
       })
       : '-'
        }  
    </div>
  )
}

export default List

