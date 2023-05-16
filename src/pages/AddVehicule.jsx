import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { VehiculeSchema } from '../schema/vehiculeyup'
import { Alert, } from '@mui/material'



// private int id;
// @Column(nullable = false)
// private String matricule;
// private String img;
// private int productiondate;
// @Enumerated(EnumType.STRING)
// @Column(nullable = false)
// private Status status;
// @Enumerated(EnumType.STRING)
// @Column(nullable = false)
// private VehiculeType vehiculeType;
function AddVehicule() {
 
  const [alert,setAlert]=useState(false)
  const {values,errors,touched,isSubmitting,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
      matricule:"",
      productiondate:"",
      vehiculetype:"",
    },
    validationSchema : VehiculeSchema,
    onSubmit : async values =>{
      await axios.post("http://localhost:8080/api/v1/vehicules",{
        matricule : values.matricule,
        productiondate :values.productiondate,
        vehiculeType : values.vehiculetype,
        status : "DISPONIBLE"
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
        <label className='label'>Matricule <span>*</span></label>
        <div className="form_input">
          <input 
          value={values.matricule}
          onChange={handleChange}
          onBlur={handleBlur}
          id="matricule"
          type="text"
          placeholder='insert Matricule Here'
          className={errors.matricule &&touched.matricule ? "input-error" : ""}
        />
        <p className={errors.matricule &&touched.matricule ? "error-mssg" : ""}>{touched.matricule ? errors.matricule : ""}</p>
        </div>
        </div>
        <div className="form_row">
        <label className='label'>Production Date <span>*</span></label>
        <div className="form_input">
          <input 
          value={values.fullname}
          onChange={handleChange}
          onBlur={handleBlur}
          id="productiondate"
          type="text"
          placeholder='insert Date Here'
          className={errors.productiondate && touched.productiondate ? "input-error" : ""}
        />
        <p className={errors.productiondate && touched.productiondate ? "error-mssg" : ""}>{touched.productiondate ? errors.productiondate : ""}</p>
        </div>
        </div>
        <div className="form_row">
        <label className='label'>Vehicule Type <span>*</span></label> 
       <div className="form_input">
         <select 
          value={values.vehiculetype}
          name="vehiculetype" 
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.vehiculetype && touched.vehiculetype ? "input-error" : ""}
        >
          <option value="CAR">Car</option>
          <option value="BUS">Bus</option>
        </select>
        <p className={errors.vehiculetype &&touched.vehiculetype ? "error-mssg" : ""}>{touched.vehiculetype ? errors.vehiculetype : ""}</p>
       </div>
        </div>
        <input disabled={isSubmitting}  type="submit" className='submitBtn' value="Submit" />
      </form>
      <div className="alert" style={!alert ? {opacity : 0 ,    transform: "translateX(0%)"} : {opacity : 1 ,     transform: "translateX(-5%)"}}>
        <Alert severity='success'>
            Vehicule Added Successfully
        </Alert>
      </div>
    </div>
  )
}

export default AddVehicule
