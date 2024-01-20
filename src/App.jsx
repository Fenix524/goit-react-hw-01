import './App.css';
import Profile from './components/Profile/Profile';
import TaskTitle from './components/TaskTitle/TaskTitle';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from './assets/userData.json'
import friendsArray from './assets/friends.json'
import transactionArray from './assets/transactions.json'


function App() {
  return (
    <>
     <TaskTitle text="Завдання 1 - Профіль соціальної мережі"/>
     <Profile profileData={userData} />

     <TaskTitle text="Завдання 2 - Список друзів"/>
     <FriendList friends={friendsArray}/>

     <TaskTitle text="Завдання 3 - Історія транзакцій"/>
     <TransactionHistory items={transactionArray} />
    </>
  );
}



export default App;
