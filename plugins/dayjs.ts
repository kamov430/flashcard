import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

export default defineNuxtPlugin(() => {
  dayjs.extend(relativeTime);
  dayjs.locale("ko");
});
