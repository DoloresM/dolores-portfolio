const Form = ()=>{
    return(
        <>
            <form className="contact-form" style={{height: "400px"}}>    
                <div className="form-info">
                    <label >
                        <input type="text" name="name" placeholder="Name"/>
                    </label>
                    <label>
                        <input type="text" name="email" placeholder="Email" />
                    </label>
                </div>
                <div className="form-message">
                    <label>
                        <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
                    </label>
                </div>
                <input type="submit" value="Submit" />
             </form>
        </>
    )
}

export default Form;