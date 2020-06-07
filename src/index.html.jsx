import List from "./components/list.html";

export default ({ data, environment }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Price Comstock</title>
        <link rel="stylesheet" href="./css/main.css" />
        <script src="/js/index.js"></script>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <div className="link-lists">
          {Object.entries(data.links).map(([key, value]) => {
            return <List label={key} links={value}></List>;
          })}
        </div>
      </body>
    </html>
  );
};
