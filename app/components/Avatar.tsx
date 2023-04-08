"use client";

import Image from "next/image";

interface AvatarProps {
  src: any
}

const Avatar: React.FC<AvatarProps> = ({src}) => {
console.log(src)
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={ "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
