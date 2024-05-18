function updateTime() {
    var now = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
    var month = monthNames[now.getMonth()];
    var date = now.getDate();
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Add leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    var timeString = month + ' ' + date + ', ' + year + ' ' + hours + ':' + minutes + ':' + seconds;
    
    document.getElementById('clock').textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);
