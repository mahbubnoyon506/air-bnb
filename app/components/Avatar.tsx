"use client";

import Image from "next/image";

interface AvatarProps {
  src: any
}

const Avatar: React.FC<AvatarProps> = ({src}) => {
  console.log(src.image)
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src.image || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
