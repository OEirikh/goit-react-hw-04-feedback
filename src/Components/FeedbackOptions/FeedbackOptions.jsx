import PropTypes from "prop-types";

import s from "./FeedbackOptions.module.css";
export default function FeedbackOptions({ options, onLeaveFeeedback }) {
  return (
    <div>
      <ul className={s.list}>
        {Object.keys(options).map((key) => (
          <li key={key} className={s.item}>
            <button
              className={s.button}
              type="button"
              onClick={onLeaveFeeedback}
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
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  }),
  onLeaveFeeedback: PropTypes.func.isRequired,
};
