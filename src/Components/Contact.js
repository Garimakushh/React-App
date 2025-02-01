import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-info">Contact Us</h1>
      <div className="container">
        <div class="mb-3">
          <label class="form-label mb-3">Name</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Mobile number</label>
          <input
            type="email"
            class="form-control mb-3"
            placeholder="Enter mobile number"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control mb-3"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" 
          class="form-label mb-3">Example textarea</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mb-3">Submit feedback</button>
      </div>
    </div>
  );
};

export default Contact;
