import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function NewsCard({news, symbol}) {
  debugger
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [dateTime, setDateTime] = useState("")

  useEffect(() => {
convertDate(news["published_at"] 
)
  },[])


  const convertDate = (date) =>{
let dataGet = date

let millisecond = dataGet * 1000

let newDate = new Date(millisecond)


let currentDate = newDate.toLocaleString()

setDateTime(currentDate)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        image={news["main_image"] ? news["main_image"]["original_url"] : "https://m.economictimes.com/thumb/msid-70616931,width-3684,height-2068,resizemode-4,imgsize-550306/stocks-market.jpg"}
        title="main news image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         <a href={news["link"]}target="_blank"> Read Full Article </a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          Read summary
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Summery:</Typography>
          <Typography paragraph>
         {news["summary"]}
          </Typography> 
        </CardContent>
      </Collapse>
    </Card>
  );
}