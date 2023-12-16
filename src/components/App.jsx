import { Statistics } from "./Statistics/Statistics.jsx";
import { FriendList } from "./FriendList/FriendList.jsx";
import data from '../data.json'

export function App() {
  return (
    <>
      <Statistics
        title='Upload stats'
        stats={data}
      />
      <FriendList />
    </>
  )
}