import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("wish_user", JSON.stringify({
                        id: user.id,
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login container">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <div><h1>WishList</h1></div>
                    <div><h2>Please sign in!</h2></div>
                    <div className="fieldset">
                        <fieldset>
                            {/* <label htmlFor="inputEmail">Please Sign In!</label> */}
                            <input type="email"
                                value={email}
                                onChange={evt => set(evt.target.value)}
                                className="form-control"
                                placeholder="name@name.mail"
                                required autoFocus />
                        </fieldset>
                        <fieldset>
                            <button type="submit" className="btn btn-secondary">
                                Sign in
                            </button>
                        </fieldset>
                        
                    </div>
                    <div className="ObjLink"><Link to="/register">Not a member yet?</Link></div>
                </form>
                
            </section>
        </main>
    )
}

