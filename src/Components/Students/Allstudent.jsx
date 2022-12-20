import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie';
import animationData from '../Anim/98431-loading-animation.json'

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

    const navigate = useNavigate()

    // Component navigation
    var Editstudent = (data) => {
        navigate(`/Editstudent/${data.id}`)
    }
    var Viewstudent = (data) => {
        navigate(`/Viewstudent/${data.id}`)
    }

    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        dataLoad()
    }, [])

    let dataLoad = async () => {
        setloading(true)
        let date = await axios.get("https://630098ce59a8760a757cc0bc.mockapi.io/Student")
        console.log(date);
        setproduct(date.data)
        setloading(false)

    }

    let dataDelete = async (id) => {
        try {
            await axios.delete(`https://630098ce59a8760a757cc0bc.mockapi.io/Groot/${id}`)
            dataLoad()
        } catch (error) {

        }
    }

    return (
        <>
            {
                loading ? <Lottie className="Anime" options={defaultOptions}height={400}width={400}/> : <div className="row">
                    <div className="card shadow mb-4">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
                                            product?.map((value, index) => {
                                                return (
                                                    <>
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{value.Firstname}</td>
                                                            <td>{value.Lastname}</td>
                                                            <td>{value.Location}</td>
                                                            <td>{value.Email}</td>
                                                            <td>{value.DOB}</td>
                                                            <td>{value.Education}</td>
                                                            <td>
                                                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                                                    <button onClick={() => { Viewstudent(value) }} type="button" class="btn btn-primary m-1">View</button>
                                                                    <button onClick={() => { Editstudent(value) }} type="button" class="btn btn-warning m-1">Edit</button>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                                                    <button onClick={() => { dataDelete(value.id) }} type="button" class="btn btn-danger m-1">Delete</button>
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
            }
        </>
    )
}

export default Allstudent