import React, { useState } from "react";
import { useHistory , useLocation } from "react-router-dom";


const Update = () => {

 let history = useHistory();
 let location = useLocation();
 
 console.log(location.state.courses);

  const [course, setCourse] = useState({
    id: location.state.courses.id,
    courseName: location.state.courses.courseName,
    rating: location.state.courses.rating,
    price: location.state.courses.price,
    trainerName: location.state.courses.trainerName,
    numberOfDays: location.state.courses.numberOfDays
  });

  const onSubmit = (e) => {      
    e.preventDefault();
    history.push({
        pathname : "/confirmCourses",
        state : {
            headerValue: 'Form to confirm courses before editing it',
            paragraphValue: 'Confirm the Courses that is going to be edited',            
            id: id,
            courseName: courseName,
            rating: rating,
            price: price,
            trainerName: trainerName,
            numberOfDays: numberOfDays           
        }
    });
  };




  const { id, courseName, rating, price, trainerName, numberOfDays } = course;

  const onInputChange = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
          <h2>Edit the Courses</h2>
          <p className="description">Form to edit courses and View it</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <table className="table table-sm table-dark">
              <thead>
                <tr>
                  <th scope="col">Label</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                        <tr>
                            <td>Id</td>
                            <td><input type="text" name="id" className="form-control" value={id} onChange={event => onInputChange(event)} readOnly/></td>
                        </tr>
                        <tr>
                            <td>Course Name</td>
                            <td><input type="text" name="courseName" className="form-control" value={courseName} onChange={event => onInputChange(event)}/></td>
                        </tr>                            
                        <tr>
                            <td>Rating</td>
                            <td><input type="text" name="rating" className="form-control" value={rating} onChange={event => onInputChange(event)}/></td>
                        </tr>                            
                        <tr>
                            <td>Price</td>
                            <td><input type="text" name="price" className="form-control" value={price} onChange={event => onInputChange(event)}/></td>
                        </tr>                            
                        <tr>
                            <td>Trainer Name</td>
                            <td><input type="text" name="trainerName" className="form-control" value={trainerName} onChange={event => onInputChange(event)}/></td>
                        </tr>                            
                        <tr>
                            <td>Number of Days</td>
                            <td><input type="text" name="numberOfDays" className="form-control" value={numberOfDays} onChange={event => onInputChange(event)}/></td>
                        </tr>                            
                        <tr>
                            <td colSpan="2" style={{textAlign:"center"}}><button type="submit" className="btn btn-primary" >Submit</button></td>
                        </tr>                            
                        </tbody>
                </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
