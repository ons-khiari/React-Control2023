import React from 'react'

function Competition({ competition }) {
    return (
        <>
            <tr>
                <td>{competition.name}</td>
                <td>{competition.fees}</td>
                <td>{competition.date}</td>
                <td>
                    <a href={`/competitionDetails/${competition.id}`}>Details</a>
                </td>
            </tr>
        </>
    )
}

export default Competition
