export default ({ name, url }) => {
  return (
    <li>
      <a className="card-link" href={url}>
        {name}
      </a>
    </li>
  );
};
