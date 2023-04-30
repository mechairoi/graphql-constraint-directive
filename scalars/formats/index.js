import byte from "./byte.js";
import date from "./date.js";
import dateTime from "./date-time.js";
import email from "./email.js";
import ipv4 from "./ipv4.js";
import ipv6 from "./ipv6.js";
import uri from "./uri.js";
import uuid from "./uuid.js";
export { byte };
export { dateTime as date-time };
export { date };
export { email };
export { ipv4 };
export { ipv6 };
export { uri };
export { uuid };
export default {
    byte,
    date-time: dateTime,
    date,
    email,
    ipv4,
    ipv6,
    uri,
    uuid
};
