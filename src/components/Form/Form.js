import React, {useState} from 'react'
import './Form.css'

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        console.log(`
            Name: ${name}
            Email: ${email} 
        `);
        e.preventDefault();
    }

    return (
        <div className="form">
            <form className='form-main' onSubmit={handleSubmit}>
                <h1 className="form-heading">Subscribe to our newsletter</h1>

                <label className='form-name'>
                    Name:
                    <input
                        name="name"
                        type="name"
                        value={name}
                        onChange = {e => setName(e.target.value)}
                        required
                    />
                </label>

                <label className='form-email'>
                    Email:
                    <input 
                        name="email"
                        type="email"
                        value={email}
                        onChange = {e => setEmail(e.target.value)}
                        required
                    />
                </label>

                <button className="form-button">Submit</button>
            </form>
        </div>
    )
}

export default Form