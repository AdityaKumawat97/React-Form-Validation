export const emailRegex = RegExp(
    /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|in|cognizant|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/
);
export const passwordRegex = RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
)

export const candidateIDRegex = RegExp(
    /^[0-9]{6}/g
)

export const projectIDRegex = RegExp(
    /[a-zA-Z0-9]{12,12}$/
)

export const verifyLocation = RegExp(
    /^SELECT A LOCATION$/
)
export const shoreRegex = RegExp(
    /^Offshore$|^Onshore$/
)