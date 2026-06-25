console.log("JS Active");

const burger = document.querySelector(".burger-icon");
const nav = document.querySelector(".menu");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        nav.classList.toggle("active");
    });

const header = document.querySelector('.main-header', '.head-wrap');

function handleScroll() {
  header.classList.toggle('scroll', window.scrollY > 200);
}

window.addEventListener('scroll', handleScroll);
handleScroll();


const faqBoxes = document.querySelectorAll(".faq-content-box");

faqBoxes.forEach(box => {
    box.classList.remove("show");
    const head = box.querySelector(".faq-content-head");
    const content = box.querySelector(".faq-content");
     content.style.maxHeight = null;

    head.addEventListener("click", () => {

        const isOpen = box.classList.contains("show");

        // Close all
        faqBoxes.forEach(item => {
            item.classList.remove("show");
            item.querySelector(".faq-content").style.maxHeight = null;
        });

        // Open clicked item if it wasn't already open
        if (!isOpen) {
            box.classList.add("show");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});


// const faqBoxes = document.querySelectorAll(".faq-content-box");

// faqBoxes.forEach(box => {
//     const head = box.querySelector(".faq-content-head");

//     head.addEventListener("click", () => {
//         box.classList.toggle("show");
//     });
// });




// ==========
// option to show box content on first load below

// const faqBoxes = document.querySelectorAll(".faq-content-box");

// // open first by default
// faqBoxes.forEach((box, index) => {
//     const content = box.querySelector(".faq-content");

//     if (index === 0) {
//         box.classList.add("show");

//         // wait for layout to settle
//         requestAnimationFrame(() => {
//             requestAnimationFrame(() => {
//                 content.style.maxHeight = content.scrollHeight + "px";
//             });
//         });

//     } else {
//         box.classList.remove("show");
//         content.style.maxHeight = null;
//     }
// });

// faqBoxes.forEach(box => {
//     const head = box.querySelector(".faq-content-head");
//     const content = box.querySelector(".faq-content");

//     head.addEventListener("click", () => {

//         const wasOpen = box.classList.contains("show");

//         const before = head.getBoundingClientRect().top;

//         faqBoxes.forEach(b => {
//             b.classList.remove("show");
//             b.querySelector(".faq-content").style.maxHeight = null;
//         });

//         if (!wasOpen) {
//             box.classList.add("show");

//             requestAnimationFrame(() => {
//                 content.style.maxHeight = content.scrollHeight + "px";

//                 const after = head.getBoundingClientRect().top;
//                 window.scrollBy(0, after - before);
//             });
//         }
//     });
// });
