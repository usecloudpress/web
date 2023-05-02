import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { StaticImageData } from "next/legacy/image";

interface Props {
  image1: StaticImageData;
  image1Label: string;
  image2: StaticImageData;
  image2Label: string;
}

export default function ImageComparison({
  image1,
  image1Label,
  image2,
  image2Label,
}: Props) {
  return (
    <ReactCompareSlider
      itemOne={
        <div>
          <img src={image1.src} alt={image1Label} />
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "40px",
              backgroundColor: "#000000AA",
              color: "white",
              padding: "5px 10px",
              borderRadius: 3,
            }}
          >
            {image1Label}
          </span>
        </div>
      }
      itemTwo={
        <div>
          <img src={image2.src} alt={image1Label} />
          <span
            style={{
              position: "absolute",
              top: "50%",
              right: "40px",
              backgroundColor: "#000000AA",
              color: "white",
              padding: "5px 10px",
              borderRadius: 3,
            }}
          >
            {image2Label}
          </span>
        </div>
      }
      handle={
        <ReactCompareSliderHandle
          buttonStyle={{
            backdropFilter: undefined,
            WebkitBackdropFilter: undefined,
            backgroundColor: "white",
            color: "#000",
            boxShadow: undefined,
            border: "3px solid #000",
          }}
          linesStyle={{ width: 3, color: "#000" }}
        />
      }
    />
  );
}
