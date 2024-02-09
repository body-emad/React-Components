import Data from "./PlacesToVisitData";
function PlacesToVisit() {
  const data = Data;
  const newData = data.map(function (ele) {
    return (
      <div key={ele.id} className="PlacesToVisit">
        {" "}
        <h1>{ele.title}</h1>
        <p>{ele.description}</p>
        <p>Location: {ele.location}</p>
        <p>Number of visitors: {ele.visitors}</p>
      </div>
    );
  });
    return (
        <div>
         {newData}
        </div>
  );
}
export default PlacesToVisit;
