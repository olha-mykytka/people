import{ people } from '../data/people.js'
console.log(people)

// tag html elements

const myNavigation = document.querySelector('nav')
const myParent = document.querySelector('#peopleHere')

// create an all people button
const btnAll = document.createElement('button')
btnAll.textContent = "All People"
btnAll.addEventListener('click', () => displayPeople(people))

// create a female people button with filter
const btnFemale = document.createElement('button')
btnFemale.textContent = "Female People"
btnFemale.addEventListener('click', () =>{
    const arrayFemale = people.filter(person => person.gender === 'female')
    displayPeople(arrayFemale)
}) //end of button

// create a male people button with filter
const btnMale = document.createElement('button')
btnMale.textContent = "Male People"
btnMale.addEventListener('click', () =>{
    const arrayMale = people.filter(person => person.gender === 'male')
    displayPeople(arrayMale)
})

// create other people button with filter
const btnOther = document.createElement('button')
btnOther.textContent = "Other"
btnOther.addEventListener('click', () =>{
    const arrayOther = people.filter(person => person.gender != 'male' && person.gender != 'female')
    displayPeople(arrayOther)
})

// add buttons to page
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)
myNavigation.appendChild(btnOther)


// loop

function displayPeople (x) {
    myParent.innerHTML = ""
    x.forEach(person => {
        const myFigure = document.createElement('figure')

        const myImage = document.createElement('img')
        const explodedArray = person.url.split('/')
        const charNumber = explodedArray[5]
        myImage.src=`https://starwars-visualguide.com/assets/img/characters/${charNumber}.jpg`
        myImage.alt = person.name
        const myCaption = document.createElement('figcaption')
        myCaption.textContent = person.name 

        //assign gender class
        console.log('person.gender')
        switch (person.gender) {
            case "female":
             myFigure.className = "female"
            break;
            case "male":
             myFigure.className = "male"
            break;
            default:
             myFigure.className = "other"
        } // end of switch



        //assemble
        myFigure.appendChild(myImage)
        myFigure.appendChild(myCaption)
        // attach to html
        myParent.appendChild(myFigure)



    }//end of fat arrow
    )// end of the loop
} // end of function

// call the function

displayPeople(people);
