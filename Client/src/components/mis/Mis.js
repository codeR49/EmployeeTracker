import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Table.css'
import DevelopmentUrl from '../../data/api';

const Mis = () => {

    const [mis, setMis] = useState([]);

    useEffect(() => {
        axios.get(DevelopmentUrl + `/mis`)
            .then((res) => {

                setMis(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div className="datatable">

                <div className="datatableTitle">
                    MIS List
                </div>
                <div className="tablestyle" style={{ height: "400px", overflow: "auto" }}>


                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sl No</th>
                                <th scope="col">CATEGORY</th>
                                <th scope='col'>FUNCTION</th>
                                <th scope="col">DEPLOYMENT CATEGORY</th>
                                <th scope="col">EMP STATUS</th>
                                <th scope="col">ALCHEMY ID</th>
                                <th scope="col">RESOURCE CLIENT ID</th>
                                <th scope="col">CLIENT</th>
                                <th scope="col">LOB</th>
                                <th scope="col">CLIENT-LOB</th>
                                <th scope="col">DEPLOYMENT STATUS</th>
                                <th scope="col">NAME OF THE RESOURCE</th>
                                <th scope="col">GENDER</th>
                                <th scope="col">FATHER NAME</th>
                                <th scope="col">DOB</th>
                                <th scope="col">SKILL</th>
                                <th scope="col">SKILL CATEGORY</th>
                                <th scope="col">SKILL FUNCTION</th>
                                <th scope="col">DOMAIN</th>
                                <th scope="col">TECHNOLOGY</th>
                                <th scope="col">DESIGNATION</th>
                                <th scope="col">EXPERIENCE</th>
                            </tr>
                        </thead>
                        <tbody>

                            {mis.map((item, index) => {
                                return (
                                    <tr>

                                        <th scope="row">{index+1}</th>

                                        <td>
                                            {item.CATEGORY}
                                        </td>
                                        <td >
                                            {item.FUNCTION}
                                        </td>
                                        <td >
                                            {item["DEPLOYMENT CATEGORY"]}
                                        </td>
                                        <td>
                                            {item["EMP STATUS"]}
                                        </td>
                                        <td>
                                            {item["ALCHEMY ID"]}
                                        </td>
                                        <td>
                                            {item["RESOURCE CLIENT ID"]}
                                        </td>
                                        <td>
                                            {item.CLIENT}
                                        </td>
                                        
                                        <td>
                                            {item.LOB}
                                        </td>
                                        <td>
                                            {item["CLIENT-LOB"]}
                                        </td>
                                        <td>
                                            {item["DEPLOYMENT STATUS"]}
                                        </td>
                                        <td>
                                            {item["NAME OF THE RESOURCE"]}
                                        </td>
                                        <td>
                                            {item.GENDER}
                                        </td>
                                        <td>
                                            {item["FATHER NAME"]}
                                        </td>
                                        <td>
                                            {item.DOB}
                                        </td>
                                        <td>
                                            {item.SKILL}
                                        </td>
                                        <td>
                                            {item["SKILL CATEGORY"]}
                                        </td>
                                        <td>
                                            {item["SKILL FUNCTION"]}
                                        </td>
                                        <td>
                                            {item.DOMAIN}
                                        </td>
                                        <td>
                                            {item.TECHNOLOGY}
                                        </td>
                                        <td>
                                            {item.DESIGNATION}
                                        </td>
                                        <td>
                                            {item.EXPERIENCE}
                                        </td>
                                        
                              
                                    </tr>)
                            })}
                        </tbody>

                    </table>

                </div>
                <div className="paginateDiv">

                </div>
            </div>
        </>
    )
}

export default Mis