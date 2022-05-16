import React from "react";
import "./Forms.css";

const FlightForms = () => {
  return (
    <>
      <div className="container-fluid">
        <div class="row column_title">
          <div class="col-md-12">
            <div class="page_title">
              <h2>Flights</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="box">
              <hr className="line-hr" />
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="forms__controls">
                      <div className="form__control">
                        <label>Name</label>
                        <input type="text" name="name" id="name" />
                      </div>
                      <div className="form__control">
                        <label>Age</label>
                        <input type="number" name="age" id="age" />
                      </div>
                      <div className="form__control">
                        <label>Position</label>
                        <input type="text" name="position" id="position" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="forms__controls">
                      <div className="form__control">
                        <label>Name</label>
                        <input
                          type="text"
                        
                          name="name"
                          id="name"
                         
                        />
                      </div>
                      <div className="form__control">
                        <label>Age</label>
                        <input
                          type="number"
                         
                          name="age"
                          id="age"
                          
                        />
                      </div>
                      <div className="form__control">
                        <label>Position</label>
                        <input
                          type="text"
                         
                          name="position"
                          id="position"
                          
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightForms;
