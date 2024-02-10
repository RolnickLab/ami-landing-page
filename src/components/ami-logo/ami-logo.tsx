import Image from "next/image";

export const AMILogo = ({ size }: { size: number }) => (
  <Image
    src="/ami-logo.png"
    alt="AMI Logo"
    width={size}
    height={size}
    priority
  />
);
