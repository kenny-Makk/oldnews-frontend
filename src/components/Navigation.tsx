import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/inbox">Inbox</Link>
      <Link style={styles.link} to="/draft">Make Draft</Link>
      <Link style={styles.link} to="/submit">Submit</Link>
      <Link style={styles.link} to="/submissions">Submissions</Link>
      <Link style={styles.link} to="/review">Review</Link>
      <Link style={styles.link} to="/published">Published</Link>
      <Link style={styles.link} to="/login">Login</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "10px",
    background: "#f2f2f2",
    borderBottom: "1px solid #ccc",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
};