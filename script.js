// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
        if (current === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
});

// Fetch Prayer Times from API
async function fetchPrayerTimes() {
    try {
        const response = await fetch('https://us.mohid.co/md/germantown/cicmd/masjid/widget/api/index/?m=prayertimings');
        const data = await response.json();
        
        if (data && data.prayerTimes) {
            updatePrayerTimes(data.prayerTimes);
        }
        
        if (data && data.jummahTimes) {
            updateJummahTimes(data.jummahTimes);
        }
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        // Keep default times if API fails
    }
}

function updatePrayerTimes(times) {
    const prayerMap = {
        'fajr': times.fajr || times.Fajr,
        'dhuhr': times.dhuhr || times.Dhuhr || times.zuhr || times.Zuhr,
        'asr': times.asr || times.Asr,
        'maghrib': times.maghrib || times.Maghrib,
        'isha': times.isha || times.Isha
    };
    
    // Update each prayer time in the DOM
    Object.keys(prayerMap).forEach(prayer => {
        const timeElement = document.querySelector(`.prayer-item[data-prayer="${prayer}"] .prayer-time`);
        if (timeElement && prayerMap[prayer]) {
            timeElement.textContent = formatTime(prayerMap[prayer]);
        }
    });
}

function updateJummahTimes(jummahData) {
    const jummahGrid = document.querySelector('.jummah-grid');
    if (!jummahGrid || !jummahData || jummahData.length === 0) return;
    
    jummahGrid.innerHTML = '';
    
    jummahData.forEach((jummah, index) => {
        const jummahItem = document.createElement('div');
        jummahItem.className = 'jummah-item';
        jummahItem.innerHTML = `
            <div class="jummah-number">Jummah ${index + 1}</div>
            <div class="jummah-time">${formatTime(jummah.time || jummah)}</div>
            ${jummah.speaker ? `<div class="jummah-speaker">${jummah.speaker}</div>` : ''}
        `;
        jummahGrid.appendChild(jummahItem);
    });
}

function formatTime(time) {
    // If time is already formatted (contains AM/PM), return as is
    if (typeof time === 'string' && (time.includes('AM') || time.includes('PM'))) {
        return time;
    }
    
    // If time is in 24-hour format (HH:MM), convert to 12-hour
    if (typeof time === 'string' && time.includes(':')) {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:${minutes} ${ampm}`;
    }
    
    return time;
}

// Load prayer times when page loads
document.addEventListener('DOMContentLoaded', fetchPrayerTimes);

// Refresh prayer times every 5 minutes
setInterval(fetchPrayerTimes, 5 * 60 * 1000);
