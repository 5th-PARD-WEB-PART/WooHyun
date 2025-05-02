// pages/server.tsx

export async function getServerSideProps() {
  // 요청이 올 때마다 실행됨
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function ServerPage({ post }: { post: any }) {
  return (
    <div>
      <h1>Server Page</h1>
      <p>{post.title}</p>
    </div>
  );
}
