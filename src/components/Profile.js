import React from 'react';
import profilephoto from '../Images/profilephoto.png';

export const Profile = () => {
    let profileStyle = {
        display: "flex",
        flexDirection: "column",
        flexBasis: "30%",
        backgroundImage: 'url('+profilephoto+')',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#262926",
        paddingBottom: "10px",
        height: "100%",
        // border: "2px solid yellow",
        alignItems: "center",
        justifyContent: "flex-end"
    }
    return (
        <div style={profileStyle}>
            <h1 className="p-1">Vishakha Bothra</h1>
            <h5 className="text-success">Developer</h5>
            <ul className="d-inline-flex list-unstyled" >
                <li className="list-inline-item p-2"><i class="fab fa-facebook-f" ></i></li>
                <li className="list-inline-item p-2"><i class="fab fa-instagram"></i></li>
                <li className="list-inline-item p-2"><i class="fab fa-twitter"></i></li>
                <li className="list-inline-item p-2"><i class="fab fa-linkedin-in"></i></li>
            </ul>
        </div>
    )
}
