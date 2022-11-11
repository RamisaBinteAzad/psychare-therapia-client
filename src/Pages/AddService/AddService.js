import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
// id
// 636ca1a6b2ebcf3d8292fb9a
// service_id
// "01"
// title
// "Individual Counseling"
// img
// "https://i.ibb.co/Z6YVJbD/Individual-Counselinglarge.jpg"
// price
// "22.48"
// description
// "Individual Counselling is a type of psychological or talk intervention…"
// ratings
// 4.8

const AddService = () => {
     const { user, loading, setLoading } = useContext(AuthContext);
     const location = useLocation();
     const handleAddService = (event) => {
       event.preventDefault();
       const form = event.target;
       const title = form.title.value; 
         const price = form.price.value; 
          const img = form.img.value; 
      
       const ratings = form.ratings.value;
       const description = form.description.value;
       console.log(title, price, img, ratings, description);
       const service= {
         title,
         price,
         img,
         ratings,
         description,
       };

       // if(phone.length > 10){
       //     alert('Phone number should be 10 characters or longer')
       // }
       // else{

       // }
       fetch("http://localhost:5000/addService", {
         method: "POST",
         headers: {
           "content-type": "application/json",
           // authorization: `Bearer ${localStorage.getItem("genius-token")}`,
         },
         body: JSON.stringify(service),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           if (data.acknowledged) {
             alert("Your Service submitted successfully");
             form.reset();
           }
         })
         .catch((er) => console.error(er))
         .finally(() => {
           setLoading(false);
         });
     };
    return (
      <Container>
        <div className="text-center text-light">
          <h3 className="  m-3 fw-bold ">
            Add Service
            <hr className="fw-bold text-light mb-2" />
          </h3>
        </div>

        <div className="form-group border border-0 rounded p-3 shadow m-3 bg-light">
          <Form onSubmit={handleAddService}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label className="pink   mt-2 fw-bold">title</Form.Label>
              <Form.Control
                className="rounded-pill px-4 py-2"
                name="title"
                type="text"
                placeholder="Enter title"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImg">
              <Form.Label className=" pink mt-2 fw-bold">Photo URL</Form.Label>
              <Form.Control
                className="rounded-pill px-4 py-2"
                name="img"
                type="text"
                placeholder="Service Image"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicprice">
              <Form.Label className="pink   mt-2 fw-bold">Price</Form.Label>
              <Form.Control
                className="rounded-pill px-4 py-2"
                name="price"
                type="number"
                placeholder="Enter Price"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicdescription">
              <Form.Label className="pink   mt-2 fw-bold">
                Description
              </Form.Label>
              <Form.Control
                className="rounded-pill px-4 py-2"
                name="description"
                type="text"
                placeholder="Enter Text"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicratings">
              <Form.Label className="pink   mt-2 fw-bold">Ratings</Form.Label>
              <Form.Control
                className="rounded-pill px-4 py-2"
                name="ratings"
                type="text"
                placeholder="Enter ratings"
                required
              />
            </Form.Group>

            

            <div className="text-center">
              <Button
                variant="primary"
                className="btn btn-bg-navy text-white  border-0  rounded w-50 p-2 text-center"
                type="submit"
              >
                Add Service
              </Button>
            </div>

            {/* <Form.Text className="text-danger">{error}</Form.Text> */}
          </Form>
        </div>
      </Container>
    );
};

export default AddService;