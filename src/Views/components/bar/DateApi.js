import React from "react";

export default function DateApi() {
  const current = new Date();
  const date = `${current.getDate()} ${
    current.getMonth() + 1
  } ${current.getFullYear()}`;

  return (
    <div className="date-cont">
      <p className="date-text">{date}</p>
    </div>
  );
}
