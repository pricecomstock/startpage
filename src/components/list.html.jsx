import Link from "./link.html.jsx";

export default ({ label, links }) => {
  return (
    <div className="card">
      <h3>{label}</h3>
      <ul>
        {links &&
          links.map((link, index) => {
            return <Link key={index} name={link.name} url={link.url}></Link>;
          })}
      </ul>
    </div>
  );
};
