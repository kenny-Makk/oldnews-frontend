import { useState } from "react";

export default function MakeDraft() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createDocument = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:3000/documents/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });

    const data = await response.json();
    console.log("Created:", data);
    alert("Document created!");
  };

  const submitDocument = async () => {
    const token = localStorage.getItem("token");

    // Create the document first
    const response = await fetch("http://localhost:3000/documents/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });

    const newDoc = await response.json();

    // Ask for editor ID
    const editorId = prompt("Enter Editor ID to submit to:");
    if (!editorId) {
      alert("Submission cancelled: No editor ID provided.");
      return;
    }

    // Submit to editor
    const submitResponse = await fetch("http://localhost:3000/submissions/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        documentId: newDoc._id,
        receiverId: editorId
      })
    });

    const submitData = await submitResponse.json();
    console.log("Submitted:", submitData);
    alert("Document submitted to editor!");
  };

  return (
    <div>

      <h1>Create Draft</h1>

      <input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={createDocument}>Create</button>
      <button onClick={submitDocument}>Submit to Editor</button>
    </div>
  );
}