import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <img
                    className={cx("avatar")}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7332975912608563202~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=028f81a0&x-expires=1771786800&x-signature=GWbY36AYjBD0JFKzhmKQxfnqZ1I%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx("body")}>
                <p className={cx("nickname")}>
                    <strong>Nguyen Van Nam</strong>
                    <FontAwesomeIcon
                        className={cx("check")}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx("name")}>Nguyen Van Nam</p>
                <p className={cx("analytics")}>
                    <strong className={cx("value")}>8.2M </strong>
                    <span className={cx("label")}>Follower</span>
                    <strong className={cx("value")}>8.2M </strong>
                    <span className={cx("label")}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
