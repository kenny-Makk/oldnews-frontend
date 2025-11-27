import { useEffect, useState } from "react";

type PublishedItem = {
  _id: string;
  title: string;
  content: string;
  ownerId: string;
  updatedAt: string;
};

export default function Published() {
  const [published, setPublished] = useState<PublishedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/documents/published", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPublished(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Published Documents</h1>

      {published.length === 0 ? (
        <p>No published documents yet.</p>
      ) : (
        <ul>
          {published.map((doc) => (
            <li key={doc._id}>
              <h3>{doc.title}</h3>
              <p>{doc.content}</p>
              <small>Published on: {new Date(doc.updatedAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}