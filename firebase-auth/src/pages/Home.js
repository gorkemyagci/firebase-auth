import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logut } from '../firebase';
import { logut as logutHandle } from '../stores/auth';

export default function Home() {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const signOut = () => {
        logut();
        dispatch(logutHandle());
    }
    return (
        <div>
            {
                user ? <>
                    <span>{user.email}</span>
                    <button onClick={signOut}>Çıkış Yap</button>
                </>
                    : <>
                        <Link to={{ pathname: "/kayit" }}>Kayıt Ol</Link>
                        <Link to={{ pathname: "/giris" }} style={{
                            paddingLeft: "10px"
                        }}>Giriş Yap</Link>
                    </>
            }
        </div>
    )
}
