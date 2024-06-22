const SmallAuthorListItem = ({ authors }) => {
  console.log("authors", authors);
  const { authorName, age } = authors;
  return (
    <p>
      Name :{authorName} ,Age :{age}
    </p>
  );
};

export default SmallAuthorListItem;
