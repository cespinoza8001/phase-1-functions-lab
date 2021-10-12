const hqStreet = 42;
function distanceFromHqInBlocks(street) {
    return (Math.abs(street - hqStreet));
}

const blockInFeet = 264
function distanceFromHqInFeet(destination){
    const blocks = distanceFromHqInBlocks(destination)
    return (blockInFeet * blocks);
}

function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination)
    return (blockInFeet * blocks)
}

const cents = 0.02
function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    } else if (feet <= 2000){
        return cents * (feet - 400);
    } else if (feet <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }

}