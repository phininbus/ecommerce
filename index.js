let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus") 
let number = document.querySelector(".num")
let button = document.querySelector(".button")
let float = document.querySelector("#float")

let overlayed = document.querySelectorAll("#overlayed")
let thumbnail2 = document.querySelectorAll(".thumbnails-2")


minus.addEventListener("click",()=>{
    
        number.innerHTML--
    
    if (number.innerHTML<0){
        document.querySelector(".num").innerHTML=0
    }
})

plus.addEventListener("click",()=>{
        number.innerHTML++
})

let overall = document.querySelector("#overall")
let emptycart = document.querySelector("#empty-cart-txt")
let multiply = document.querySelector(".multiply")
let total = document.querySelector("strong")

button.addEventListener("click",()=>{

    float.classList.add("float")
    float.classList.remove("float-sub")
    float.innerHTML = number.innerHTML
    multiply.innerHTML = number.innerHTML
    total.innerHTML = "$" + Number(number.innerHTML) * 125

    overall.classList.replace("overall-sub","overall")
         
    emptycart.classList.replace("empty-cart","empty-cart-sub")
    

    if (Number(float.innerHTML)===0){
        float.classList.replace("float","float-sub")
       
        overall.classList.replace("overall","overall-sub")
         
        emptycart.classList.replace("empty-cart-sub","empty-cart")

    }

})

let cart = document.querySelector(".cart")
let cartStuffs = document.querySelector("#cart-stuffs")
cart.addEventListener("click",()=>{
    cartStuffs.classList.toggle("cart-stuffs")
    cartStuffs.classList.toggle("cart-stuffs-sub")
})



   let deleter = document.querySelector(".delete")
         deleter.addEventListener("click",()=>{
          overall.classList.replace("overall","overall-sub")
          emptycart.classList.replace("empty-cart-sub","empty-cart")
          float.innerHTML=0
          float.classList.replace("float","float-sub")
        
         })
   



let thumbnailsHolder = document.querySelectorAll(".thumbnail-holder")

let thumbnails = document.querySelectorAll(".thumbnails")

let thumbnailsHolderLength = document.querySelectorAll(".thumbnail-holder").length

let overlay = document.querySelectorAll(".overlay")

let productImage = document.querySelector(".rep-img")

productImage.addEventListener("click",()=>{
  document.querySelector("footer").classList.replace("footer","footer-sub")
})

let arrayOfImageProducts = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"]



for (let i = 0; i < thumbnailsHolderLength; i++){
    
    thumbnails[0].setAttribute("style","transform:scale(0.9,0.9);border:3px solid hsl(26, 100%, 55%)")
    overlay[0].setAttribute("style","display:flex")

    thumbnailsHolder[i].addEventListener("click",function click(){
      if (this === thumbnailsHolder[0]){
        productImage.setAttribute("src",arrayOfImageProducts[0])

        thumbnails[0].setAttribute("style","transform:scale(0.9,0.9);border:3px solid hsl(26, 100%, 55%)")
        overlay[0].setAttribute("style","display:flex")

        thumbnails[1].setAttribute("style","transform:scale(1,1);border:none")
        overlay[1].setAttribute("style","display:none")

        thumbnails[2].setAttribute("style","transform:scale(1,1);border:none")
        overlay[2].setAttribute("style","display:none")

        thumbnails[3].setAttribute("style","transform:scale(1,1);border:none")
        overlay[3].setAttribute("style","display:none")

      }else  if (this === thumbnailsHolder[1]){
        productImage.setAttribute("src",arrayOfImageProducts[1])

        thumbnails[1].setAttribute("style","transform:scale(0.9,0.9);border:3px solid hsl(26, 100%, 55%)")
        overlay[1].setAttribute("style","display:flex")

        thumbnails[0].setAttribute("style","transform:scale(1,1);border:none")
        overlay[0].setAttribute("style","display:none")

        thumbnails[2].setAttribute("style","transform:scale(1,1);border:none")
        overlay[2].setAttribute("style","display:none")

        thumbnails[3].setAttribute("style","transform:scale(1,1);border:none")
        overlay[3].setAttribute("style","display:none")

      }else if (this === thumbnailsHolder[2]){
        productImage.setAttribute("src",arrayOfImageProducts[2])

        thumbnails[2].setAttribute("style","transform:scale(0.9,0.9);border:3px solid hsl(26, 100%, 55%)")
        overlay[2].setAttribute("style","display:flex")

        thumbnails[1].setAttribute("style","transform:scale(1,1);border:none")
        overlay[1].setAttribute("style","display:none")

        thumbnails[0].setAttribute("style","transform:scale(1,1);border:none")
        overlay[0].setAttribute("style","display:none")

        thumbnails[3].setAttribute("style","transform:scale(1,1);border:none")
        overlay[3].setAttribute("style","display:none")

      }else if (this === thumbnailsHolder[3]){
        productImage.setAttribute("src",arrayOfImageProducts[3])

        thumbnails[3].setAttribute("style","transform:scale(0.9,0.9);border:3px solid hsl(26, 100%, 55%)")
        overlay[3].setAttribute("style","display:flex")

        thumbnails[1].setAttribute("style","transform:scale(1,1);border:none")
        overlay[1].setAttribute("style","display:none")

        thumbnails[2].setAttribute("style","transform:scale(1,1);border:none")
        overlay[2].setAttribute("style","display:none")

        thumbnails[0].setAttribute("style","transform:scale(1,1);border:none")
        overlay[0].setAttribute("style","display:none")
      }

    })
}

