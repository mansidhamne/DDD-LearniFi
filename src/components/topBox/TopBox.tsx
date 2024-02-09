import "./topBox.scss"
import {topStudents} from "../../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Students</h1>
      <div className="list">
        {topStudents.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="std">{user.std}</span>
              </div>
            </div>
            <span className="score">{user.score}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox