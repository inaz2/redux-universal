import React, { Component, PropTypes } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Counter extends Component {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <Card>
        <CardHeader
          title="Counter"
        />
        <CardText>
          Clicked: {counter} times
        </CardText>
        <CardActions>
          <FlatButton label="+" onClick={increment} />
          <FlatButton label="-" onClick={decrement} />
          <FlatButton label="Increment if odd" onClick={incrementIfOdd} />
          <FlatButton label="Increment async" onClick={() => incrementAsync()} />
        </CardActions>
      </Card>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter
