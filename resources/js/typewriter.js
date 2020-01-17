//Globals functions 

/*Create a div with a specific class*/
function createDivWithClass(className) {
    const div = document.createElement('div')
    div.setAttribute('class', className)
    return div
}

/**
 * Display the text of div like a type machine
 */
function typewritter (speed) {

    //
    // ─── SETTING THE HTML CONTENT ───────────────────────────────────────────────────
    //


    //HTML Elements
    const typewriterElem = document.querySelector('.typewriter')
    const typewriterParent = typewriterElem.parentElement
    const typewriterContainer = createDivWithClass('typewriter-container')

    //Variables
    const string = typewriterElem.innerHTML
    const stringByWords = string.split(" ")

    //Setting the container
    typewriterParent.insertBefore(typewriterContainer, typewriterElem)

    //Putting each word in each div.word
    stringByWords.forEach(function (word) {
        //Creating the div.word
        wordDiv = createDivWithClass('word')
        //Insert the word in the div.word
        typewriterContainer.appendChild(wordDiv).innerHTML = word
    })

    //Creating div.letter for each cut word 
    document.querySelectorAll('.word').forEach(function (parent) {
        //Cutting the word
        let letters = parent.innerHTML.split("")
        //Removing the word himself
        parent.innerHTML = ""
        //Putting each letter in div.letter in each div.word
        letters.forEach(function (child) {
            //Creating the div.letter
            letterDiv = createDivWithClass('letter')
            //Insert the letter in the div.letter
            parent.appendChild(letterDiv).innerHTML = child
        })
    })

    //Removing the div.typewriter
    typewriterElem.remove()



    //
    // ─── SETTING THE STYLE ──────────────────────────────────────────────────────────
    //

    /* Display flex */
    document.querySelectorAll('.letter').forEach(function (letter, index) {
        setTimeout(() => {
            letter.style.display = 'block'
            letter.style.borderRight = '4px solid #FFCC00'
        }, speed * index)
        setTimeout(() => {
            letter.style.borderRight = '4px solid transparent'
        }, speed * (index + 1))
    })
    setTimeout(() => {
        document.querySelector('.word:last-of-type').style.animationPlayState = 'running'
    }, speed * document.querySelectorAll('.letter').length);
}

typewritter(100)