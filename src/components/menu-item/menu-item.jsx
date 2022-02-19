import React, { useEffect } from 'react';
import '../menu-item/menu-item.styles.scss';
import { useNavigate } from "react-router-dom";

//As withRouter gone and useHistory in version6 of react-router, we have to use useNavigate hook to imitate the old withRounter// 

const MenuItem = ({ title, imageUrl, size, linkUrl}) => {
    const navigate = useNavigate();

    return (
        <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>
            <div 
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subititle">SHOP NOW</span>
            </div>    
        </div>
    )
}

export default MenuItem;
