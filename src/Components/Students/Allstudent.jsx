import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import animationData from '../Anim/98431-loading-animation.json'
import {API} from '../Config.js'

function Allstudent() {

    //Loading animation;
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    //Alert function;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const navigate = useNavigate()

    // Component navigation
    var Editstudent = (data) => {
        navigate(`/Editstudent/${data.id}`)
    }

    //Store Data
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [loading, setloading] = useState(false)

    useEffect(() => {
        dataLoad()
    }, [])

    let dataLoad = async () => {
        try {
            setloading(true)
            let date = await axios.get(`${API.Link}`)
            setAllData(date.data);
            setFilteredData(date.data)
            setloading(false)
        } catch (error) {
            console.log(error);
        }
    }

    //Handle to value
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = allData.filter((data) => {
            return data.Firstname.search(value) !== -1;
        });
        setFilteredData(result);
    }

    let dataDelete = async (id) => {
        try {
            let sure = await swal("Are you sure to Delete?", {
                buttons: ["No", true],
            });
            if (sure === true) {
                await axios.delete(`${API.Link}/${id}`)
                Toast.fire({ icon: 'success', title: 'Student Data deleted' })
                dataLoad()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="form-floating mb-3 find">
                <input type="email" className="form-control" id="floatingInput" placeholder="ex:name@example.com" onChange={(event) => handleSearch(event)} />
                <label htmlFor="floatingInput">First Name</label>
            </div>

            {
                loading ? <Lottie className="Anime" options={defaultOptions} height={400} width={400} /> : <div className="row mt-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Firstname</th>
                                                <th>Lastname</th>
                                                <th>Location</th>
                                                <th>Email</th>
                                                <th>DOB</th>
                                                <th>Education</th>
                                                <th>Action</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                filteredData?.map((value, i) => {
                                                    return (
                                                        <>
                                                            <tr key={value.id}>
                                                                <td>{i + 1}</td>
                                                                <td>{value.Firstname}</td>
                                                                <td>{value.Lastname}</td>
                                                                <td>{value.Location}</td>
                                                                <td>{value.Email}</td>
                                                                <td>{value.DOB}</td>
                                                                <td>{value.Education}</td>
                                                                <td>
                                                                    <div className="btn-group me-2" role="group" aria-label="Second group">
                                                                        {/* <button onClick={() => { Viewstudent(value) }} type="button" className="btn btn-primary m-1">View</button> */}
                                                                        <button onClick={() => { Editstudent(value) }} type="button" className="btn btn-warning m-1">Edit</button>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="btn-group me-2" role="group" aria-label="Second group">
                                                                        <button onClick={() => { dataDelete(value.id) }} type="button" className="btn btn-danger m-1">Delete</button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Allstudent