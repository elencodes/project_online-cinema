function loadReviews() {
    const reviewsList = document.getElementById('reviewsList');
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];//получаем и парсим ниже подробнее будет
    reviewsList.innerHTML = reviews.map(review => `  
        <div class="review-item">
            <h3>${review.reviewName} (${review.reviewRating})</h3>
            <p>${review.reviewComment}</p>
        </div>
    `).join('');//проходимся по каждому мапом создаём новые массивы и создаём разметку отзыва
}
function saveReview(review) {//парсим и ищем по ключу 'reviews'  если ничего нет создаём пустой массив если есть добавляем отзыв и отправляем обратно
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

document.getElementById('reviewForm').addEventListener('submit', (event) => {
    event.preventDefault(); //сбрасываем естественное сосотояние и получаем значения из формы при отправке формы при нажатии submit кнопки
    const reviewName = document.getElementById('reviewName').value;
    const reviewComment = document.getElementById('reviewComment').value;
    const reviewRating = document.getElementById('reviewRating').value;

    if (reviewName && reviewComment && reviewRating) {
        const review = { reviewName, reviewComment, reviewRating };
        displayReview(review);// тут отзыв отображается на странице через другую функцию ниже
        saveReview(review); // тут мы через функцию выше в локал сторадж сохраняем
        document.getElementById('reviewForm').reset(); //тут очистка формы после отправки методом .reset()
    }
});
    function displayReview(review) {
    const reviewsList = document.getElementById('reviewsList');
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review-item';
    reviewElement.innerHTML = `
        <h3>${review.reviewName} (${review.reviewRating})</h3>
        <p>${review.reviewComment}</p>
    `;
    reviewsList.appendChild(reviewElement);
}
loadReviews();