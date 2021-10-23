import PropTypes from "prop-types";
import './Statistics.css';

function Statistics({ title, stats }) {
    return (
    <section className="statistics">
    {title && <h2 className="title">{title}Upload stats</h2>}
    {/* <h2 className="title">{title}Upload stats</h2> */}

    <ul className="stat-list">
        <li className="item">
        <span className="label">.docx</span>
        <span className="percentage">{stats.percentage}4%</span>
        </li>
        <li className="item">
        <span className="label">.mp3</span>
        <span className="percentage">14%</span>
        </li>
        <li className="item">
        <span className="label">.pdf</span>
        <span className="percentage">41%</span>
        </li>
        <li className="item">
        <span className="label">.mp4</span>
        <span className="percentage">12%</span>
        </li>
    </ul>
    </section>
    )
}
Statistics.PropTypes = {
    title: PropTypes.string,
    stats: PropTypes.object.isRequired,
}

export default Statistics;