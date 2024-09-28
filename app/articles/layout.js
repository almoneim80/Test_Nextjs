export default function ({ children }) {
  return (
    <div>
      <h1>This is layout of Articles</h1>

      <div
        style={{
          border: "1px solid #fff",
          marginTop: "50px",
          backgroundColor: "orange",
          padding: "50px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Article Page 📃",
};
