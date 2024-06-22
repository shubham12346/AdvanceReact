import React from "react";

const LargeAuthorListItem = ({ authors }) => {
  const { name, age, country, books } = authors;
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books?.map((book) => (
          <li key={book}>{books} </li>
        ))}
      </ul>
    </>
  );
};

export default LargeAuthorListItem;
