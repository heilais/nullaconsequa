    function updateClock() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();

        // Add leading zero if minutes are less than 10
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        var t_str = hours + ":" + minutes + " ";

        // Determine whether it's AM or PM
        if (hours > 11) {
            t_str += "PM";
        } else {
            t_str += "AM";
        }

        // Update the time display
        document.getElementById('time_span').innerHTML = t_str;
    }

    // Call the function initially
    updateClock();

    // Set an interval to update the time every second (1000 milliseconds)
    setInterval(updateClock, 1000);
    