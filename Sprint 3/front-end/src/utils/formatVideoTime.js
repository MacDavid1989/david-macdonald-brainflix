export default function formatTime(timeInSeconds) {
	// takes the paramter and converts it to milliseconds before changing to ISO format and then returns 8 characters of the string starting at the 11th index
	const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
	// sets the min key to the value of 2 characters from the results at index 3, sets the sec key to the value of 2 characters from the results at index 6 
    return {
		minutes: result.substr(3, 2),
		seconds: result.substr(6, 2),
    };
  };