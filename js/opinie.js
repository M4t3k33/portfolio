// Funkcja do pobierania opinii z serwera
async function fetchReviews() {
    const response = await fetch('http://localhost:3000/reviews');
    const reviews = await response.json();
    renderReviews(reviews);
}

// Funkcja do renderowania opinii na stronie
function renderReviews(reviews) {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '<h2>Opinie:</h2>';

    reviews.forEach(review => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
            <div class="rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <p>${review.comment}</p>
        `;
        reviewList.appendChild(reviewItem);
    });
}

// Event listener dla przycisku submit
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitReview').addEventListener('click', async function() {
        const rating = document.querySelector('input[name="rating"]:checked');
        const comment = document.getElementById('comment').value.trim();

        if (!rating) {
            alert('Proszę wybrać ocenę.');
            return;
        }
        if (!comment) {
            alert('Proszę dodać komentarz.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    rating: parseInt(rating.value),
                    comment: comment
                })
            });

            if (response.ok) {
                alert('Opinia została dodana!');
                document.getElementById('comment').value = '';
                document.querySelector('input[name="rating"]:checked').checked = false;
                fetchReviews();
            } else {
                alert('Błąd przy dodawaniu opinii.');
            }
        } catch (error) {
            alert('Błąd połączenia z serwerem.');
        }
    });

    // Inicjalne załadowanie opinii
    fetchReviews();
});