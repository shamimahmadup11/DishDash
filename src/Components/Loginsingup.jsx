import { useState } from 'react';
const Loginsingup = ({ isLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Determine whether it's a login or signup based on isLogin prop
        if (isLogin) {
            // Handle login logic

            console.log('Logging in with email:', email, 'and password:', password);
        } else {
            // Handle signup logic
            console.log('Signing up with email:', email, 'and password:', password);

        }
    };
  return (
    <div className='logIng'>
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit} className='formInput'>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={()=>{
                    alert(" login successful")
                }}>{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
        </div>
  )
}


export default Loginsingup
