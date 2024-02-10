export const Spacer = ({
  size,
  expand,
}: {
  size: number;
  expand?: boolean;
}) => (
  <div
    style={{
      width: `${size}px`,
      height: `${size}px`,
      flexGrow: expand ? 1 : "auto",
    }}
  />
);
