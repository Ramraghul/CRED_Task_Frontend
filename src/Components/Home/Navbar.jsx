import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a href='!#' className="navbar-brand"><h3>Student Management System</h3></a>
                    <form className="d-flex justify-content-between">
                            <a href='/' className="btn btn-outline-primary me-3" type="submit">Home</a>
                            <a href='/Createstudent' className="btn btn-outline-primary" type="submit">Create Student</a>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar