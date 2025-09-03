    // const launchDate = new Date("December 25, 2025 8:00:00").getTime();

    //     const x = setInterval(function() {
    //     const now = new Date().getTime();
    //     const distance = launchDate - now;

    //     // Calculate days, hours, minutes, and seconds
    //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //     // Display the result
    //     document.getElementById("days").innerHTML = days;
    //     document.getElementById("hours").innerHTML = hours;
    //     document.getElementById("minutes").innerHTML = minutes;
    //     document.getElementById("seconds").innerHTML = seconds;

    //     //         // Update the DOM
    //     // document.getElementById("days").textContent = days.toString().padStart(2, '0');
    //     // document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    //     // document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    //     // document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

    //     // Update progress bar
    //     const startDate = new Date(launchDate).setMonth(launchDate.getTime()); // 3 months before launch
    //     const totalTime = launchDate - startDate;
    //     const elapsed = now - startDate;
    //     const progressPercent = Math.min((elapsed / totalTime) * 100, 100);
    //     document.getElementById("progress").style.width = progressPercent.toFixed(2) + '%';

    //     // If the countdown is finished, display a message
    //     if (distance < 0) {
    //         clearInterval(x);
    //         document.getElementById("countdown").innerHTML = "Website is Live!";
    //     }
    // }, 1000); // Update every 1 second

const launchDate = new Date("December 25, 2025 8:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Calculate progress (from 3 months before launch until launch)
    const launchDateObj = new Date("December 25, 2025 8:00:00");
    const startDateObj = new Date(launchDateObj);
    startDateObj.setMonth(startDateObj.getMonth() - 1); // subtract 3 months

    const startDate = startDateObj.getTime();
    const totalTime = launchDate - startDate;
    const elapsed = now - startDate;
    const progressPercent = Math.min(Math.max((elapsed / totalTime) * 100, 0), 100);

    document.getElementById("progress").style.width = progressPercent.toFixed(2) + '%';

    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Website is Live!";
    }
}, 1000); // Update every 1 second
