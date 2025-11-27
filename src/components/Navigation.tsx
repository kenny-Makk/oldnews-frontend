import { Link } from "react-router-dom";

export default function Navigation() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // writer / editor

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <nav style={styles.nav}>
      {/* Home は全員表示 */}
      <Link style={styles.link} to="/">Home</Link>

      {role === "writer" && (
        <>
          <Link style={styles.link} to="/draft">Make Draft</Link>
          <Link style={styles.link} to="/submissions">Submissions</Link>
          <Link style={styles.link} to="/published">Published</Link>
        </>
      )}
      {role === "editor" && (
        <>
          <Link style={styles.link} to="/editor-inbox">Inbox</Link>
          <Link style={styles.link} to="/review">Review</Link>
          <Link style={styles.link} to="/published">Published</Link>
        </>
      )}

      {/* 未ログイン → Login を表示 */}
      {!token && <Link style={styles.link} to="/login">Login</Link>}

      {/* ログイン済み → Logout 表示 */}
      {token && (
        <button style={styles.logoutBtn} onClick={logout}>
          Logout
        </button>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    background: "#f5f5f5",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
  },
  link: {
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    color: "#222",
  },
  logoutBtn: {
    marginLeft: "auto",
    padding: "8px 16px",
    fontSize: "16px",
    background: "#fff",
    border: "1px solid #aaa",
    borderRadius: "8px",
    cursor: "pointer",
  },
};