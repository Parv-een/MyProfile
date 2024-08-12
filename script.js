// alert('hello');
const modal =document.getElementById("modal");
const closeModalBtn = document.getElementById("close_modal");
const projectContainer=document.getElementById("projects");
//const projectCard = document.querySelectorAll(".project_card");




const project1= {
    title: "Project 1",
    description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis consectetur earum fugiat reprehenderit, itaque, dolorem quibusdam ipsam, placeat quod impedit assumenda laboriosam atque obcaecati ex tenetur natus nesciunt nulla tempore?",
    imgSrc:
    "https://images.unsplash.com/photo-1723199687351-45732ce7e10f?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
};

const project2 = {
    title: "Project 2",
    description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam eveniet quos temporibus consequuntur. Quam ipsam doloremque est obcaecati quas! Nulla minima aliquam architecto alias incidunt exercitationem quos sint fuga!",
    imgSrc:
    "https://images.unsplash.com/photo-1531002095483-36d12dd591f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
};

const project3 = {
    title:"Project 3",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam eveniet quos temporibus consequuntur. Quam ipsam doloremque est obcaecati quas! Nulla minima aliquam architecto alias incidunt exercitationem quos sint fuga!",
    imgSrc:
    "https://images.unsplash.com/photo-1606955088693-4ef244c0a5ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

const projects =[project1,project2,project3];
//anonymous function
// closeModalBtn.addEventListener('click',function() {
//     modal.classList.add("hide");
// }
// );

for(let index=0; index <projects.length; index++){
    const li =document.createElement("li");
    li.classList.add("project_card");

    const img =document.createElement("img");
    img.src=projects[index].imgSrc;
    img.alt=projects[index].title;

    const description = document.createElement("p");
    description.textContent = projects[index].description;

    li.appendChild(img);
    li.appendChild(description);

    li.addEventListener("click",() => onProjectCardClickHandler(index));

    projectContainer.appendChild(li);



}


function onCloseModalBtnClickHandler(){
    modal.classList.add("hide");


}


function onProjectCardClickHandler(index){
    const modalContent = document.getElementById("modal_content");
    const selectedProject = projects[index];

    const titleElement =modalContent.querySelector("h2");
    titleElement.textContent = selectedProject.title;

    const descriptionElement=modalContent.querySelector("p");
    descriptionElement.textContent = selectedProject.description;

    const imageElement =modalContent.querySelector("img");
    imageElement.src = selectedProject.imgSrc;
    imageElement.alt = selectedProject.title;



    modal.classList.remove("hide");
}

closeModalBtn.addEventListener("click",onCloseModalBtnClickHandler);

//for(let index=0; index.length >0; index++){
//     experienceCard[index].addEventListener("click",onProjectCardClickHandler);
// }