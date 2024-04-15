import * as Yup from "yup";

export const FormSchema=Yup.object({
name:Yup.string().min(5).max(10).required("the name field is required"),
email:Yup.string().email().required("the email field is required"),
password:Yup.string().required("The Password Field is required")
});