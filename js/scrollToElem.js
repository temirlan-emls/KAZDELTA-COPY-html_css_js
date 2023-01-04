const lisItems = document.querySelectorAll("li a");
const headerElem = document.querySelector("header");
const productsListElem = document.querySelector(".productsList__wrapper");
const contactsElem = document.querySelector(".reviewAndApplic_wrapper");
const advantagesElem = document.querySelector(".advantages__container");

lisItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(item.innerText);
        if (item.innerText.toLowerCase() === "главная") {
            headerElem.scrollIntoView({ behavior: "smooth" });
        }
        if (item.innerText.toLowerCase() === "каталог") {
            productsListElem.scrollIntoView({ behavior: "smooth" });
        }
        if (item.innerText.toLowerCase() === "контакты") {
            contactsElem.scrollIntoView({
                behavior: "smooth",
            }); 
        }
        if (item.innerText.toLowerCase() === "преимущества") {
            advantagesElem.scrollIntoView({ behavior: "smooth" });
        }
    });
});
