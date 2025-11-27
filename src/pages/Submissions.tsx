import { useEffect, useState } from "react";

type SubmissionItem = {
  _id: string;
  status: string;
  documentId: {
    title: string;
  };
};

export default function Submissions() {
  const [items, setItems] = useState<SubmissionItem[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/submissions/mine", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h1>My Submissions</h1>

      {items.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              {item.documentId.title} — <strong>{item.status}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}