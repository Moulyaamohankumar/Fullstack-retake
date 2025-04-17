import React from "react";

const TeamCard = ({name , title})=>{
    return(
        <div style={{
            border: '1px solid #ccc',
            borderRadius:'12px',
            margin:'10px',
            padding:'12px',
            boxShadow:'inherit'
        }}>
              <h1>Members Name:<strong>{name}</strong></h1>

            <h1>Members title:<strong>{title}</strong></h1>
        </div>
      
    )
}

export default TeamCard