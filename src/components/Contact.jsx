import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-[600px] bg-base-200 mt-16 font-sans">
        <div className="hero-content flex-col lg:flex-row-reverse border-x-4 border-sky-500">
          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-bold mx-auto w-fit m-8 border-y-8 border-cyan-500 border-x-0">
              Contact Us now!
            </h3>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
