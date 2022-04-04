import PropTypes from "prop-types";

import s from "./FeedbackOptions.module.css";
export default function FeedbackOptions({ options, updateQuantityFeedbeacks }) {
  return (
    <div>
      <ul className={s.list}>
        {Object.keys(options).map((key) => (
          <li key={key} className={s.item}>
            <button
              className={s.button}
              type="button"
              onClick={updateQuantityFeedbeacks}
              id={key}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  updateQuantityFeedbeacks: PropTypes.func.isRequired,
};
