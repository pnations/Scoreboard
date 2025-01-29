let scores = {
    home: 0,
    guest: 0
};

function addPoints(team, points) {
    scores[team] += points;
    document.getElementById(`${team}Score`).innerText = scores[team];
    highlightLeader();
}

function highlightLeader() {
    const homeScore = document.getElementById('homeScore');
    const guestScore = document.getElementById('guestScore');
    
    homeScore.style.boxShadow = scores.home > scores.guest ? '0 0 10px gold' : 'none';
    guestScore.style.boxShadow = scores.guest > scores.home ? '0 0 10px gold' : 'none';
}

function reset() {
    scores.home = 0;
    scores.guest = 0;
    document.getElementById('homeScore').innerText = '0';
    document.getElementById('guestScore').innerText = '0';
    highlightLeader();
}

reset();