function convertTime(hours) {
  let minutes = hours * 60;
	let seconds = minutes * 60;
	return `${hours} hours = ${minutes} minutes or ${seconds} seconds`;
}

convertTime(4); // Expected Output: 4 hours = 240 minutes or 14400 seconds