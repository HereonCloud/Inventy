import * as Yup from "yup";

export const AddProductSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short").required("This field is required"),
  price: Yup.number()
    .min(1, "Should be greater than 1")
    .required("This field is required"),
  quantity: Yup.number()
    .integer()
    .min(1, "Should be greater than 1")
    .required("This field is required"),
  unit: Yup.string()
    .min(1, "Please input more than 1 character")
    .required("This field is required"),
});
