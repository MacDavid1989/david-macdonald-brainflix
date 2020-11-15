// returns a human readable time format string
export default function convertTime(timestamp) {
    // variable with the current time in milliseconds since the epoch
    const currentTime = new Date().getTime();

    // variable with the difference between currentTime and the time argument passed to the function
    const time = Math.abs(currentTime - timestamp) / 1000;
    
    // checks if total milliseconds are greater than the equivalent of at least 1 year
    if ((time / 31536000) > 1) {
        return Math.floor(time / 31536000) + " years ago";
    } 
    // checks if total milliseconds are greater than the equivalent of at least 1 month
        else if ((time / 2592000) > 1) {
            return Math.floor(time / 2592000) + " months ago";
    } 
    // checks if total milliseconds are greater than the equivalent of at least 1 day
        else if ((time / 86400) > 1) {
            return Math.floor(time / 86400) + " days ago";
    } 
    // checks if total milliseconds are greater than the equivalent of at least 1 hour
        else if ((time / 3600) > 1) {
            return Math.floor(time / 3600) + " hours ago";
    } 
    // checks if total milliseconds are greater than the equivalent of at least 60 minutes
        else if ((time / 60) > 1) {
            return Math.floor(time / 60) + " minutes ago";
    } 
    // returns a string with time rounded to the nearest second
        else {
            return Math.floor(time) + " seconds ago";
    }
};
