// pages/static.tsx

export async function getStaticProps() {
  // 빌드 타임에 한 번 실행됨
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function StaticPage({ post }: { post: any }) {
  return (
    <div>
      <h1>Static Page</h1>
      <p>{post.title}</p>
    </div>
  );
}
