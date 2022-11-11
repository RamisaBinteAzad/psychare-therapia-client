import React, { useContext, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewsRow from "./MyReviewsRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  // user er upore base kore data ta load korte hobe

  const [myReviews, setmyReviews] = useState([]);
  console.log(myReviews);

  useEffect(() => {
    fetch(
      `https://psychare-therapia-server.vercel.app/myReviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setmyReviews(data));
  }, [user?.email]);
  //  const handleStatusUpdate = (id) => {
  //    fetch(`https://psychare-therapia-server.vercel.app/myReviews/${id}`, {
  //      method: "PATCH",
  //      headers: {
  //        "content-type": "application/json",
  //      },
  //      body: JSON.stringify({  }),
  //    })
  //      .then((res) => res.json())
  //      .then((data) => {
  //        console.log(data);
  //        if (data.modifiedCount > 0) {

  //          const remaining = myReviews.filter((odr) => odr._id !== id);
  //          const approving = myReviews.find((odr) => odr._id === id);
  //          approving.status = "Approved";

  //          const newOrders = [approving, ...remaining];
  //          setmyReviews(newOrders);
  //        }
  //      });
  //  };

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );

    if (proceed) {
      fetch(`https://psychare-therapia-server.vercel.app/myReviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");

            const remaining = myReviews.filter((odr) => odr._id !== id);
            setmyReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="text-center mb-4 ">
        <span className="display-4 mt-5 fw-bold pink me-3">My</span>
        <span className=" display-4 dark-blue ">Reviews</span>
      </div>
      <Container>
        {myReviews.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="fw-bold">No reviews were added</h1>
          </div>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4 mb-5">
            {myReviews.map((myReview) => (
              //          {user?.uid ? (
              //   <>

              //   </>
              // ) : (
              //   <div className="d-flex justify-content-center align-items-center">
              //     <p> No Reviews Are Added</p>
              //   </div>
              // )}

              <MyReviewsRow
                key={myReview._id}
                myReview={myReview}
                handleDelete={handleDelete}
                //   handleStatusUpdate={handleStatusUpdate}
              ></MyReviewsRow>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default MyReviews;
