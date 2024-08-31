import CodeBlock from "./CodeBlock";

type Props = { header: string; desc: string; code: string };

const Card = (props: Props) => {
  return (
    <div className="card">
      <h1>{props.header}</h1>
      <p>{props.desc}</p>
      <CodeBlock text={props.code} />
    </div>
  );
};

export default Card;
