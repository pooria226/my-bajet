import React from "react";
import Image from "next/image";

const ImageProvider = ({
  alt = "alt",
  src,
  unoptimized,
  height,
  width,
  priority,
  styles,
  aspectRatio,
  classes,
}) => {
  return (
    <div
      style={{
        width: width,
        height: `${height ? height : "auto"}`,
        aspectRatio: aspectRatio,
        position: "relative",
      }}
      className={classes}
    >
      <Image
        src={src}
        alt={alt}
        unoptimized={unoptimized}
        priority={priority}
        fill={true}
        style={{ ...styles }}
      />
    </div>
  );
};
export default ImageProvider;
