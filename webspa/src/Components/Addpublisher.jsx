import React, { useState } from "react";

const Addpublisher = () => {
  const [publisherdata, setpublisherdata] = useState({
    name: "",
    activities: "",
    about: "",
    city: "",
    license: "",
    expiry: "",
    copyoflicense: "",
    location: "",
    website: "",
  });
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setpublisherdata({
            ...publisherdata,
            [name]: value

        })}
  return (
    <>
      <div className="form-set">
      <form style={{width:"30rem",border:"1px solid #ccc",padding:"2rem",height:"42rem",boxShadow:"3px 3px 5px 2px #bfd4f5,-3px -3px 5px 2px #bfd4f5"}} >
        Publishing House Name
        <input type="text" name="name" value={publisherdata.name} onchange={handleChange}></input>
        <br></br>
        Publishing House Activities
        <input
          type="text"
          name="activities"
          value={publisherdata.activities} onchange={handleChange}
        ></input>
        <br></br>
        About Publishing House
        <input type="text" name="about" value={publisherdata.about} onchange={handleChange}></input>
        <br></br>
        City
        <input type="text" name="city" value={publisherdata.city} onchange={handleChange}></input>
        <br></br>
        License Number
        <input
          type="number"
          name="license"
          value={publisherdata.license} onchange={handleChange}
        ></input>
        <br></br>
        Expiry date and Validity
        <input type="text" name="expiry" value={publisherdata.expiry} onchange={handleChange}></input>
        <br></br>A copy of License
        <input
          type="text"
          name="copyoflicense"
          value={publisherdata.copyoflicense} onchange={handleChange}
        ></input>
        <br></br>
        Location
        <input
          type="text"
          name="location"
          value={publisherdata.location} onchange={handleChange}
        ></input>
        <br></br>
        Website
              <input type="text" name="website" value={publisherdata.website} onchange={handleChange}></input>
              
              <br></br>
              <button class="btn btn-primary mt-3">Submit</button>
      </form>

      </div>
          </>
  );
};

export default Addpublisher;
