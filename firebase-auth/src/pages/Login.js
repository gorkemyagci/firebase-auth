import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { login } from '../stores/auth';
import { useDispatch } from 'react-redux';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                dispatch(login(user));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email giriniz"
            />
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre giriniz"
            />
            <button onClick={handleSubmit}>Giriş Yap</button>
        </div>
    )
}
