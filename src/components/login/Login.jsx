import React, {useState} from 'react'
import { useLogin } from '../../hooks/useLogin';
import { Link } from 'react-router-dom';
import './Login.scss'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {login, error, isLoading} = useLogin()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await login(username, password)

    }

    return (
        <>
            <div className='create pb-3'>
                <h2>Welcome Brooo</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        required
                        placeholder='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="text" 
                        required
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <button disabled={isLoading}>Masuk</button>
                    {error && <div>{error}</div>}
                </form>
            </div>
        </>
    )
}

export default Login