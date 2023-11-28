import { useRef } from "react"


const Login = ({createCard})=>{

    const nameRef = useRef(null)
    const emailRef = useRef()
    const ageRef = useRef()
    const phoneRef = useRef()

    
    const handleSubmit = (e)=>{
        e.preventDefault();
       
        createCard(nameRef.current.value,emailRef.current.value,ageRef.current.value,phoneRef.current.value)
    }
    return<>
    <h1>login</h1>

    <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="type here your name" />
        <input ref={ageRef} type="number" placeholder="type here your age" />
        <input ref={emailRef} type="email" placeholder="type here your email" />
        <input ref={phoneRef} type="number" placeholder="type here your phone" />


        <input type="submit" />

    </form>
    </>
}

export default Login