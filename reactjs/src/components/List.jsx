function List(props) {
  // fruits.sort((a, b) => a.calories - b.calories);
  const itemList = props.items;
  const category = props.category;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: {item.calories} cal
    </li>
  ));
  return (
      <div className= "List-items">
          <h1>{category}</h1>
      <ol className="fruit-items">{listItems}</ol>
    </div>
  );
}
export default List;
