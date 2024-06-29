const Content = document.getElementsByClassName('content');
const navigator = document.getElementsByClassName('Navigator');

function Nav(CNav){
    //Nav Title means what user click in the navigator bar
    const NavTitle = CNav.innerHTML;

    for(let a = 0 ; a < navigator.length ;a++){

        //to remove the classname "active" in li element in navigator
        navigator[a].parentNode.classList.remove('active');

        //identify what user want to see and create an animation to hide and show some information
        if(Content[a].id === NavTitle){
            Content[a].style.animationName = "Show";
        }else{
            Content[a].style.animationName = "Hide";
        }
    }
    
    //to add the classname "active" in <li> element in navigator what user click
    CNav.parentNode.classList.add('active');
}