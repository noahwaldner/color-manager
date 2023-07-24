import { Link } from "wouter";
import { Button } from "../Button";
import { FunctionComponent } from "react";

interface IBackToHomeProps {
  visible?: boolean;
}

export const BackToHome: FunctionComponent<IBackToHomeProps> = ({
  visible = true,
}) => {
  if (!visible) {
    return null;
  }
  return (
    <div>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};
