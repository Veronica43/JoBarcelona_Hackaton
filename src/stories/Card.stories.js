import Card from "../components/card/Card";

export default {
  title: " Card-Component",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
    argTypes: { onClick: { action: "Undefined function" } },
  },
};

export const card = () => <Card />;
