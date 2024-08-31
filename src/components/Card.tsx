import CodeBlock from "./CodeBlock";
import CodePreview from "./CodePreview";

export type TCard = {
  header: string;
  desc: string;
  code: string;
  component: JSX.Element;
};

const Card = (props: TCard) => {
  return (
    <div className="card">
      <h1>{props.header}</h1>
      <p>{props.desc}</p>
      <CodeBlock text={props.code} />
      <CodePreview component={props.component} />
    </div>
  );
};

export default Card;
