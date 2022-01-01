
import {Link} from 'react-router-dom'
import AuthContext from '../store/auth-context'
import {useContext} from 'react'
const NavBar=()=>{
    const ctx = useContext(AuthContext)
    return (
        <>
        {ctx.isLogged?
        <button onClick={()=>ctx.setIsLogged(false)} >Logout</button>:
        <button onClick={()=>ctx.setIsLogged(true)}>Login</button>}
        <br></br>
        {ctx.isLogged?
        <Link to='/Timer' >Timer</Link>:
        <h5>You need to login to see the link</h5>}
        <br></br><Link to='/Name' >Name</Link><br></br>
        <Link to='/Counter' >Counter</Link><br></br>
        <Link to='/Windows' >Windows</Link><br></br>
        <Link to='/FormTest' >FormTest</Link><br></br>
        <Link to='/Resource' >Resource</Link><br></br><br></br>
        <Link to='/TestStyle' >TestStyle</Link><br></br><br></br>
        </>
    )
}

export default NavBar