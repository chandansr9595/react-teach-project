import React from "react";
import Button from "@material-ui/core/Button";
import { openPDF } from "./openPDF";
import { base64string } from "./pdf.js";

export default function Demo() {
  const password = '123456';
  const onOpenPDF = () => {
    openPDF(base64string, password);
  };
  return (
    <Button variant="contained" color="primary" onClick={() => onOpenPDF()}>
      Open PDF
    </Button>
  );
}
