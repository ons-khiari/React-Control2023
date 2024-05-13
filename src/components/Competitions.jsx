import React from 'react'
import competitionsData from '../api/db.json'
import Competition from './Competition'
import { Table } from 'react-bootstrap';

function Competitions() {
  return (
      <Table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Fees</th>
                  <th>Date</th>
                  <th>Details</th>
              </tr>
          </thead>
          <tbody>
              {competitionsData.competitions.map((competition) => (
                  <Competition key={competition.id} competition={competition} />
              ))}
          </tbody>
      </Table>
  )
}

export default Competitions
