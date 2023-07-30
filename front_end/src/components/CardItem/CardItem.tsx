import classNames from "classnames/bind";
import styles from "./CardItem.module.scss";
import Img from "~/components/Image/Img";
import images from "~/assets/images";
import Rating from "@mui/material/Rating";

// type PropsType = {
//   id: string;
//   nameFood: string;
//   nameAuthor: string;
//   rating: string;
//   dateCreated: string;
//   price: string;
//   amountPeople: string;
//   img: string;
// };

const cx = classNames.bind(styles);

function CardItem() {
  return (
    <div className={cx("card")}>
      <div className={cx("card__wrap")}>
        <div className={cx("card__img")}>
          <Img
            src={images.img_product.imgProduct}
            size="f-width"
            classNames={cx("custom__image")}
            isBorder={true}
          />
        </div>
        <div className={cx("card__layer")}></div>
      </div>

      <div className={cx("card__info")}>
        <div className={cx("card__info-left")}>
          <h3 className={cx("card__food-name")}>
            Bai Tang Gao - Pak Thong Koh (Chinese White Honeycomb Cake)
          </h3>
          <span className={cx("card__author")}>Trần Minh Đức</span>
          <h4 className={cx("card__price")}>100.000đ</h4>
        </div>
        <div className={cx("card__info-right")}>
          <span className={cx("card__amount-people")}>2 người</span>
        </div>
      </div>

      <div className={cx("card__rating")}>
        <Rating
          name="read-only"
          style={{ fontSize: "2.5rem" }}
          value={2}
          readOnly
        />
      </div>
    </div>
  );
}

export default CardItem;
