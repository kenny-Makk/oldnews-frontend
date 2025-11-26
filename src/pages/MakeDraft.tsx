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
    </div>
  );
}