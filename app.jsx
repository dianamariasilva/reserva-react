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

//  var tags = {
//      numberOfAnswered: document.getElementById('numberOfAnswered'),
//      completedPercent: document.getElementById('completedPercent'),
//      qImage: document.getElementById('qImage'),
//      question: document.getElementById('Question'),
//      a1: document.getElementById('a1'),
//      a2: document.getElementById('a2'),
//      a3: document.getElementById('a3'),
//      bar: document.getElementById('progressBar'),
//      Questions: document.getElementById('Questions'),
//      answers: document.getElementById('myAnswers'),
//      results: document.getElementById('myResults'),
//      Message: document.getElementById('Message'),
//      answersConfirmation: document.getElementById('answersConfirmation'),
//      bSubmit: document.getElementById('bSubmit'),
//      bStart: document.getElementById('bStart')
//    }

// let index;
// let page;
// let pageN;
// let percent;
// let myAnswers;
// let answersSubmited;
// index = 0;
// pageN = props.data.length - 1;
// percent = 0;
// myAnswers = [];
// answersSubmited = false;
// page = index + 1;
// percent =  page * 100 / pageN;

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state= {
//             img: props.img[0],
//             question:props.question[0],
//             alternatives:props.alternatives[0],
//             answer: props.answer[0]
//         }
//     }
//     loadQuestionPage(){
//     page = index + 1;
//     tags.numberOfAnswered.innerHTML = `${page} of ${pageN} answered`;

//     percent =  page * 100 / pageN;
//     tags.completedPercent.innerHTML = `${percent}% completado`;
//     tags.bar.style = `width: ${percent}%;`;

//     tags.qImage.src = data[index].img;

//     tags.question.innerHTML = data[index].question;

//     tags.a1.innerHTML = data[index].alternatives[0];
//     tags.a2.innerHTML = data[index].alternatives[1];
//     tags.a3.innerHTML = data[index].alternatives[2];

//     }

//     insertAnswer(a){
//         myAnswers.push(a);
//         index++;
//         if(index < pageN){
//         loadQuestionPage();
//         } else {
//         loadAnswersConfirmation()
//         }
//     }

//     loadAnswersConfirmation(){
//         let str = "";
//         for(let i = 0; i < pageN; i++){
//         let user_answer = myAnswers[i];
//         let chosenAnswer = data[i].alternatives[user_answer];

//         let correctAnswer = "";
//         let textColors = {
//             chosenAnswer:"text-primary",
//             correctAnswer:"text-danger"
//         }

//         if(answersSubmited){
//              let data_answer = data[i].answer;

//             if(data_answer == user_answer){
//                 textColors.chosenAnswer = "text-success";
//                 textColors.correctAnswer = "text-success";
//             } else {
//                 correctAnswer = data[i].alternatives[data_answer];
//                 textColors.chosenAnswer = "text-danger";
//                 chosenAnswer = `<strike>${chosenAnswer}</strike>`;
//                 textColors.correctAnswer = "text-success";
//             }
//         }
//         str += `
//          <div>
//            <span class="${textColors.chosenAnswer}">
//              ${i+1}. ${data[i].question}
//              ${chosenAnswer}
//            </span>
//            <span class="${textColors.correctAnswer}">${correctAnswer}</span>
//          </div>`
//         }
//     tags.answersConfirmation.innerHTML = str;
//     tags.Questions.style.display = 'none';
//     tags.answers.style.display = 'block';
//     }

//     submitAnswers(){
//         answersSubmited = true;
//         loadAnswersConfirmation();
//         tags.bSubmit.style.display = 'none';
//         tags.bStart.style.display = 'block';
//    }

//     startQuiz(){
//         initVariables();
//         loadQuestionPage();
//         tags.Questions.style.display = 'block';
//         tags.answers.style.display = 'none';
//         tags.bSubmit.style.display = 'block';
//         tags.bStart.style.display = 'none';
//    }
// }

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

// class Questions extends React.Component {
//    constructor(props) {
//       super(props);

//       this.state = {
//          text: "",
//          todolist: props.list
//       };
//    }
//    onSubmit(e) {
//       e.preventDefault();
//       console.log("onSubmit");
//       var item = {
//          text: this.state.text,
//          checked: false
//       };
//       this.setState({
//          text: "",
//          todolist: this.state.todolist.concat([item])
//       });
//    }
//    onChange(e) {
//       console.log("onChange", e.target.value);
//       this.setState({
//          text: e.target.value,
//          todolist: this.state.todolist
//       });
//    }
//    render() {
//       const todoList = this.state.todolist.map((item, index) => {
//          return <li key={index}> {item.text} </li>;
//       });
//       return (
//          <div>
//             <form onSubmit={e => this.onSubmit(e)}>
//                <input
//                   value={this.state.text}
//                   type="text"
//                   onChange={e => this.onChange(e)}
//                />
//                <button type="submit"> add item</button>
//             </form>
//             <ol>{todoList}</ol>
//          </div>
//       );
//    }
// }

// const items = [
//    { text: "Aprender React", checked: false },
//    { text: "Aprender JSX", checked: true },
//    { text: "Aprender States", checked: false }
// ];
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
