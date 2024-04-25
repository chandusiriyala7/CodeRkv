import React from 'react';

const Home = () => {
    const createNewRoom = (e) => {
        e.preventDefault();
       
        
    }
    return (
          <div className='homePageWrapper'>
                <div className='formWrapper'>
                    <img className="logo"src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0IkXDh3-w50N8hru0jrbEJ6dOu3LqiMoTE7ahVKT17g&s" alt = "coderkv"/>
                    <h4 className='mainLabel'>Paste Invitation ROOM ID</h4>

                    <div className='inputGroup'>
                            <input type="text" className='inputBox' placeholder='ROOM ID'/>

                            <input type="text" className='inputBox' placeholder='USER NAME'/>

                            <button className='btn joinBtn' onclick = {createNewRoom}>join</button>

                            <span className='createInfo'>
                                If You dont Have Invite Code then Create &nbsp; 
                                <a href ="Home" className='create-new-btn'> new room</a>
                            </span>
                    </div>
                </div>
                
          <footer>
            <h4>Built by <a href = "Home">Chandusiriyala⚡️</a></h4>
          </footer>
        </div>
    );
};

export default Home