import Data from "./PlacesToVisitData";
function CardsLayout() {
  const data = Data;
  const CardsLayoutData = data.map((card) => {
    return (
      <div className="cards-layout-container" key={card.id}>
        <h1 className="title">{card.title}</h1>
        <p className="description">{card.description}</p>
        <label className="location">Location: {card.location}</label>
        <label className="visitors">
          Numbers of Visitors: <b> {card.visitors}</b>
        </label>
      </div>
    );
  });
  return <div>{CardsLayoutData}</div>;
}
export default CardsLayout;
