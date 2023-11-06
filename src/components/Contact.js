import React from "react";

const Contact = () => {

  const send = (e) =>{
    e.preventDefault();
    const name = document.querySelector('#exampleForm')
    const text = document.querySelector('#exampleFormControlTextarea1')
    const email = document.querySelector('#exampleFormControlInput1')
    if(name.value && text.value && email.value)
    {
      alert('Send Successfully')
      name.value=''
      text.value=''
      email.value=''
    }else{
      alert("Enter all the details")
    }
    // return alert(val.value)
  }
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="https://store-images.s-microsoft.com/image/apps.59592.d8839038-491a-49e4-b133-d96d97ad1651.33bfcee5-0bc5-48db-b225-efe4b139d375.12421a52-d4ed-46ba-a16c-59797b978fdb"
              alt="Contact Us"
              height="400px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleForm"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-dark" onClick={(e)=> send(e)}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
