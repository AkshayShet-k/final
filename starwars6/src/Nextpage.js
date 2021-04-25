  
import React from 'react';
// import Logo from './logo';
// import './Highlight.css'
// import Footer from './Footer';
import Navbar from './Navbar';
import List from './List';

const Nextpage = ({match}) => {
    return (
        <div className = "nextpage">
            {/* <Logo /> */}
            <div className="holder">
                <Navbar name={match} />
            </div>
            <List info ={match}/>
            {/* <Footer/> */}
        </div>
    )
}
export default Nextpage;