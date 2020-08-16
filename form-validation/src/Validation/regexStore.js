export const emailRegex = RegExp(
    /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|in|cognizant|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/
);
export const passwordRegex = RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
)
