"use client"; // Ensure this component is client-side

import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import theme from './theme'; // Import the theme

export default function ThemeProvider({ children }) {
  return (
    <CssVarsProvider theme={theme}>
      {children}
    </CssVarsProvider>
  );
}
