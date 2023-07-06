import classNames from "classnames/bind";
import style from "./ResultItem.module.scss";
import Img from "~/components/Image/Img";

export type ResultType = {
  id: number;
  name_food: string;
  img: string;
  author: string;
  timeCreated: string;
};

type PropsType = {
  data: ResultType;
};

const cx = classNames.bind(style);

function ResultItem({ data }: PropsType) {
  return (
    <>
      <div key={data.id} className={cx("search__result-item")}>
        {/* left result */}
        <div className={cx("search__result-left")}>
          <Img src={data.img} size={"sm"} />
          <div className={cx("search__result-info")}>
            <div className={cx("search__result-food-name")}>
              {data.name_food}
            </div>
            <div className={cx("search__result-food-author")}>
              {data.author}
            </div>
          </div>
        </div>
        {/* right result */}
        <div className={cx("search__result-right")}>
          <div className={cx("search__result-food-created")}>
            {data.timeCreated}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultItem;
