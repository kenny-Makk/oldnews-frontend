import { useEffect, useState } from "react";

export default function Review() {
  const [approved, setApproved] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/editor/approved", {
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => res.json())
      .then((data) => setApproved(data));
  }, []);

  return (
    <div>
      <h1>Approved Documents</h1>

      {approved.length === 0 ? (
        <p>No approved documents yet.</p>
      ) : (
        approved.map((item) => (
          <div key={item._id} style={{ marginBottom: "10px" }}>
            <strong>{item.documentId.title}</strong>  
            <p>Status: {item.status}</p>
          </div>
        ))
      )}
    </div>
  );
}