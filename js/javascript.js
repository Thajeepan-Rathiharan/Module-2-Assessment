
  /* We start off by setting up some variables to store the state of the game.
   *
   * matched keeps track of how many pairs have been matched.
   */
  let matched = 0;

  /* attempts is how many attempts have been made i.e. how many pairs of cards
   * have been attempted.
   */
  let attempts = 0;

  /* We will need to compare pairs of cards, so we need a way to store the
   * first card that's flipped, so we can check it against the second.
   */
  let firstCard = null;

  /*
   * We want to know how many card pairs there are, so we'll know
   * when they've all been found. The value for this will be set
   * during initialisation.
   */
  let pairs;

  shuffle = (array) => {
    /* This shuffle algorithm comes from Stack Overflow
     * http://stackoverflow.com/a/2450976
     */
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  handleCardClick = (evt) => {
    console.log(evt);

    /*
     * We first check to see if the card has already been flipped over.
     * We only want to proceed if it hasn't already been flipped over.
     * We therefore check to make sure the classList doesn't contain 'flip'.
     */

    if (!evt.target.classList.contains("flip")) {
      /* When the event gets triggered on a particular card, we use the classList property
       * to add the 'flip' class name. This kicks off
       * the animated transition to flip the card over.
       */
      evt.target.classList.add("flip");

      /* If firstCard is null, this means the first card of a pair hasn't yet been
       * flipped over i.e. this is the first card of the pair.
       */
      if (firstCard == null) {
        firstCard = evt.target;
      } else {
        /* If firstCard isn't null, we already have a firstCard so we need to check to
         * see if the two cards match up.
         * First off though, we can increment attempts to add one more attempt.
         */
        attempts++;
        console.log("ATTEMPTS", attempts);

        /* We find out the animal shown on the first card by inspecting its
         * data-card attribute. We set this in the HTML string built up during
         * initialisation.
         */
        let firstAnimal = firstCard.getAttribute("data-card");

        // We also find out the animal on the second card - the one that's just been flipped.
        let secondAnimal = evt.target.getAttribute("data-card");

        // If the two animals don't match...
        if (firstAnimal != secondAnimal) {
          /* We use setTimeout to leave the two cards displayed briefly
           * before turning them back over.
           */
          setTimeout(function () {
            firstCard.classList.remove("flip");
            evt.target.classList.remove("flip");

            /* We also need to set firstCard back to null, so that the user can pick
             * another pair.
             */
            firstCard = null;
          }, 500);
        } else {
          /* If the two cards do match however, we want to do things differently.
           *
           * First off, we remove the click event listeners on both cards.
           * We don't want the user to be able to flip them back over once
           * they've got a match.
           */

          firstCard.removeEventListener("click", handleCardClick);
          evt.target.removeEventListener("click", handleCardClick);

          // We increment matched.
          matched++;
          console.log("CARDS MATCHED", matched);

          // We set firstCard back to null ready for another pair.
          firstCard = null;

          // Except if matched equals the number of pairs, all the pairs have been found.
          if (matched == pairs) {
            console.log("SUCCESS");
            document.getElementById("attemptsDisplay").textContent =
              "You took " + attempts + " attempts";
            document.getElementById(
              "game-over-container"
            ).style.opacity = 1;
          }
        }
      }
    }
  };
  initialise = () => {
    /* We create a local array of the cards to be used. These correspond to the
     * the file names of the images to be used.
     */
    let animals = [
        "hashirama",
        "hashirama",
        "madara",
        "madara",
        "minato",
        "minato",
        "itachi",
        "itachi",
        "sasuke",
        "sasuke",
        "naruto",
        "naruto",
    ];

    // Set the number of pairs
    pairs = 6;

    /* We then need to shuffle the deck.
     * See above for the function that does this.
     */
    let cardOrder = shuffle(animals);

    /* Now that we've got a list of cards in a random order, we can place the cards.
     * We're going to make rows that are 4 cards long. It just so happens that with
     * 12 cards to place, we get an even number of rows.
     * However, a little maths could work out the placing and number of rows
     * automatically.
     * In any case, we're going to build up a string of HTML and insert this
     * into the DOM. To do that, we start off with an empty string called
     * html.
     */
    let html = "";

    // We then need to loop over our array of cards.
    for (i in cardOrder) {
      /* If we're at the start of a row, we need to add the opening <div> tag
       * for the container that will hold the row of cards.
       * We do that by using the modulo operator. That's the %. What this does is
       * divide i by 4 and get the remainder. With a row length of 4, this means we
       * effectively get a remainder of 0 at the beginning of each row.
       */
      if (i % 4 == 0) {
        html += '<div class="cardRow">';
      }

      /* And build the html for this particular card.
       * This looks a little confusing as it's all on one line. You can work out the
       * structure of the html though. We have a container div, inside which an inner
       * container does the actual flipping of the card. We then have two inner <div>
       * elements, one for each side of the card.
       */
      html +=
        '<div class="card--container" data-card="' +
        cardOrder[i] +
        '"><div class="card--flipper"><div class="side--a"><img src="img/cardBack.png"></div><div class="side--b"><img src="img/' +
        cardOrder[i] +
        '.jpg"></div></div></div>';

      // If we're at the end of a row, we need the closing </div> tag for the row.
      if (i % 4 == 3) html += "</div>";
    }

    /* Once we've gone through all the cards and built up our HTML string,
     * we can pop this into the DOM.
     */
    document.getElementById("game-container").innerHTML = html;

    /* We need to add an event listener to every card to listen out for a click event */
    let cards = document.querySelectorAll(".card--container");
    cards.forEach((thisCard) => {
      thisCard.addEventListener("click", handleCardClick);
    });
  };

  /* With all that set up ready, we can now run the initialise function.
   */
  initialise();

   // Function to handle retrying the game
function retryGame() {
    // Reload the current page
    location.reload();
  }
  
  // Add a click event listener to the retry button
  document.getElementById("retry-button").addEventListener("click", retryGame);