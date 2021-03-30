// static getDerivedStateFromProps(nextProps, prevState){
//     if(nextProps !== prevState.value){
//         return { value : nextProps.value}
//     }
//     return null
// }
//
// getSnapshotBeforeUpdate(prevProps, prevState){
//     if(prevState.array !== this.state.array){
//         const {scrollTop, scrollHeight} = this.list
//         return {scrollTop, scrollHeight};
//     }
// }
//
// conponentDidCatch(error, info){
//     this.setState({
//         error:true
//     });
//     console.log({error, info});
// }