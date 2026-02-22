import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("acount-item")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7332975912608563202~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=028f81a0&x-expires=1771786800&x-signature=GWbY36AYjBD0JFKzhmKQxfnqZ1I%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
                alt=""
            />
            <div className={cx("item-info")}>
                <p className={cx("nickname")}>
                    <strong>Nguyen Van Nam</strong>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx("name")}>Nguyen Van Nam</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
