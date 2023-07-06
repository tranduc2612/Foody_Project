import SearchIcon from "@mui/icons-material/Search";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless"; // different import path!
import "tippy.js/dist/tippy.css";
import Wrapper from "../Popper/Wrapper";
import style from "./InputSearch.module.scss";
import ResultItem, { ResultType } from "./components/ResultItem";
const cx = classNames.bind(style);

function InputSearch() {
  const [valueInput, setValueInput] = useState("");
  const [searchResult, setSearchResult] = useState([
    {
      id: 1,
      name_food: "Canh Rong Biển Ngũ Sắc Chay",
      author: "Trần Minh Đức",
      img: "https://image.cooky.vn/posproduct/g0/2686/s200x200/6344c789-9845-4e50-91a9-5aefa876fb6e.jpeg",
      timeCreated: "26/12/2002",
    },
    {
      id: 2,
      name_food: "Măng Tây Xào Lòng Gà",
      author: "Nguyễn Duy Đoàn",
      img: "	https://image.cooky.vn/posproduct/g0/18518/s200x200/22986c9f-3d53-4f9e-92f2-6c31652c4c9e.jpeg",
      timeCreated: "26/12/2002",
    },
    {
      id: 3,
      name_food: "Cá Saba Nhật Kho Cà",
      author: "Trần Mỹ Linh",
      img: "https://image.cooky.vn/posproduct/g0/6974/s200x200/04b0c5fb-d7ee-4db2-87c4-bce4391ef6d4.jpeg",
      timeCreated: "26/12/2002",
    },
  ] as ResultType[]);

  useEffect(() => {}, []);

  return (
    <div className={cx("form__search")}>
      <Tippy
        // visible={searchResult.length > 0 ? true : false}
        visible={false}
        interactive
        placement={"bottom"}
        render={(attrs) => (
          <div className={cx("search__result")} tabIndex={-1} {...attrs}>
            <Wrapper>
              <div className={cx("search__result-list")}>
                {searchResult.map((res) => {
                  return <ResultItem key={res.id} data={res} />;
                })}
              </div>
              <div className={cx("search__result-show-more")}>Show more...</div>
            </Wrapper>
          </div>
        )}
      >
        <div className={cx("wrapper")}>
          <button className={cx("btn__search")}>
            <SearchIcon />
          </button>

          <input
            className={cx("input__search")}
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
        </div>
      </Tippy>
    </div>
  );
}

export default InputSearch;
