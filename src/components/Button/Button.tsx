import { Button } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  width?: string | number;
  type?: "button" | "submit" | "reset" | undefined;
  my?: string | number;
  mt?: string | number;
  mb?: string | number;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ButtonComp: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  return (
    <Button
      {...(variant === "secondary" && { color: "primary.normal", border: "1px", bgColor: "white" })}
      {...(variant === "primary" && { bgColor: "primary.normal", color: "white", _hover: { bgColor: "primary.darker" } })}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonComp;
