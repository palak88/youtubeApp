"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      router.push("/dashboard");
    }
  }, []);

  const handleLogin = () => {
    if (email === "test@user.com" && password === "password@123") {
      localStorage.setItem("auth", "true");
      router.push("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <Container>
      <Box textAlign="center" mt={5}>
        <Typography variant="h4">Login</Typography>
      </Box>
      <Box mt={3}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};
