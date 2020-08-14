import React from 'react'
import { withFirebase } from '../Firebase';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider'
 function notification({firebase,messages,toggler}) {
React.useEffect(()=>{
    console.log(messages)
},[])
    return (
        <div >
             
        <div className='notification'>
        <div className='notificationflex' style={{display:'flex',justifyContent:'space-between',height:'50px',backgroundColor:'black',marginBottom:'5px'}}>
            <div><h3 style={{color:'white',margin:'15px'}}>Notifications</h3></div>    
               
<div>
<IconButton
            aria-label="show 11 new notifications"
            color="inherit"
            onClick={()=>{
                toggler()
            }}
          >
    <CloseIcon  style={{color:'#f0b90b',alignSelf:'center',}}/>
              </IconButton>
            </div>
            </div>
            <div>
           { !!messages && Object.keys(messages).map((key) => {
          return( <div style={{display:'flex',flexDirection:"column"}}>   <div style={{padding:'0 16px'}}> <h2>{messages[key].topic}</h2></div>
          <div style={{maxWidth:'200px'}}> <p style={{padding:'0 16px',fontSize:'16px'}}>{messages[key].message}</p></div>
          <div style={{float:'right',padding:'2 16px'}}> <small>{messages[key].date}</small></div>
          <Divider/>
          </div>)


           })
}
            </div>
            
           
        </div></div>
    )
}
export default withFirebase(notification)