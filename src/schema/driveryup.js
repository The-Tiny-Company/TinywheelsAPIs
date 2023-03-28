import * as yup from 'yup'


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
//cne
//fullname
//email
//phone
//address street suite city zipcode
//licensetype A OR D 
export const DriverShcema=yup.object().shape({
    cne : yup.string().max(8,"CNE Contains less than 8 characters").required("Required"),
    fullname : yup.string().required("Required"),
    email : yup.string().required("Required"),
    phone : yup.string().matches(phoneRegExp,"Phone Number is Not Valid"),
    street : yup.string().required("Required"),
    suite : yup.string().required("Required"),
    city: yup.string().required("Required"),
    zipcode : yup.string().required("Required"),
    licenseType : yup.string().required("Required")
})