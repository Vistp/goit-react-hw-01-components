import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/user.json';

// import StatisticItem from './components/Statistics/StatisticItem';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// import TransactionItem from './components/TransactionHistory/TransactionItem';
import transactions from './components/transactions.json';

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
      {/* <div>
        {statisticalData.map(el => (
          <StatisticItem
        key={el.id}
        label={el.label}
        percentage={el.percentage}
    />
        ))
        }
    </div> */}

    <Statistics title="Upload stats" stats={statisticalData} />
    <Statistics stats={statisticalData} />
    <FriendList friends={friends} />
      {/* <div>
        {transactions.map(el => (
          <TransactionItem
        key={el.id}
        type={el.type}
        amount={el.amount}
        currency={el.currency}
    />
        ))
        }
    </div> */}
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
