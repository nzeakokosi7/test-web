export default function Container(props: ContainerProps) {
  const { className, ...restProps } = props;
  return (
    <div
      className={`w-full max-w-[1382px] px-[24px] ${className}`}
      {...restProps}
    />
  );
}
