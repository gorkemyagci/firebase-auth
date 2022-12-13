import React, { useState } from 'react'
import { register } from '../firebase';

export default function Signup() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = () => {
        register(email,password);
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
        <button onClick={handleSubmit}>Kayıt Ol</button>
    </div>
  )
}
