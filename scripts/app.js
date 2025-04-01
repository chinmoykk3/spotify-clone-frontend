// Sample data for trending songs and popular artists
const trendingSongs = [
    {
        title: 'Finding Her',
        artist: 'Kushagra, Bharath, Saaheel',
        cover: 'https://via.placeholder.com/180?text=Finding+Her'
    },
    {
        title: '2 Khatole (Lofi Mix)',
        artist: 'Masoom Sharma',
        cover: 'https://via.placeholder.com/180?text=2+Khatole'
    },
    {
        title: 'CHAL',
        artist: 'Dabzee, Rishi Roy, Fathima Jahaan',
        cover: 'https://via.placeholder.com/180?text=CHAL'
    },
    {
        title: 'Jhol',
        artist: 'Maanu, Annural Khalid',
        cover: 'https://via.placeholder.com/180?text=Jhol'
    }
];

const popularArtists = [
    {
        name: 'Pritam',
        image: 'https://via.placeholder.com/180?text=Pritam'
    },
    {
        name: 'A.R. Rahman',
        image: 'https://via.placeholder.com/180?text=AR+Rahman'
    },
    {
        name: 'Arijit Singh',
        image: 'https://via.placeholder.com/180?text=Arijit+Singh'
    },
    {
        name: 'Sachin-Jigar',
        image: 'https://via.placeholder.com/180?text=Sachin+Jigar'
    }
];

// Function to create song cards
function createSongCard(song) {
    return `
        <div class="song-card">
            <img src="${song.cover}" alt="${song.title}">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
        </div>
    `;
}

// Function to create artist cards
function createArtistCard(artist) {
    return `
        <div class="artist-card">
            <img src="${artist.image}" alt="${artist.name}">
            <h3>${artist.name}</h3>
        </div>
    `;
}

// Populate trending songs and popular artists
document.addEventListener('DOMContentLoaded', () => {
    const trendingSongsContainer = document.querySelector('.trending-songs');
    const popularArtistsContainer = document.querySelector('.popular-artists');

    // Add trending songs
    trendingSongsContainer.innerHTML = trendingSongs
        .map(song => createSongCard(song))
        .join('');

    // Add popular artists
    popularArtistsContainer.innerHTML = popularArtists
        .map(artist => createArtistCard(artist))
        .join('');

    // Play button functionality
    const playButton = document.querySelector('.play-btn');
    let isPlaying = false;

    playButton.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playButton.innerHTML = isPlaying 
            ? '<i class="fas fa-pause"></i>' 
            : '<i class="fas fa-play"></i>';
    });

    // Volume control functionality
    const volumeBar = document.querySelector('.volume-bar');
    const volumeProgress = document.querySelector('.volume-progress');
    let isDraggingVolume = false;

    volumeBar.addEventListener('mousedown', (e) => {
        isDraggingVolume = true;
        updateVolume(e);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDraggingVolume) {
            updateVolume(e);
        }
    });

    document.addEventListener('mouseup', () => {
        isDraggingVolume = false;
    });

    function updateVolume(e) {
        const rect = volumeBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.max(0, Math.min(100, (x / width) * 100));
        volumeProgress.style.width = `${percentage}%`;
    }

    // Progress bar functionality
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
    let isDraggingProgress = false;

    progressBar.addEventListener('mousedown', (e) => {
        isDraggingProgress = true;
        updateProgress(e);
    });

    document.addEventListener('mousemove', (e) => {
        if (isDraggingProgress) {
            updateProgress(e);
        }
    });

    document.addEventListener('mouseup', () => {
        isDraggingProgress = false;
    });

    function updateProgress(e) {
        const rect = progressBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.max(0, Math.min(100, (x / width) * 100));
        progress.style.width = `${percentage}%`;
    }
}); 