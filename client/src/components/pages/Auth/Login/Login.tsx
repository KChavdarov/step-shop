import { useNavigate } from 'react-router';
import { AuthContext } from '../../../../contexts/AuthContext';
import './Login.scss';
import { useContext } from 'react';

export function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const { email, password } = Object.fromEntries(formData);
        // const email = formData.get('email');
        // const password = formData.get('password');
        await login(email as string, password as string);
        navigate('/');
    }
    return (
        <section>
            <h2>Login Page</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' />
                <br />
                <label htmlFor="password">Password</label>
                <input type="text" name='password' id='password' />
                <br />
                <input type="submit" value={'Login'} />
            </form>
        </section>
    );
}