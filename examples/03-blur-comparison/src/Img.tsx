import * as React from "react";
import "./img.css";

interface IImageProps {
  src: string;
  alt: string;
  height: number;
  placeholder: React.CSSProperties;
  width: number;
  variant: "blur-down" | "blur-up";
}

export const Img: React.FC<IImageProps> = ({
  alt,
  src,
  height,
  placeholder,
  width,
  variant,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div
      className={["img", `img--${variant}`, isLoaded && "is-loaded"]
        .filter(Boolean)
        .join(" ")}
      style={{
        ["--img-aspect-ratio" as keyof React.CSSProperties]: `${
          (height / width) * 100
        }%`,
      }}
    >
      <div className="img__placeholder" style={placeholder} />
      <img
        className="img__element"
        alt={alt}
        src={src}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
