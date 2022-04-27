
var GroceryList = (props) => {

  return (
  <ul>
    {props.groceryItems.map(groceryItem => (
      <GroceryListItem groceryItem={groceryItem}/>
    ))}
  </ul>
  );
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBold : false
    };
  }

  onListItemHover(){
    this.setState({
      isBold : !this.state.isBold
    });
  }

  render() {
    var style = {
      fontWeight: this.state.isBold ? 'bold' : 'normal',
    };

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryItems={[
      {description: 'Cucumber'},
      {description: 'Kale'},
      ]}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));