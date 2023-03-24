'use client';
import BLOG from "@/blog.config";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);
import(`dayjs/locale/${BLOG.lang.slice(0, 2)}`).then(() => {
    dayjs.locale(BLOG.lang.slice(0, 2));
}).catch(() => { console.warn("dayjs locale not found") });

export default function FormattedDate({ date }) {
    return (
        <span>
            {dayjs(date).format("ll")}
        </span>
    );
}

