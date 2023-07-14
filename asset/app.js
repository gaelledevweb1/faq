const questions = document.querySelectorAll('.question');
const reponses = document.querySelectorAll('.reponse');
console.log(questions, reponses);

questions.forEach((item) => {
    console.log(item);
    item.addEventListener('click',()=>{
        console.log('cliquettis');
        const next = item.nextElementSibling;
        console.log(next);
        next.classList.toggle('visible');
        // pour selectionner tous les  i utiliser la proporiété de lastelementchild
        const icone = item.lastElementChild;
        icone.classList.toggle('fa-chevron-up');
    })
});
