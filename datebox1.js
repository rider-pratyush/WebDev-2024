document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('tooltip');

    function updateTooltip() {
        const now = new Date();
        const options = {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit'
        };
        tooltip.textContent = now.toLocaleDateString('en-US', options);
    }

    const calendarIcon = document.querySelector('.calendar-icon-container');
    calendarIcon.addEventListener('mouseover', updateTooltip);
});
