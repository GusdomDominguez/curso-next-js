import { useRouter } from "next/router";

export default function post() {
  const router = useRouter();
  return (
    <div>
      <h2>Post Details</h2>
      <p>Post ID: {router.query.post}</p>
    </div>
  );
}
