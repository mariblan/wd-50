import { useParams } from 'react-router-dom';

function DynamicComponent({ posts }) {
  const { id } = useParams();
  //   console.log(id);
  //   console.log(typeof id);
  //   console.log(posts);
  const post = posts.find((post) => {
    console.log(typeof post.id.toString());
    return post.id.toString() === id;
  });
  console.log(post);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
    </div>
  );
}

export default DynamicComponent;
