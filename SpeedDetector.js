function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    if (speed <= 70) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            return "License suspended";
        } else {
            return "Points: " + demeritPoints;
        }
    }
}