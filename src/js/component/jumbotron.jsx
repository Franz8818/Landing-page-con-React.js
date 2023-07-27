import React from "react";


const Jumbotron = () => {
    return (
<div className="p-3 mb-2 bg-light text-dark">
  <h1 className="display-4">A Warm Welcome!</h1>
  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ullam sunt quidem quia eius nemo quam cum rerum ea maiores ducimus dolorum adipisci vel, unde blanditiis eveniet quis? Facilis, tempore.</p>
  {/* <hr className="my-4"/> */}
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
  </p>
</div>
    );
  };

export default Jumbotron;