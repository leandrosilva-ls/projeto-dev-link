function toggleMode(){
  const html = document.documentElement

  // Usando a função toggle
  html.classList.toggle("light")

  //Pegar a tag img
  const img = document.querySelector("#profile img");

  
  

  if(html.classList.contains("light")){
    // Se estiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  }else{
    // Se estiver sem light mode, manter a imagem normal.
    img.setAttribute("src", "./assets/avatar.png")
  }
  
}