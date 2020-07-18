import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class List extends Component {

    state = {
        courses : []
    }

    componentWillMount() {
        axios.get('http://localhost:8082/SpringBootRestApiOracleJBOSS/get/all').then((response) => {
            let finaldata = response.data.sort((a, b) => parseInt(a.id) - parseInt(b.id));
            this.setState({
                courses : finaldata
            })            
        })
    }

    render() {
        let courses = this.state.courses.map((courses) => {
            return (
              
                <tr key={courses.id}> 
                                    <td> 
                                        <Link to={{pathname: '/editCourses',state: {courses: courses}}}><button type="button" className="btn btn-success btn-sm">Edit</button></Link>
                                    </td>
                                    <td>
                                    <Link to={{pathname: '/removeCourses', state: {courses: courses}}}><button type="button" className="btn btn-danger btn-sm">Remove</button></Link>
                                    </td>
                                    <th scope="row">
                                    <input type="text" style={{backgroundColor: "black",color: "#fff", fontWeight: "bold"}} name="id" id="id" value={courses.id} readOnly />
                                    </th>
                                    <td>
                                        <input type="text" style={{fontWeight: "bold"}} name="courseName" id="courseName" value={courses.courseName} readOnly />
                                    
                                    </td>
                                    <td>
                                        <input type="text" style={{fontWeight: "bold"}} name="rating" id="rating" value={courses.rating} readOnly />
                                    </td>
                                    <td>
                                        <input type="text" style={{fontWeight: "bold"}} name="price" id="price" value={courses.price} readOnly />
                                    </td>
                                    <td>
                                        <input type="text" style={{fontWeight: "bold"}} name="trainerName" id="trainerName" value={courses.trainerName} readOnly />
                                    </td>
                                    <td>
                                        <input type="text" style={{fontWeight: "bold"}} name="numberOfDays" id="numberOfDays" value={courses.numberOfDays} readOnly />
                                    </td>                                    
                </tr>
                   
            )
        })

        return (
            <div>
                <h2 style={{textAlign:"center"}}>View All Courses</h2> 
                    <div className="tablecontainer" style={{position:"absolute",right:"150px"}}>
                        <table className="table table-dark table-sm">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" colSpan="2" style={{textAlign:"center"}}>Action</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Trainer Name</th>
                                    <th scope="col">Number of Days</th>							
                                </tr>
                            </thead> 
                            <tbody>
                                {courses}
                            </tbody>                                                       
                        </table>    
                    </div>  
            </div>
    )

    }
    
};

export default List;