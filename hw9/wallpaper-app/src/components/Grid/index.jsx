import "./main.scss";

export default function Grid({ items }) {
  const data = items.map((item, index) => (
    <div key={crypto.randomUUID()} className="container__item">
      <img src={item} alt={"grid image" + (index + 1)} />
    </div>
  ));
  return <div className="container">{data}</div>;
}
