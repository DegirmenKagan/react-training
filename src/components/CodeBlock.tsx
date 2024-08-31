type Props = {
  text: string;
};

const CodeBlock = (props: Props) => {
  const handleClick = async () => {
    await navigator.clipboard.writeText(props.text);
    // change button border color to green
    const button = document.querySelector("button");
    if (button) {
      button.style.border = "3px solid green";
    }
    // after 1 second, change button border color back to original
    setTimeout(() => {
      if (button) {
        button.style.border = "3px solid #746247";
      }
    }, 1000);
  };
  return (
    <div
      style={{
        backgroundColor: "#232247",
        borderRadius: 30,
        border: "3px solid #746247",
        padding: "5px 20px",
      }}
    >
      <button
        style={{ marginTop: 5, float: "right", cursor: "pointer" }}
        onClick={handleClick}
      >
        Copy
      </button>
      <pre>
        <code>{props.text}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
