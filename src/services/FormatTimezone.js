import { DateTime } from "luxon";
const formatToLocalTime = (
    secs,
    zones,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm"
  ) => DateTime.fromSeconds(Number(secs)).setZone(zones).toFormat(format);
export default formatToLocalTime;