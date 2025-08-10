var toLeftButton = document.getElementById("nut-chuyen-trai");
var toRightButton = document.getElementById("nut-chuyen-phai");

var carousel = document.getElementById("carousel");
var slides = carousel.querySelectorAll(".anh-lien-ket");
var slideWidth = slides[0].offsetWidth; // Chiều rộng của mỗi ảnh
var totalSlides = slides.length;
var currentIndex = 0;

// Hàm chuyển ảnh theo chỉ số
function goToSlide(index) {
    carousel.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
    });
}

// Hàm chuyển sang ảnh tiếp theo
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Quay lại ảnh đầu tiên nếu đến cuối
    goToSlide(currentIndex);
}

// Hàm chuyển sang ảnh trước
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Quay lại ảnh cuối nếu đang ở đầu
    goToSlide(currentIndex);
}

// Gán sự kiện cho các nút
toLeftButton.addEventListener("click", prevSlide);
toRightButton.addEventListener("click", nextSlide);

// Tự động chuyển ảnh mỗi 3 giây
var autoSlideInterval = setInterval(nextSlide, 3000);

// Dừng tự động khi di chuột vào carousel, tiếp tục khi rời chuột
carousel.addEventListener("mouseover", () => clearInterval(autoSlideInterval));
carousel.addEventListener("mouseout", () => {
    autoSlideInterval = setInterval(nextSlide, 3000);
});
