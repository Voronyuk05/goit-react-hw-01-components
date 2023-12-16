import s from './Statistic.module.css'

export function Statistics({title, stats }) {
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>{title ? title : ''}</h2>
            <ul className={s.list}>
                {stats.map(dataItem => {
                    return (
                        <li className={s.item}>
                            <span className={s.label}>{dataItem.label} </span>
                            <span className={s.percentage}> {dataItem.percentage}%</span>
                        </li>   
                    )
                })}
            </ul>
        </section>
    )
}