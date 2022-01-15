import moment from "moment";

export function VideoGrid({ children, style }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", ...style }}>
      {children}
    </div>
  );
}

export function Video({ url, title, views, timestamp, channel, thumbnail }) {
  return (
    <a
      href={url}
      style={{ width: "210px", marginRight: "4px", marginBottom: "24px" }}
    >
      <img src={thumbnail} alt={title} style={{ width: "100%" }} />
      <p
        style={{
          margin: "8px 0 8px",
          color: "#000",
          fontSize: "16px",
          paddingRight: "24px",
        }}
      >
        {title}
      </p>
      <p
        style={{
          margin: 0,
          color: "#606060",
          fontSize: "14px",
          paddingRight: "24px",
        }}
      >
        {`${views} view${views === 0 || views > 1 ? "s" : ""}`}
        {" \u2022 "}
        {moment(timestamp).fromNow()}
      </p>
    </a>
  );
}
