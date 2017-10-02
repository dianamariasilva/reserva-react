  let DATA = [
    {
      img: "img/avion.png",
      question:"Which is the oldest airline in the world?",
      alternatives:["Avianca","KML","Qantas"],
      answer:1
    },
    {
      img: "img/barco1.png",
      question:"Which is the largest port in the world?",
      alternatives:["Port of Shanghai","Port of Singapore","Port of Rotterdam"],
      answer:0
    },
    {
      img: "img/bicicleta.png",
      question:"What is the longest distance cycling backwards?",
      alternatives:["89.30 km","675.10 km","337.60 km"],
      answer:2
    },
    {
      img: "img/bus.png",
      question:"What is the highest speed ever reached by a school bus?",
      alternatives:["590 km/h","320 km/h","245 km/h"],
      answer:0
    },
    {
      img: "img/carro.png",
      question:"What is the longest car trip on one tank of gas?",
      alternatives:["2617 km","3568 km","1732 km"],
      answer:0
    },
    {
      img: "img/camion.png",
      message:"Here are your answers:"
    }
  ];

// var tags = {
//     numberOfAnswered: document.getElementById('numberOfAnswered'),
//     completedPercent: document.getElementById('completedPercent'),
//     qImage: document.getElementById('qImage'),
//     question: document.getElementById('Question'),
//     a1: document.getElementById('a1'),
//     a2: document.getElementById('a2'),
//     a3: document.getElementById('a3'),
//     bar: document.getElementById('progressBar'),
//     Questions: document.getElementById('Questions'),
//     answers: document.getElementById('myAnswers'),
//     results: document.getElementById('myResults'),
//     Message: document.getElementById('Message'),
//     answersConfirmation: document.getElementById('answersConfirmation'),
//     bSubmit: document.getElementById('bSubmit'),
//     bStart: document.getElementById('bStart')
//   }
  
const Header = props => {
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
    return(
        <div className="text-center col-12 col-sm-12">
            <div className="row">
                <img alt="" id="qimage"/>
                <p className="text-left answer" id="numberOfAnswered">1 of 5 answered</p>
			    <div className="progress">
				    <div className="progress-bar" role="progressbar" id="progressBar">
					    <span className="sr-only" id="completedPercent">20% completado</span>
				    </div>
			    </div>
            </div>
        </div>
    )
}

// function loadQuestionPage(){
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

// }
  
//   function insertAnswer(a){
//     myAnswers.push(a);
//     index++;
//     if(index < pageN){
//       loadQuestionPage();
//     } else {
//       loadAnswersConfirmation()
//     }
//   }
  
//   function loadAnswersConfirmation(){
//     let str = "";
//     for(let i = 0; i < pageN; i++){
//       let user_answer = myAnswers[i];
//       let chosenAnswer = data[i].alternatives[user_answer];
  
//       let correctAnswer = "";
//       let textColors = {
//         chosenAnswer:"text-primary",
//         correctAnswer:"text-danger"
//       }
  
//       if(answersSubmited){
//         let data_answer = data[i].answer;
  
//         if(data_answer == user_answer){
//           textColors.chosenAnswer = "text-success";
//           textColors.correctAnswer = "text-success";
//         } else {
//           correctAnswer = data[i].alternatives[data_answer];
//           textColors.chosenAnswer = "text-danger";
//           chosenAnswer = `<strike>${chosenAnswer}</strike>`;
//           textColors.correctAnswer = "text-success";
//         }
//       }
//       str += `
//         <div>
//           <span class="${textColors.chosenAnswer}">
//             ${i+1}. ${data[i].question}
//             ${chosenAnswer}
//           </span>
//           <span class="${textColors.correctAnswer}">${correctAnswer}</span>
//         </div>`
//     }
//     tags.answersConfirmation.innerHTML = str;
//     tags.Questions.style.display = 'none';
//     tags.answers.style.display = 'block';
//   }
  
//   function submitAnswers(){
//     answersSubmited = true;
//     loadAnswersConfirmation();
//     tags.bSubmit.style.display = 'none';
//     tags.bStart.style.display = 'block';
//   }
  
//   function startQuiz(){
//     initVariables();
//     loadQuestionPage();
//     tags.Questions.style.display = 'block';
//     tags.answers.style.display = 'none';
//     tags.bSubmit.style.display = 'block';
//     tags.bStart.style.display = 'none';
//   }

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
const Application = ({data}) => {
    return(
        <div className="reserve">
            <Header className="header" data={data}/>
        </div>
    );
}

ReactDOM.render(<Application data={DATA}/>, document.getElementById("container"));