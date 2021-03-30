import React, {useState} from 'react';
import Counter from "./reactStudy/components/Counter";
import Info from "./reactStudy/components/Info";
import Average from "./reactStudy/components/Average";
import MyComponent from '../../react_hook/src/study/reactStudy/MyComponent.js'
import MyComponentClass from "../../react_hook/src/study/reactStudy/MyComponentClass";
import CounterNumber from "../../react_hook/src/study/reactStudy/CounterNumber";
import Say from "../../react_hook/src/study/reactStudy/useState"
import EventPractice from "../../react_hook/src/study/reactStudy/EventPractice";
import EventPracticeF from "../../react_hook/src/study/reactStudy/EventPracticeF"
import DomComponent from "./reactStudy/DomComponent";
import ScrollBox from "../../react_hook/src/study/reactStudy/ScrollBox";
import IterationSample from "../../react_hook/src/study/reactStudy/ComponentTesc";
import LifeCycleSample from "../../react_hook/src/study/reactStudy/LifeCycleSample";
import ErrorBoundary from "../../react_hook/src/study/reactStudy/ErrorBoundary";

// function getRandomColor(){
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

const App =()=> {

    // const [visible,setVisible] = useState(false);

    // state = {
    //     color : '#000000'
    // }
    //
    // handleClick = () =>{
    //     this.setState({
    //         color:getRandomColor()
    //     });
    // }

  return (
      <div>
          {/*<button onClick={()=>{setVisible(!visible);}}>*/}
          {/*  {visible ? '숨기기' : '보이기'}*/}
          {/*</button>*/}
          {/*<hr/>*/}
          {/*{visible && <Info/>}*/}
          {/*<Info></Info>*/}
          <Average/>
          {/*<Counter fixedNumber={2}/>*/}
          {/*<MyComponent name={'청이'} favoriteNumber={1}>리액트</MyComponent>*/}
          {/*<MyComponentClass name={'청이'} favoriteNumber={1}>리액트</MyComponentClass>*/}
          {/*<Say/>*/}
          {/*<EventPractice/>*/}
          {/*<EventPracticeF/>*/}
          {/*<DomComponent/>*/}
          {/*<ScrollBox ref={(ref)=>this.scrollBox=ref}/>*/}
          {/*<button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>*/}
          {/*<IterationSample></IterationSample>*/}
          {/*<button onClick={this.handleClick}>랜덤색상</button>*/}
          {/*<ErrorBoundary>*/}
          {/*<LifeCycleSample color={this.state.color}/>*/}
          {/*</ErrorBoundary>*/}
      </div>
  )
}
export default App;
