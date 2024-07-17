import Chat from '../../component/chat/chat';
import Lists from '../../component/lists/lists';
import './profile.scss';

function Profile() {

    const handleLogout = () => {
        localStorage.removeItem('token');
         // Remove the JWT token from local storage
        // Redirect or perform any other action after successful logout
        console.log("You have logged out");
    };
       
  return (
    <div className='profile'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Info</h1>
                   <button>Update Profile</button>
                </div>

                <div className="info">
                    <span>Avatar:
                         <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                         alt="" />
                         </span>
                         <span>Username : <b>Ram B</b></span>
                         <span>Email : <b>Rambxd@gmail.com</b></span>
                         <button onClick={handleLogout}>Logout</button>


                </div>

                <div className="title">
                    <h1>My List</h1>
                   <button>Create New Post</button>
                </div>
                <Lists/>
                <div className="title">
                    <h1>Saved List</h1> 
                </div>
                <Lists/>
            </div>
        </div>
        <div className="chatContainer">
          
            <div className="wrapper"></div>
            <Chat/>
        </div>
    </div>
  )
}

export default Profile