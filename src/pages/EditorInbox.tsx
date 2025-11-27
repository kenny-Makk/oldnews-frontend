import { useEffect, useState } from "react";

type SubmissionItem = {
  _id: string;
  status: string;
  documentId: {
    title: string;
  };
};

export default function EditorInbox() {
  const [inbox, setInbox] = useState<SubmissionItem[]>([]);

  // 🔵 ① 最初にデータを読み込む useEffect
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/editor/inbox", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setInbox(data));
  }, []);

  const refreshInbox = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/editor/inbox", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setInbox(data));
  };

  // 🔵 ② ★★★ この3つの関数をここに入れる！（return の前）
  const handleApprove = async (id: string) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:3000/editor/approve/${id}`, {
      method: "POST",
      headers: { Authorization: "Bearer " + token },
    });
    alert("Approved!");
    refreshInbox();
  };

  const handleReject = async (id: string) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:3000/editor/reject/${id}`, {
      method: "POST",
      headers: { Authorization: "Bearer " + token },
    });
    alert("Rejected!");
    refreshInbox();
  };

  const handlePublish = async (id: string) => {
    const token = localStorage.getItem("token");
    await fetch(`http://localhost:3000/editor/publish/${id}`, {
      method: "POST",
      headers: { Authorization: "Bearer " + token },
    });
    alert("Published!");
    refreshInbox();
  };

  // 🔵 ③ return（画面に表示）
  return (
    <div>
      <h1>Editor Inbox</h1>

      {inbox.length === 0 ? (
        <p>No submissions.</p>
      ) : (
        <ul>
          {inbox.map((item) => (
            <li key={item._id}>
              <strong>{item.documentId.title}</strong> — {item.status}

              <button onClick={() => handleApprove(item._id)}>Approve</button>
              <button onClick={() => handleReject(item._id)}>Reject</button>
              <button onClick={() => handlePublish(item._id)}>Publish</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}