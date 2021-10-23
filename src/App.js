import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/user.json';

// import Statistics from './components/Statistics/Statistics';
// import data from './components/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import Friend from './components/FriendList/Friend';
import friends from './components/friends.json';
function App() {
  return (
    <div>
    <Profile
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    {/* // <Statistics */}
    {/* //   title={data.id}
    //   stats={data.stats}
    //   />
    // <div>[1,2,3,4]</div> */}
      {/* {friendsList.map(friend => (
        <Friend
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        />
    ))} */}
      <FriendList
        friends={friends}/>
    </div>
  );
}

export default App;
