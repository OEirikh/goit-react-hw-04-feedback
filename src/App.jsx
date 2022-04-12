import { useState } from "react";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";
import Statistics from "./Components/Statistics/Statistics";
import NotificationMessage from "./Components/NotificationMessage/NotificationMessage";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateQuantityFeedbeacks = (e) => {
    switch (e.target.id) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () =>
    Object.values({ good, neutral, bad }).reduce(
      (acc, value) => acc + value,
      0
    );

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () =>
    `${Math.round((good / total) * 100)}%`;

  return (
    <div>
      <Section title="Please leave feedbeack">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          updateQuantityFeedbeacks={updateQuantityFeedbeacks}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
