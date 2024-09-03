declare interface ContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {}

declare interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "contained" | "outlined" | "text";
}

