import '../Stylesheets/mystyle.css';

const percentToDecimal = (decimal) => {
  return (decimal.toFixed(2) + "%");
}

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
}

export function CalculateScore(props) {
  return (
    <div className="formatstyle">
      <h1>Student Details:</h1>

      <div className="Name">
        Name: {props.Name}
      </div>

      <div className="School">
        School: {props.School}
      </div>

      <div className="Total">
        Total: {props.total}Marks
      </div>

      <div className="Score">
        Score: {calcScore(props.total, props.goal * 100)}
      </div>
    </div>
  );
}