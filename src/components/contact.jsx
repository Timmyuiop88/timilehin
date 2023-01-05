import React from "react";

function Contactme(){
    return(
        <div className="contact">
            <div className="ex_heading">
        <div className="ex_sub">GOT AN IDEA</div>
        <p>LETS</p>
           <p> CONNECT</p>
      </div>
            <div className="contactform">
                <div className="input_f">
                    
                        <p>NAME</p>
                        <input name="name" type="text"/>
                    
                </div>
                <div className="input_f">
                    
                        <p>EMAIL</p>
                        <input name="email" type="email"/>
                    
                </div>
                <div className="input_t ">
                    
                        <p id="tes">MESSAGE</p>
                        <textarea name="message" ></textarea>
                    
                </div>
                <div className="submit">
                    <button type="submit">SEND</button>
                </div>
            </div>
        </div>
    )
}
export default Contactme