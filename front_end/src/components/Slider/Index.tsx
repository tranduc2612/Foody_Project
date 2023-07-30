import images from "~/assets/images";

type PropType = {
  children: React.ReactNode;
};

function SliderImage({ children }: PropType) {
  return (
    <div style={{ position: "relative" }}>
      <img src={images.img_slider.imgSlider1} alt="" />
    </div>
  );
}

export default SliderImage;
