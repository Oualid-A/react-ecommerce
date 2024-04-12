import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import PaymentSection from "./PaymentSection";

const PayForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Payment has been submitted successfully");
  };

  return (
    <Box
      component="section"
      className="border-r-2"
      sx={{ p: 4, maxWidth: "lg", mx: "auto" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5">Contact</Typography>
        <TextField
          fullWidth
          id="email"
          label="Email or mobile phone number"
          variant="outlined"
          {...register("email", {
            required: "Email is required",
            pattern: /^\S+@\S+$/i,
          })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
          margin="normal"
        />
        <Typography variant="h5" mb={2}>
          Delivery
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="firstName"
              label="First Name"
              variant="outlined"
              {...register("firstName", { required: "First name is required" })}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastName"
              label="Last Name"
              variant="outlined"
              {...register("lastName", { required: "Last name is required" })}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          id="address"
          label="Address"
          variant="outlined"
          {...register("address", { required: "Address is required" })}
          error={Boolean(errors.address)}
          helperText={errors.address?.message}
          margin="normal"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="postalCode"
              label="Postal Code"
              variant="outlined"
              {...register("postalCode", {
                required: "Postal code is required",
              })}
              error={Boolean(errors.postalCode)}
              helperText={errors.postalCode?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="city"
              label="City"
              variant="outlined"
              {...register("city", { required: "City is required" })}
              error={Boolean(errors.city)}
              helperText={errors.city?.message}
            />
          </Grid>
        </Grid>

        <PaymentSection />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          className="!py-2 !rounded-full !bg-black "
        >
          Check Out
        </Button>
      </form>
    </Box>
  );
};

export default PayForm;
