import React, {Component} from 'react';
class EventPractice extends Component {

    state={
        username:"",
        message: ""
    }
    //
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    // handleChange(e){
    //     this.setState({
    //         message:e.target.value
    //     });
    // }
    //
    // handleClick(){
    //     alert(this.state.message);
    //     this.setState({
    //       message: ""
    //     });
    // }

    handleChange = (e) =>{
        this.setState({

            // message:e.target.value
            [e.target.name]:e.target.value
        });
    }
    handleClick = ()=> {
        alert(this.state.username +': '+this.state.message);
        // alert(this.state.message);
        this.setState({
            name : "",
            message: ""
        });
    }

    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />

                <button onClick={this.handleClick}>확인</button>

                {/*// value={this.state.message}*/}
                {/*// onChange={(e) =>{*/}
                {/*//     // console.log(e.target.value);*/}
                {/*//     this.setState({*/}
                {/*//         message: e.target.value*/}
                {/*//     })*/}
                {/*// }}/>*/}
                {/*// <button*/}
                {/*//     onClick={()=>{*/}
                {/*//         alert(this.state.message);*/}
                {/*//         this.setState({*/}
                {/*//             message:""*/}
                {/*//         });*/}
                {/*//     }}>확인</button>*/}
            </div>
        );
    }
}

export default EventPractice;