import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <Image
                className={cx("avatar")}
                src="https://16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/996219793a42f662d63d498deeba394e~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=11fc8d80&x-expires=1770969600&x-signature=p9rMQAE1tcdveQZFfCA72Z2RdW8%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my2"
                alt="Hoaa"
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx("check-icon")}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx("username")}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
