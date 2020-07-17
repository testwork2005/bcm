import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Rating from '@material-ui/lab/Rating';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const revews=[
  {id:0, name:"Andrew W.", dates: "05/17/20" ,reviews:"GREAT EASY" },
  {id:1 ,name:"Pekka H.", dates: "05/07/20" ,reviews:"Excellent experience for a half yearNow waiting forward what happens in the next BTC halving (4 days to go)!" },
  { id:2,name:"Kaan K.", dates: "04/20/20" ,reviews:"¡EXELENTE! LA EXPERIENCIA DE USUARIO QUE HE TENIDO A SIDO MARAVILLOSA. GRACIAS BINANCE" },
  { id:3 ,name:"MRROBSON",dates: "04/17/20" ,reviews:"This is complicated business, and new to all of us. Binance Crypto Mining is helping with patience and care. I see they know what they are doing. Let´s go on with the future!" },
  {  id:4, name:"John B.", dates: "04/07/20" ,reviews:"solid site amazing support" },
  { id:5,name:"kate J.",dates: "04/05/20" ,reviews:"I have been using Binance crypto mining since BTC was $100 a coin and it was a great investment to get as much mining power as possible. I continue to use the site and top up when I can. It is a low investment if you believe crypto coin will continue to climb. To the moon baby!!" },
  { id:6,name:"MARY L.", dates: "04/04/20" ,reviews:"LOVE YOU GUYS" },
  { id:7,name:"brad T", dates: "03/24/20" ,reviews:"Thanks to the speed and ease with which you begin to earn, it is certainly one of the best platforms to invest your money" },

]
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),

  },icon:{
   
    transform:'rotate(-55deg)',
    paddingTop:"7px"
  
  }

}));
export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}>REVIEW <StarIcon className={classes.icon}/> </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {'Over 4000 reviews'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          BINANCE CRYPTO-MINING REVIEWS
          </DialogContentText>
          {revews.map(revs => {
return <div  key={revs.id} style={{ display: 'flex', flexDirection: 'column',marginBottom:"10px" }}>
<div style={{ display: 'flex' }}>
  <Avatar
    alt={revs.name}
    src="https://www.youtube.com/"
    className={classes.large}
  />
  <div>
    <p style={{margin:"0 0"}}>{revs.name}</p>
    <Rating name="size-medium" defaultValue={5}  readOnly/>
  </div>
  <div style={{flex:"1 1"}}></div>
        <div ><small>{revs.dates}</small></div>
</div>
<div style={{marginLeft:'56px'}}>
{revs.reviews}
</div>
<Divider />
</div>
})}
          
   
        </DialogContent>
      
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

