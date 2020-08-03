import React from 'react';
import '../App.css';
import { Link , NavLink } from 'react-router-dom';

function Footernew(props)
{
    return <div className="footer">
        <div className="row">
            <div className="col-md-5">
                <h2><b>REACH US</b></h2><br/>
                <p>Phone - 8080808077 MON-SAT(11 AM to 7 PM)</p><br/>
                <p>Address -101,Tower 1 Mumbai-400101 [MH]</p><br/>
                <p>Email -Sachinmags5@gmail.com</p><br/>
            </div>
            <div className="col-md-4">
                <h2><b>LEGAL</b></h2><br />
                <p>Privacy Statement</p><br />
                <p>TERMS OF SERVICE</p><br />
            </div>
            <div className="col-md-3">
                <h2><b>USEFUL LINKs</b></h2><br />
              <NavLink to="/SizingScreen" exact  activeStyle={{color: '#ff8000'}} ><p>Sizing Information</p><br /> </NavLink>
              <NavLink to="/Trackorder" exact activeStyle={{color: '#ff8000'}} ><p>Track Your Order</p><br /></NavLink>
            </div>
     
        </div>
        
        <div className=" row justify-content-center text-center">
        <p>&#169;  <b> Amazona </b> | Designed and Managed By Sachin Magdum.</p>   
        </div>
       
        

    </div>
}

export default Footernew;