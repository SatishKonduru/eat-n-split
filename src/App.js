const initialFriends = [
  {
    id: 118836,
    name: "Micky",
    image: "/images/Micky.jpg",
    balance: -7,
  },
  {
    id: 933372,
    name: "Renu",
    image: "/images/Renu.jpg",
    balance: 20,
  },
  {
    id: 499476,
    name: "Chikkie",
    image: "/images/Chikkie.jpg",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />

        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You have to give ₹ {Math.abs(friend.balance)} to {friend.name}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} has to give ₹ {friend.balance} to you.
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input type="text" />

      <label>🖼️ Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split the Bill with XXXXX</h2>
      <label> 💰 Bill Value</label>
      <input type="text" />

      <label> 🧑‍🦰 Your Expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 X's Expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}