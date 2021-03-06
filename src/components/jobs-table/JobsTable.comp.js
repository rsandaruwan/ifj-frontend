import React from "react";
import {Table  } from "react-bootstrap";

export const JobsTable = ({jobs}) => {
  return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                    
                </tr>
            </thead>
            <tbody>
               {jobs.length ? jobs.map(row=>(
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.subject}</td>
                    <td>{row.status}</td>
                    <td>{row.addedat}</td>
                </tr>
               )):
                <tr>
                    <td colSpan="4" className="text-center">No jobs show</td>
                </tr>
               }
                
            </tbody>
        </Table>
    </div>
  );
};
