type Props = { component: JSX.Element };

const CodePreview = (props: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#333123",
        borderRadius: 30,
        border: "3px solid #746247",
        padding: "5px 20px",
        marginTop: 20,
      }}
    >
      {props.component}
    </div>
  );
};

export default CodePreview;
