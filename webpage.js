const targetDate = new Date("June 6, 2026 23:45:00").getTime();

    const updateCountdown = setInterval(function() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

      if (distance < 0) {
        clearInterval(updateCountdown);
        document.getElementById("countdown").innerHTML = "Time's up!";
      }
    }, 1000);

function showContent(id) {
      const sections = document.querySelectorAll('.content');
      sections.forEach(section => section.style.display = 'none');
      document.getElementById(id).style.display = 'block';
    }
