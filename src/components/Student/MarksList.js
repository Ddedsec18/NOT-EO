import React from 'react'

function MarksList({data}) {
  return (
    <div>
      <table className="table table-hover">
        <thead>
            <th>Code</th>
            <th>Module</th>
            <th>Score</th>
            <th>Semestre</th>
        </thead>
        <tbody> 
        {
                data.map(data=>{
                    return(
                        <tr key={data.marks.id}>
                            <td>{data.marks.module.code}</td>
                            <td>{data.marks.module.name}</td>
                            <td>{data.marks.score}</td>
                            <td>{data.marks.semester}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>

    </div>
  )
}

export default MarksList
