import React from "react";

async function sendToken(token) {
  return fetch("http://localhost:8080/name", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tk: token }),
  }).then((data) => data.json());
}
async function getName() {
  const response = await fetch("http://localhost:8080/name");
  const data = await response.json();
  const username = data;
  console.log(data);
}

export default function Welcome() {
  sendToken(localStorage.getItem("token"));
  getName();
  return (
    <>
      <h1>Welcome </h1>
    </>
  );
}
