import React, { useState } from "react";

const Addpublisher = () => {
  const [authordata, setauthordata] = useState({
    name: "",
      email: '', authortype: '',
      phone: '',
    password:''
  });
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setauthordata({
            ...authordata,
            [name]: value

        })}
  return (
    <>
      <div className="form-set">
      <form style={{width:"25rem",border:"1px solid #ccc",padding:"2rem",height:"26rem",boxShadow:"3px 3px 5px 2px #f5d3d0,-3px -3px 5px 2px #f5d3d0"}} >
        Name
        <input type="text" name="name" value={authordata.name} onchange={handleChange}></input>
        <br></br>
        Author Type
        <input
          type="text"
          name="authortype"
          value={authordata.authortype} onchange={handleChange}
        ></input>
        <br></br>
        
        Phone
        <input
          type="number"
          name="phone"
          value={authordata.phone} onchange={handleChange}
        ></input>
        <br></br>
        Email
        <input type="email" name="email" value={authordata.email} onchange={handleChange}></input>
                  <br></br>
                  Password
        <input
          type="password"
          name="password"
          value={authordata.password} onchange={handleChange}
        ></input>
        
              <button class="btn btn-primary mt-3">Submit</button>
      </form>

      </div>
          </>
  );
};

export default Addpublisher;
