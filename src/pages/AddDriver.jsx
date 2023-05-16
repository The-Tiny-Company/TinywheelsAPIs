import React, { useState } from 'react'
import {useFormik} from 'formik'
import { DriverShcema } from '../schema/driveryup'
import axios from 'axios'
import { Alert } from '@mui/material'


//cne
//fullname
//email
//phone
//address street suite city zipcode
//licensetype A OR D 
//starDate todayDate
//rating default 0
//status = default Disponible
//img == null For now
//vehicule = null
function AddDriver() {
  const [alert,setAlert]=useState(false)
  const {values,errors,touched,isSubmitting,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
      cne:"",
      fullname:"",
      email:"",
      phone:"",
      street:"",
      suite:"",
      city:"",
      zipcode:"",
      licenseType:"",
    },
    validationSchema : DriverShcema,
    onSubmit : async values =>{
      var date = new Date();
      var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                          .toISOString()
                          .split("T")[0];
        await axios.post("http://localhost:8080/api/v1/drivers",{
          cne : values.cne,
          fullname : values.fullname,
          email : values.email,
          phone : values.phone,
          licenseType : values.licenseType,
          rating : 0,
          starDate : dateString,
          status : "DISPONIBLE",
          address:{
            street : values.street,
            suite : values.suite,
            zipcode : values.zipcode,
            city : values.city
          }
        }).then(alertTimer)
        .catch(err=>console.log(err))
    }
  })

  const alertTimer=()=>{
    setAlert(true)
    setTimeout(()=>{
      setAlert(false)
    },3000)
  }


  return (
    <div className='AddForm'>
      <form onSubmit={handleSubmit}>
        <div className="form_row">
        <label className='label'>CNE <span>*</span></label>
        <div className="form_input">
          <input 
          value={values.cne}
          onChange={handleChange}
          onBlur={handleBlur}
          id="cne"
          type="text"
          placeholder='insert CNE Here'
          className={errors.cne &&touched.cne ? "input-error" : ""}
        />
        <p className={errors.cne &&touched.cne ? "error-mssg" : ""}>{touched.cne ? errors.cne : ""}</p>
        </div>
        </div>
        <div className="form_row">
        <label className='label'>Name <span>*</span></label>
        <div className="form_input">
          <input 
          value={values.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
          id="fullname"
          type="text"
          placeholder='insert Name Here'
          className={errors.fullname && touched.fullname ? "input-error" : ""}
        />
        <p className={errors.fullname && touched.fullname ? "error-mssg" : ""}>{touched.fullname ? errors.fullname : ""}</p>
        </div>
        </div>
        <div className="form_row">
        <label className='label'>Email <span>*</span></label>
        <div className="form_input">
          <input 
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          type="email"
          placeholder='insert Email Here'
          className={errors.email && touched.email ? "input-error" : ""}
        />
        <p className={errors.email && touched.email ? "error-mssg" : ""}>{touched.email ? errors.email : ""}</p>
        </div>
        </div>
        <div className="form_row">
        <label className='label'>Phone <span>*</span></label>
        <div className="form_input">
          <input 
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          id="phone"
          type="text"
          placeholder='insert Phone Here'
          className={errors.phone && touched.phone ? "input-error" : ""}
        />
        <p className={errors.phone && touched.phone ? "error-mssg" : ""}>{errors.phone}</p>
        </div>
        </div>
        <div className="form_row">
        <label className='label'>Address <span>*</span></label>
        <div className="form_row_2pack">
         <div className="form_input">
         <input 
          value={values.street}
          onChange={handleChange}
          onBlur={handleBlur}
          id="street"
          type="text"
          placeholder='Street'
          className={errors.street && touched.street ? "input-error" : ""}
        />
        <p className={errors.street &&touched.street ? "error-mssg" : ""}>{touched.street ? errors.street : ""}</p>
         </div>
        <div className="form_input">
        <input 
          value={values.suite}
          onChange={handleChange}
          onBlur={handleBlur}
          id="suite"
          type="text"
          placeholder='Suite'
          className={errors.suite && touched.suite ? "input-error" : ""}
        />
        <p className={errors.suite &&touched.suite ? "error-mssg" : ""}>{touched.suite ? errors.suite : ""}</p>
        </div>
        </div>
        <div className="form_row_2pack">
<div className="form_input">
<input 
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          id="city"
          type="text"
          placeholder='City'
          className={errors.city && touched.city ? "input-error" : ""}
        />
        <p className={errors.city &&touched.city ? "error-mssg" : ""}>{touched.city ? errors.city : ""}</p>
</div>
<div className="form_input">
<input 
          value={values.zipcode}
          onChange={handleChange}
          onBlur={handleBlur}
          id="zipcode"
          type="text"
          placeholder='Zipcode'
          className={errors.zipcode && touched.zipcode ? "input-error" : ""}
        />
        <p className={errors.zipcode &&touched.zipcode ? "error-mssg" : ""}>{touched.zipcode ? errors.zipcode : ""}</p>
</div>
        </div>
        </div>
        <div className="form_row">
        <label className='label'>License Type <span>*</span></label> 
       <div className="form_input">
         <select 
          value={values.licenseType}
          name="licenseType" 
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.licenseType && touched.licenseType ? "input-error" : ""}
        >
          <option value="A">A</option>
          <option value="D">D</option>
        </select>
        <p className={errors.licenseType &&touched.licenseType ? "error-mssg" : ""}>{touched.licenseType ? errors.licenseType : ""}</p>
       </div>
        </div>
        <input disabled={isSubmitting}  type="submit" className='submitBtn' value="Submit" />
      </form>
      <div className="alert" style={!alert ? {opacity : 0 ,    transform: "translateX(0%)"} : {opacity : 1 ,     transform: "translateX(-5%)"}}>
        <Alert severity='success'>
            Driver Added Successfully
        </Alert>
      </div>
    </div>
  )
}

export default AddDriver
