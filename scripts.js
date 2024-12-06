
function toggleContent(element) {
    const content = element.nextElementSibling.nextElementSibling;
    const arrow = element.querySelector(".arrow");

    if (content.style.maxHeight) {
        content.style.maxHeight = null; // Закрыть
        content.style.padding = "0 20px";
        arrow.classList.remove("open");
    } else {
        // Закрываем все остальные "шторки"
        document.querySelectorAll(".module .content").forEach((el) => {
            el.style.maxHeight = null;
            el.style.padding = "0 20px";
        });
        document.querySelectorAll(".module .arrow").forEach((el) => el.classList.remove("open"));

        // Открываем текущую
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "15px 20px";
        arrow.classList.add("open");
    }

}

function buyCourse() { 
    alert("Сіз курсты сатып алуға өтінім жасадыңыз!");
    // Перенаправление на страницу оплаты
    window.location.href = "https://pay.kaspi.kz/pay/eczp15ba";
}


function scrollToContent() {
    // Находим элемент по ID
    const element = document.getElementById("content");
    
    // Прокручиваем страницу к этому элементу
    element.scrollIntoView({ behavior: 'smooth' });
}



