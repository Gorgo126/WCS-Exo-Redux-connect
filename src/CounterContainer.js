import React from "react";
import { connect } from "react-redux";



const mapStateToProps = state => ({
counter: state
});

const mapDispatchToProps = dispatch => ({
onAdd: () => dispatch({ type: "ADD"}),
onRemove: () => dispatch({ type: "REMOVE"}),
onAddten: () => dispatch({ type: "ADD10"}),
onRemoveten: () => dispatch({ type: "REMOVE10"}),
reset: () => dispatch({ type: "RESET"})
});


const CounterComponent = ({ counter, onAdd, onRemove, onAddten, onRemoveten, reset}) => (
<div>
<p>{counter}</p>
<button onClick={onAdd}>+</button>
<button onClick={onRemove}>-</button>
<button onClick={onAddten}>+10</button>
<button onClick={onRemoveten}>-10</button>
<button onClick={reset}>reset</button>
</div>
);




export default connect(
mapStateToProps,
mapDispatchToProps)
// eslint-disable-next-line 
(CounterComponent);