let next = document.querySelector(".next")
let previous = document.querySelector(".previous")

next.addEventListener("mouseover",()=>{
  next.setAttribute("src","images/icon-next-colored.svg")
})

next.addEventListener("mouseleave",()=>{
  next.setAttribute("src","images/icon-next.svg")
})

previous.addEventListener("mouseover",()=>{
  previous.setAttribute("src","images/icon-previous-colored.svg")
})

previous.addEventListener("mouseleave",()=>{
  previous.setAttribute("src","images/icon-previous.svg")
})

let closer = document.querySelector(".close-light-box")
closer.addEventListener("mouseover",()=>{
  closer.setAttribute("src","images/icon-close-colored.svg")
})

closer.addEventListener("mouseleave",()=>{
  closer.setAttribute("src","images/icon-close.svg")
})

closer.addEventListener("click",()=>{
  document.querySelector("footer").classList.replace("footer-sub","footer")
})

let slide = document.querySelector(".slide")

let slideArray = [0,100,200,300] 
let digit = 1

next.addEventListener("click",()=>{
  slide.setAttribute("style",`transform:translateX(-${slideArray[digit++]}%);`)
  if (digit>3){
    digit = 0
  }

  if (slide.getAttribute("style")==="transform:translateX(-0%);"){

    document.querySelectorAll("#overlayed")[0].classList.add("overlayed-sub")
    thumbnail2[0].classList.add("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[1].classList.remove("overlayed-sub")
    thumbnail2[1].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[2].classList.remove("overlayed-sub")
    thumbnail2[2].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[3].classList.remove("overlayed-sub")
    thumbnail2[3].classList.remove("thumbnails-2-sub")
  }

  if (slide.getAttribute("style")==="transform:translateX(-100%);"){
        document.querySelectorAll("#overlayed")[1].classList.add("overlayed-sub")
        thumbnail2[1].classList.add("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[0].classList.remove("overlayed-sub")
        thumbnail2[0].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[2].classList.remove("overlayed-sub")
        thumbnail2[2].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[3].classList.remove("overlayed-sub")
        thumbnail2[3].classList.remove("thumbnails-2-sub")
  }

  if (slide.getAttribute("style")==="transform:translateX(-200%);"){
    document.querySelectorAll("#overlayed")[2].classList.add("overlayed-sub")
    thumbnail2[2].classList.add("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[0].classList.remove("overlayed-sub")
    thumbnail2[0].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[1].classList.remove("overlayed-sub")
    thumbnail2[1].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[3].classList.remove("overlayed-sub")
    thumbnail2[3].classList.remove("thumbnails-2-sub")
  }

  if (slide.getAttribute("style")==="transform:translateX(-300%);"){
    document.querySelectorAll("#overlayed")[3].classList.add("overlayed-sub")
    thumbnail2[3].classList.add("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[0].classList.remove("overlayed-sub")
    thumbnail2[0].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[2].classList.remove("overlayed-sub")
    thumbnail2[2].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[1].classList.remove("overlayed-sub")
    thumbnail2[1].classList.remove("thumbnails-2-sub")
  }
})

let digitNegative = 3
previous.addEventListener("click",()=>{
  slide.setAttribute("style",`transform:translateX(-${slideArray[digitNegative--]}%);`)
  if (digitNegative<0){
    digitNegative = 3
  }
  if (slide.getAttribute("style")==="transform:translateX(-0%);"){

    document.querySelectorAll("#overlayed")[0].classList.add("overlayed-sub")
    thumbnail2[0].classList.add("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[1].classList.remove("overlayed-sub")
    thumbnail2[1].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[2].classList.remove("overlayed-sub")
    thumbnail2[2].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[3].classList.remove("overlayed-sub")
    thumbnail2[3].classList.remove("thumbnails-2-sub")
  }

  if (slide.getAttribute("style")==="transform:translateX(-100%);"){
        document.querySelectorAll("#overlayed")[1].classList.add("overlayed-sub")
        thumbnail2[1].classList.add("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[0].classList.remove("overlayed-sub")
        thumbnail2[0].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[2].classList.remove("overlayed-sub")
        thumbnail2[2].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[3].classList.remove("overlayed-sub")
        thumbnail2[3].classList.remove("thumbnails-2-sub")
  }

  if (slide.getAttribute("style")==="transform:translateX(-200%);"){
    document.querySelectorAll("#overlayed")[2].classList.add("overlayed-sub")
    thumbnail2[2].classList.add("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[0].classList.remove("overlayed-sub")
    thumbnail2[0].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[1].classList.remove("overlayed-sub")
    thumbnail2[1].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[3].classList.remove("overlayed-sub")
    thumbnail2[3].classList.remove("thumbnails-2-sub")
  }

  if (slide.getAttribute("style")==="transform:translateX(-300%);"){
    document.querySelectorAll("#overlayed")[3].classList.add("overlayed-sub")
    thumbnail2[3].classList.add("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[0].classList.remove("overlayed-sub")
    thumbnail2[0].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[2].classList.remove("overlayed-sub")
    thumbnail2[2].classList.remove("thumbnails-2-sub")

    document.querySelectorAll("#overlayed")[1].classList.remove("overlayed-sub")
    thumbnail2[1].classList.remove("thumbnails-2-sub")
  }
})



overlayed.forEach((overlay)=>{
  overlay.addEventListener("click",function(){

    switch (this) {

      case document.querySelectorAll("#overlayed")[0]:
        document.querySelectorAll("#overlayed")[0].classList.add("overlayed-sub")
        thumbnail2[0].classList.add("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[1].classList.remove("overlayed-sub")
        thumbnail2[1].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[2].classList.remove("overlayed-sub")
        thumbnail2[2].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[3].classList.remove("overlayed-sub")
        thumbnail2[3].classList.remove("thumbnails-2-sub")

        slide.setAttribute("style","transform:translateX(-0%)")
      break;

      case document.querySelectorAll("#overlayed")[1]:
        document.querySelectorAll("#overlayed")[1].classList.add("overlayed-sub")
        thumbnail2[1].classList.add("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[0].classList.remove("overlayed-sub")
        thumbnail2[0].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[2].classList.remove("overlayed-sub")
        thumbnail2[2].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[3].classList.remove("overlayed-sub")
        thumbnail2[3].classList.remove("thumbnails-2-sub")

        slide.setAttribute("style","transform:translateX(-100%)")
      break;

      case document.querySelectorAll("#overlayed")[2]:
        document.querySelectorAll("#overlayed")[2].classList.add("overlayed-sub")
        thumbnail2[2].classList.add("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[0].classList.remove("overlayed-sub")
        thumbnail2[0].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[1].classList.remove("overlayed-sub")
        thumbnail2[1].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[3].classList.remove("overlayed-sub")
        thumbnail2[3].classList.remove("thumbnails-2-sub")

        slide.setAttribute("style","transform:translateX(-200%)")
      break;

      case document.querySelectorAll("#overlayed")[3]:
        document.querySelectorAll("#overlayed")[3].classList.add("overlayed-sub")
        thumbnail2[3].classList.add("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[0].classList.remove("overlayed-sub")
        thumbnail2[0].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[2].classList.remove("overlayed-sub")
        thumbnail2[2].classList.remove("thumbnails-2-sub")

        document.querySelectorAll("#overlayed")[1].classList.remove("overlayed-sub")
        thumbnail2[1].classList.remove("thumbnails-2-sub")

        slide.setAttribute("style","transform:translateX(-300%)")
      break;
    }
  })
})


window.addEventListener("resize",()=>{
  if (window.innerWidth <= 1000){
    document.querySelector("footer").classList.replace("footer-sub","footer")
    
  }
  if (window.innerWidth>1000){
    document.querySelector("nav").classList.replace("nav-sub","nav")
  }
})


document.querySelector(".hamburger").addEventListener("click",()=>{
  document.querySelector("nav").classList.replace("nav","nav-sub")
})

document.querySelector(".close-nav").addEventListener("click",()=>{
  document.querySelector("nav").classList.replace("nav-sub","nav")
})