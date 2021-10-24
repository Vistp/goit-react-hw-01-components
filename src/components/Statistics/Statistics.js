import PropTypes from "prop-types";
import s from './Statistics.module.css';
import StatisticItem from './StatisticItem.js';

function Statistics({ title, stats }) {
    return (
<section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}

    <ul className={s["stat-list"]}>
        {stats.map(el => (
            <li className={s.item} key={el.id}>
                <StatisticItem
                label={el.label}
                percentage={el.percentage}
                />   
            </li>
         ))}
     </ul>
</section>
    )
}
Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
}
export default Statistics;