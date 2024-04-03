import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const PaymentSection = () => {
  const [creditCard, setCreditCard] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const formatCreditCard = (value) => {
    return value.replace(/\s/g, "").replace(/(.{4})/g, "$1 ").trim();
  };

  const handleCreditCardChange = (event) => {
    const formattedValue = formatCreditCard(event.target.value);
    setCreditCard(formattedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      creditCard,
      cvv,
      expiryDate,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <TextField
        label="Credit Card Number"
        variant="outlined"
        fullWidth
        required
        value={creditCard}
        onChange={handleCreditCardChange}
        inputProps={{
          maxLength: 19,
          pattern: "\\d{4} \\d{4} \\d{4} \\d{4}",
          title: "Please enter a 16-digit credit card number",
        }}
        placeholder="1234 5678 9123 1234"
        margin="normal"
      />
      <TextField
        label="CVV"
        variant="outlined"
        fullWidth
        required
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        inputProps={{
          maxLength: 3,
          pattern: "\\d{3}",
        }}
        placeholder="123"
        margin="normal"
      />
      <TextField
        label="Date of Expiry"
        type="month"
        variant="outlined"
        fullWidth
        required
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        margin="normal"
      />
      
    </Box>
  );
};

export default PaymentSection;
