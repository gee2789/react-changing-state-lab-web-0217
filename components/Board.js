const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className = "board">
        {board.map(function(value, index){
          return <Field onClick={onClick.bind(null, index)} index={index} player={value}/>
        })
      }
      </div>
    );
  }
}

module.exports = Board;
