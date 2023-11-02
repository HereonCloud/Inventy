import * as Yup from "yup";

export const AddProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Please input more than 1 character")
    .required("This field is required"),
  price: Yup.number()
    .min(1, "Should be greater than 1")
    .test("Check prefix", "This field should not start with zero", (v) => {
      const input = String(v);
      if (input && input.charAt(0) == "0") {
        return false;
      } else return true;
    })
    .required("This field is required"),
  quantity: Yup.number()
    .integer("Quantity must be an integer")
    .min(1, "Should be greater than 1")
    .test("Check prefix", "This field should not start with zero", (v) => {
      const input = String(v);
      if (input && input.charAt(0) == "0") {
        return false;
      } else return true;
    })
    .required("This field is required"),
  unit: Yup.string()
    .min(1, "Please input more than 1 character")
    .required("This field is required"),
});
