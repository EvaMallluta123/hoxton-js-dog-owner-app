console.log(data);

// WRITE YOUR CODE BELOW!
let dogList= document.querySelector(`.dogs-list`)
let dogItem= document.querySelector('.main__dog-section')

// - Render the top list of dogs using the list item template you'll find on the HTML file
function AddDogList(dogs){
    let liEl= document.createElement("li")
     liEl.className=(`dogs-list__button`)
     liEl.textContent=dogs.name
     dogList.append(liEl)
     liEl.addEventListener(`click` ,function(){
        for(let dog of data){
            if(dogs.name===dog.name)
            displayDog(dog)
        
        }
})
}

for(let dogs of data){
    AddDogList(dogs)
}

function displayDog(dog) {
    // Remove previous content
    dogItem.textContent = ''
  
    // Add dog info

  
    // <h2>Mr. Bonkers</h2>
    let nameEl= document.createElement("h2")
    nameEl.textContent= dog.name
    //  <img
    //  src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
    //  alt=""
    //  />
    let DogImgEl= document.createElement("img")
    DogImgEl.src=dog.image
    DogImgEl.alt=""
    //  <div class="main__dog-section__desc">
    //  <h3>Bio</h3>
    let bioEl= document.createElement("h3")
    bioEl.textContent= "Bio"
    //  <p>
    //  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
    //  minima voluptates libero cumque rerum consequatur optio aliquid sint
    //  eum maxime illo laborum omnis quo ab rem cupiditate nulla
    //  perspiciatis ipsum!
    //  </p>
    let ContentEl=document.createElement("p")
    ContentEl.textContent=dog.bio
    //  </div class="main__dog-section__btn">
    //  <p><em>Is naughty?</em> yes!</p>
     let ContentEl2=document.createElement("p")
    ContentEl2.textContent="Is naughty? yes! " 
    // document.write(textContent.italics());
    //  <button>Good dog!</button>
    let button=document.createElement("button")
    button.textContent=dog.isGoodDog
  


    let Main=document.querySelector(`.main__dog-section`)
    Main.append(nameEl, DogImgEl, bioEl, ContentEl, ContentEl2, button)


    // const pEl = document.createElement('p')
    // pEl.textContent = dog.name
  
    // dogItem.append(pEl)
  }
//   for(let dog of data){
//     displayDog(dog)
// }
