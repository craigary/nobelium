'use client';
import dayjs from "dayjs";
import BLOG from "@/blog.config";
dayjs.extend(require("dayjs/plugin/localizedFormat"));
try {
    require(`dayjs/locale/${BLOG.lang.slice(0, 2)}`);
    dayjs.locale(BLOG.lang.slice(0, 2));
} catch (e) { }

export default function FormattedDate({ date }) {
    return (
        <span>
            {dayjs(date).format("ll")}
        </span>
    );
}

