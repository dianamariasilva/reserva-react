let DATA = [
  {
    num: 1,
    img: "img/plane.svg",
    question: "Which is the oldest airline in the world?",
    alternatives: ["Avianca", "KML", "Qantas"],
    answer: 1
  },
  {
    num: 2,
    img: "img/ship.svg",
    question: "Which is the largest port in the world?",
    alternatives: [
      "Port of Shanghai",
      "Port of Singapore",
      "Port of Rotterdam"
    ],
    answer: 0
  },
  {
    num: 3,
    img: "img/bycicle.svg",
    question: "What is the longest distance cycling backwards?",
    alternatives: ["89.30 km", "675.10 km", "337.60 km"],
    answer: 2
  },
  {
    num: 4,
    img: "img/bus.svg",
    question: "What is the highest speed ever reached by a school bus?",
    alternatives: ["590 km/h", "320 km/h", "245 km/h"],
    answer: 0
  },
  {
    num: 5,
    img: "img/car.svg",
    question: "What is the longest car trip on one tank of gas?",
    alternatives: ["2617 km", "3568 km", "1732 km"],
    answer: 0
  }
];

const Header = ({ id, question, length }) => {
  return (
    <div className="text-center col-12 col-sm-12">
      <div className="row">
        <img src={question.img} id="qimage" width={260} height={260} />
        <p className="text-left answer" id="numberOfAnswered">
          {" "}
          {question.num} of {length} answered
        </p>
        <div className="progress">
          <div
            classname="progress-bar"
            role="progressbar"
            id="progressBar"
            aria-valuenow={question.num * 20}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "70%" }}
          >
            <span classname="sr-only" id="completedPercent">
              {question.num * 20}% completado
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ question, alternatives, onItemSelected }) => {
  const items = alternatives.map((item, index) => {
    return (
      <li key={index}>
        <div class="col-md-4 col-sm-4">
          <button
            class="text-center"
            id="a2"
            onClick={() => onItemSelected(index)}
          >
            {" "}
            {item}{" "}
          </button>
        </div>
      </li>
    );
  });
  return (
    <div classname="container">
      <div className="row text-center square" width="100%" id="Questions">
        <h2 className="title" id="Question">
          {question}
        </h2>
        <ul>{items}</ul>
      </div>
      <div
        className="row text-center square"
        width="100%"
        id="myAnswers"
        hidden
      >
        <h2 className="title" id="Message" />
        <div id="answersConfirmation" />
        <div className="col-md-12 col-sm-12 text-center" id="bSubmit">
          <button onclick="submitAnswers()">Submit</button>
        </div>
        <div className="col-md-12 col-sm-12 text-center" id="bStart" hidden>
          <button onclick="startQuiz()">Start again</button>
        </div>
      </div>
    </div>
  );
};


class Application extends React.Component {
  constructor(props) {
    super(props);
    const firstId = 0;
    this.state = {
      counter: firstId,
      question: props.data[firstId]
    };
  }

  render() {
    const item = this.state.question;

    return (
      <div className="reserve">
        <Header
          className="header"
          question={item}
          id={0}
          length={this.props.data.length}
        />
        <Section
          question={item.question}
          alternatives={item.alternatives}
          onItemSelected={idx => {
            const nextId = this.state.counter + 1;
            this.setState({
              counter: nextId,
              question: this.props.data[nextId]
            });
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Application data={DATA} />,
  document.getElementById("container")
);
