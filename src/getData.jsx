import axios from "axios";

const getData = (userId) => {
  (async () => {
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    console.log("User", user);
    console.log("Posts", posts);
  })();
  return <div></div>;
};

export default getData;
