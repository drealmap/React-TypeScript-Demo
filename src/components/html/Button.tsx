type CustomButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

export const CustomButton = ({
  variant,
  children,
  ...rest
}: CustomButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
