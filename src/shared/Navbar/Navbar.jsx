import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut =() =>{
    logOut()
    .then(() => {})
    .catch(error => console.log(error))
  } 
    const navOptions =  <>
     <Link to="/"><li>Home</li></Link>
     <Link to="/instructors"><li>Instructors</li></Link>
     <Link to="/classes"><li>Classes</li></Link>
     <Link to="/dashboard "><li>Dashboard </li></Link>
     
      {
        user ? <>
        <div className='flex'>
        <button onClick={handleLogOut} className='btn btn-ghost hover:bg-green-400'>LogOut</button>
        <p>{user?.photoURL}</p>
        </div>
        </> : 
        <>
        <Link to="/login"><li>Login</li></Link>
        </>
      }
       
    </>
    return (
        <div className=''>
            <div className="navbar bg-slate-50 text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    
    <img src="https://a6e8z9v6.stackpathcdn.com/yoku/demo1/wp-content/uploads/sites/2/2020/07/logox1.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal space-x-4 font-semibold text-lg px-1">
     {navOptions}
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;