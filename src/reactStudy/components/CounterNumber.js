import React, {Component} from 'react';

class CounterNumber extends Component {
    state = {
        number : 0,
        fixedNumber : 0
    }
    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>변경되지 않는 값 : {fixedNumber}</h2>
                <button

                    // onClick={()=>{
                    //     this.setState({ number: number +1});
                    //     this.setState({ number: this.state.number + 1 });
                    // }}

                    // onClick={() => {
                    //     this.setState((prevState, props)=> {
                    //         console.log(prevState)
                    //         console.log(props)
                    //         return {
                    //             number: prevState.number + 1
                    //         };
                    //     });
                    //     // 위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                    //     // 아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
                    //     this.setState((prevState) => ({
                    //         number: prevState.number + 1
                    //     }));
                    // }}

                    onClick={() =>{
                        this.setState({
                            number:number +1
                        },()=>{
                            console.log('방금 setState가 호출 되었습니다.');
                            console.log(this.state)
                        })
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}
export default CounterNumber;
