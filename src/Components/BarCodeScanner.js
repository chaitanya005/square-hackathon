import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Typography, Grid, Paper, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { getUserInfo } from "../features/userSlice";
import { useSelector } from "react-redux";

const BarCodeScanner = () => {
  const [data, setData] = React.useState("Scan BarCode");
  const [isScanning, setIsScanning] = React.useState(false);

  const userInfo = useSelector(getUserInfo);

  return (
    <div>
      <Grid item xs={12} style={{ margin: "5px" }}>
        <Typography variant="h4">Hello, {userInfo.name}</Typography>
      </Grid>
      {!isScanning && (
        <Button
          variant="contained"
          style={{ alignItems: "center", margin: "16px 0" }}
          onClick={() => setIsScanning(true)}
          startIcon={<AddAPhotoIcon />}
        >
          Scan BarCode
        </Button>
      )}
      {isScanning ? (
        <React.Fragment>
          <BarcodeScannerComponent
            width={400}
            height={250}
            onUpdate={(err, result) => {
              if (result) {
                setData(result.text);
                setIsScanning(false);
              } else setData("Scan BarCode");
            }}
          />
          <p>{data}</p>
        </React.Fragment>
      ) : (
        ""
      )}
      <Grid>
        <Grid item style={{ backgroundColor: "pink" }}>
          <Typography variant="h4" style={{ padding: "15px" }}>
            Shopping Cart
          </Typography>
        </Grid>
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Paper
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
              key={item}
            >
              <Typography fontSize={22} style={{ margin: "15px" }}>
                Prodcut Name 1
              </Typography>
              <Grid item xs={4}></Grid>
              <Typography variant="body1" style={{ margin: "15px" }}>
                Price
              </Typography>
              <DeleteIcon style={{ margin: "15px" }} />
            </Paper>
          ))}
        </Grid>
      </Grid>
      <Grid
        style={{
          position: "sticky",
          bottom: 1,
          backgroundColor: "white",
          paddingBottom: "10px",
          //   height: "100px",
        }}
      >
        <br />
        <Grid style={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography variant="h5">Total</Typography>
          <Grid item xs={1}></Grid>
          <Button
            variant="contained"
            style={{ marginRight: "25px" }}
            endIcon={<ArrowRightAltIcon />}
          >
            Place Order
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default BarCodeScanner;
