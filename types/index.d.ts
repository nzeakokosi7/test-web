declare interface ContainerProps
  extends React.ComponentPropsWithoutRef<"div"> {}

declare interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "contained" | "outlined" | "text";
}

declare interface BlogProps {
  imgUrl: string;
  alt: string;
  type: string;
  title: string;
  description: string;
  authorImg: string;
  authorImgAlt: string;
  author: string;
  date_created: string;
  minute_read: string;
  linkUrl: string;
}
