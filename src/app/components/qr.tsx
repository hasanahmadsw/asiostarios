import { Button, Paper } from "@mui/material";
import QRCode from "qrcode.react";
import React from "react";
export interface QRProps {
  url: string;
}

export const QR: React.FC<QRProps> = ({ url }) => {
  const downloadQRCode = () => {
    const canvas = document.getElementById("qr-gen");
    // @ts-ignore
    const pngUrl = canvas.toDataURL("image/png");
    //   .replace("image/png", "image/octet-stream");
    // eslint-disable-next-line prefer-const
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `qr.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <Paper sx={{ padding: "0.5rem", background: "none" }}>
      <QRCode
        id="qr-gen"
        value={url}
        size={200}
        level={"H"}
        includeMargin={true}
      />
      <Button
        variant="contained"
        onClick={downloadQRCode}
        // size="large"
        sx={{ mt: "2rem", padding: "8px 40px", fontSize: "18px" }}
      >
        Download
      </Button>
    </Paper>
  );
};
