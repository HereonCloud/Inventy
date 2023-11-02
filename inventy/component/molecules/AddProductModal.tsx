import { CapitalizeFirstLetter } from "@/helper/CommonUtils";
import { AddProductSchema } from "@/helper/ValidationSchema";
import { Product } from "@/src/entity/Product";
import { Modal, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import AddButton from "../atoms/AddButton";
import styles from "./styles/AddProductModal.module.scss";

interface AddProductModalProps {
  isOpen: boolean;
  setIsOpen: (i: boolean) => void;
  onSubmit: (p: Omit<Product, "id">) => void;
  error: string;
  setError: (s: string) => void;
}

const AddProductModal = (p: AddProductModalProps) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      quantity: "",
      unit: "",
    },
    initialTouched: {
      name: false,
      price: false,
      quantity: false,
      unit: false,
    },
    validationSchema: AddProductSchema,
    onSubmit: (values) => {
      p.onSubmit({
        name: CapitalizeFirstLetter(values.name),
        price: values.price ? Number(values.price) : 0,
        quantity: values.quantity ? Number(values.quantity) : 0,
        unit: values.unit,
      });
    },
  });

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    resetForm,
    touched,
    setFieldTouched,
    submitForm,
    setSubmitting,
  } = formik;

  useEffect(() => {
    if (p.error) {
      setSubmitting(false);
    } else {
      resetForm();
      p.setIsOpen(false);
    }
  }, [submitForm]);

  return (
    <Modal open={p.isOpen} className={styles.modal}>
      <form className={styles.content} onSubmit={handleSubmit}>
        <TextField
          fullWidth={true}
          label="Product Name"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          helperText={touched.name && (errors.name || p.error)}
          onBlur={() => setFieldTouched("name", true)}
          onClick={() => p.setError("")}
        />
        <TextField
          type={"number"}
          fullWidth={true}
          label="Price"
          id="price"
          name="price"
          value={values.price}
          onChange={handleChange}
          helperText={touched.price && errors.price}
          onBlur={() => {
            setFieldTouched("price", true);
          }}
          onClick={() => p.setError("")}
        />
        <TextField
          type={"number"}
          fullWidth={true}
          label="Initial Quantity"
          id="quantity"
          name="quantity"
          value={values.quantity}
          onChange={handleChange}
          helperText={touched.quantity && errors.quantity}
          onBlur={() => setFieldTouched("quantity", true)}
          onClick={() => p.setError("")}
        />
        <TextField
          id="unit"
          fullWidth={true}
          label="Unit"
          name="unit"
          value={values.unit}
          onChange={handleChange}
          helperText={touched.unit && (errors.unit || p.error)}
          onBlur={() => setFieldTouched("unit", true)}
          onClick={() => p.setError("")}
        />
        <div className={styles.buttonSection}>
          <AddButton
            onClick={() => {
              resetForm(), p.setIsOpen(false);
            }}
          >
            Cancel
          </AddButton>
          <AddButton
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </AddButton>
        </div>
      </form>
    </Modal>
  );
};
export default AddProductModal;
