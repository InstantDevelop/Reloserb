import { NavLink } from "react-router-dom";
import "./DropDownList.scss";

function DropDownListItem({ listItem, size }) {
  return (
    <li className={`drop-list-item ${size} `}>
      {listItem.text ? (
        <p className={`drop-list-item__text ${size}`}>{listItem.text}</p>
      ) : (
        <NavLink
          to={listItem.href.src}
          className={`drop-list-item__link drop-list-item__text ${size}`}
        >
          {listItem.href.text}
        </NavLink>
      )}
    </li>
  );
}

export default DropDownListItem;