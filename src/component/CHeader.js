import React from 'react';
import Testing from './Testing';

class CHeader extends React.Component{
    state={
        users:[
           {id:1, name:"Anas",fname:"javed" ,sec:"A"},
           {id:2, name:"Ijaz",fname:"Ahmed" ,sec:"B"},
           {id:3, name:"Hamza",fname:"Khalid" ,sec:"C"},
        ]
    }
    render(){
        const newusers=this.state.users.map(function(user){
            return (
                // <h2 key={user.id}> {user.id} 
                // {user.name}
                //  {user.fname} {user.sec}
                //  </h2>
                 <Testing key={user.id} value={user.id}></Testing>
                 
            );
        });
        return(
        <div>
        <h1>{this.props.name }</h1>
        {newusers}
        
        </div>
        )
    }
}

export default CHeader;