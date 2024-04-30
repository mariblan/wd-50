const url = 'https://jsonplaceholder.typicode.com/users';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Request failed with status of ${response.status}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error in fetching', error);
  }
};

const parsedUsers = fetchData(url);
const parsedPosts = fetchData("https://jsonplaceholder.typicode.com/posts");

parsedUsers.then(data => console.log(data));
