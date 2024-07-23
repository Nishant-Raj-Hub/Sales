import * as Yup from 'yup';

export const registrationSchema = Yup.object({
    firstname: Yup.string().min(2).max(15).required("Please enter your firstname"),
    lastname: Yup.string().min(2).max(15).required("Please enter your lastname"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(5).required("Please enter your password")
})