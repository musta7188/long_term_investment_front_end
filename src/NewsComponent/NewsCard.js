import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import ModalOpenSummary from "./ModalOpenSummary";
import { useStyles, convertDate } from "../styles/NewsCardStyles";

export default function NewsCard({ news, symbol }) {
  const classes = useStyles();

  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    convertDate(news["published_at"], setDateTime);
  }, []);


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {symbol}
          </Avatar>
        }
        title={news["title"]}
        subheader={dateTime}
      />
      <CardMedia
        className={classes.media}
        image={
          news["main_image"]
            ? news["main_image"]["original_url"]
            : "https://m.economictimes.com/thumb/msid-70616931,width-3684,height-2068,resizemode-4,imgsize-550306/stocks-market.jpg"
        }
        title="main news image"
      />
      <CardContent>
        <Typography>
          <a href={news["link"]} target="_blank">
            {" "}
            Read Full Article{" "}
          </a>
        </Typography>
      </CardContent>

      <Typography>
        <div style={{ textAlign: "right", margin: 20 }}>
          <ModalOpenSummary summary={news["summary"]} />
        </div>
      </Typography>
    </Card>
  );
}
