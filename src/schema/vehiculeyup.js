import * as yup from 'yup'

export const VehiculeSchema=yup.object().shape({
    matricule:yup.string().required("Required"),
    productiondate : yup.number("Must Be A Number").positive("Must be Positive"),
    vehiculetype : yup.string()
})


