export default function List() {
  let Gift = [
    { name: "Tomatoes", price: 2500 },
    { name: "Pasta", price: 4500 },
    { name: "Coconut", price: 3500 },
  ];

  return (
    <div>
      <h1>상품목록</h1>

      {Gift.map((a, i) => {
        return (
          <div key={i}>
            <h3>{a.name}</h3>
            <p>{a.price}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
