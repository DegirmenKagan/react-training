type Props = {
  text: string;
};

const CodeBlock = (props: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#232247",
        borderRadius: 30,
        border: "3px solid #746247",
        padding: "5px 20px",
      }}
    >
      <button style={{ marginTop: 5, float: "right", cursor: "pointer" }}>
        Copy
      </button>
      <pre>
        <code>{props.text}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
