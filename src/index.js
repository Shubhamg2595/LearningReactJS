import React from 'react';
import ReactDOM from 'react-dom';


const App=()=>{
    
    const ButtonText="Click me!!"

    {/*
    
    const ButtonText={text : 'Click me'}

    now to use this we have to do the following:
        
    {ButtonText.text}
    */}

    const style={backgroundColor:'blue',color:'white'}


    return(
        <div>
        {/*
        importtant to use className instead of class property with 
        label to prevent collisions with classes we may define in our
        React app
        */}
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" /> 
            
       {     /*<button style={{backgroundColor:'blue',color:'white'}} >{ButtonText}</button>
    */}
    <button style={style} >{ButtonText}</button>
            
        
        
            </div>
    )
}


ReactDOM.render(<App />,document.getElementById('root')) 