import s from './FriendList.module.css'
import friends from '../../friends.json'

export function FriendList() {
    return (
        <ul className={s.list}>
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    <li className={s.item}>
                        <span className={`${s.status} ${isOnline ? s['online'] : s['offline']}`} ></span>
                        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
                        <p className={s.name}>{name}</p>
                    </li>
                )
            })}
        </ul>
    )
}