const buttons = document.querySelectorAll('.toggle')
const faqs = document.querySelectorAll('.faq')

buttons.forEach(btn => btn.onclick = () =>  btn.parentNode.classList.toggle('active'))




// resoluçao1
// buttons.forEach((btn, indice) => {
//     btn.addEventListener('click', () => {
//         btn.classList.toggle('x')
//         faqs.forEach((faq, indiceFaq) => {
//             if(indice === indiceFaq){
//                 faq.classList.toggle('y')
//             }   
//         })
//     })
// })