/****************************************************************************
    
  INTRODUCTION: The Random Radlib challenge
  
    For this Code Adventure we're going to create a Radlib, that's like a Mad-lib 
    only radder. :)
    
    If you don't know what a Mad-lib is, it is basically a sentence or paragraph 
    where certain words, like verbs, nouns, or adjectives are left blank for you
    to fill in on your own for usually amusing results.


  INSTRUCTIONS:
  
    Create the logic for the function called radlib. This function will take 1 
    argument, which will be a string that is just a simple sentence containing
    space separated words. Some of those words will be placeholders, which will 
    be either - noun, plural_noun, or past_tense_verb.
    
    Your job is to add the logic to the radlib function below, so that it returns 
    the passed in sentence with all of the placeholder words replaced with random 
    words of your choosing.  If you think you can make that happen, then go for it.
    If you require more detailed instructions, continue reading.
    
    1) Three arrays containing empty strings have been provided for you below. Your 
       first task is to fill these in. Each is accompanied by a comment that will 
       give you examples of how to complete the arrays.  For best resutls, try to 
       thinkn of amusing words when filling in the arrays.  And if you use two or 
       more words in a single entry, hyphenate or underscore them so the tests will 
       read them as one word.
       
    2) Create a simple helper function that can take in an array as an argument, 
       and return a random word from the array passed to it. This will be used to 
       get random words from the arrays you filled in. 
       
    3) Turn the passed in sentence into an array and store it in a variable. This
       will allow us to use array methods on it, making it much easier to work with.
    
    4) Loop over the new sentence_array, and if one of its words is a placeholder 
       word, like noun, plural_noun, or past_tense_verb, then replace that word with 
       a random word from one of the original arrays that you filled in. For example, 
       if the placeholder word is noun, then call the random_word helper function on 
       the noun_arr, and replace the noun placeholder word with the new word returned 
       by the random_word helper function. 
       
    5) Lastly, turn the resulting sentence array back into a basic sentence of space 
       separated words, and return it.
   


  TO RUN THE TESTS:
    type the command below into the console and press enter.

      node radlib.js


/** THE FUNCTION ************************************************************/
  

function radlib(radlibSentence) {
  
    // These arrays have been provided for your convenience. Fill these out first.
    
    // noun - person, place or thing: example - 'chicken', 'manhole-cover', 'monkey'
    const noun_arr = ['', '', ''];
    
    // plural noun - multiple persons, places, or things: example - 'eggs', 'airheads', 'skittles'
    const plural_noun_arr = ['', '', ''];
    
    // past tense verb - action word that already happened: example - 'jackknifed', 'decimated', 'frazzled'
    const past_tense_verb_arr = ['', '', ''];
    
    // your code goes here
    
  }



/** THE OUTPUT **************************************************************/

// Test Input - don't change
let test_sentence =`four score and seven plural_noun ago our plural_noun brought forth on this noun a new noun past_tense_verb in noun and past_tense_verb to the proposition that all plural_noun are past_tense_verb equal`;

  console.log('\x1Bc'); // Ever wanted to know how to clean the console? This is the line.
  console.log("Your function's current output:"); 
  console.log(
    
    radlib(test_sentence) // this is here for you to use

  );
  console.log("----------------------------------------------------");


/** THE TESTS ***************************************************************/

  /** Test 1 **/
  if(radlib(test_sentence).split(' ').length === 30) {
    console.log('Test 1 passed');
  } else {
    console.log("Test 1 failed - Your sentence is not the right length. Either you're missing a word, or one of your radlib words is a double word, in which case you just need to add a hyphen or an underscore to that word.");
  }

  /** Test 2 **/
  if( radlib(test_sentence).indexOf('noun') === -1 ||
      radlib(test_sentence).indexOf('plural_noun') === -1 ||
      radlib(test_sentence).indexOf('past_tense_verb') === -1) {
    console.log('Test 2 passed');
  } else {
    console.log("Test 2 failed - You still have either a placeholder noun, plural_noun, or a past_tense_verb in your sentence.");
  }

  /** Test 3 **/
  if( radlib(test_sentence).indexOf(null) !== -1 ||
      radlib(test_sentence).indexOf(undefined) !== -1 ||
      radlib(test_sentence).indexOf(typeof string) == -1 ) {
    console.log('Test 3 passed');
  } else {
    console.log("Test 3 failed - You have either a null or undefined value or a type that isn't a string in your sentence.");
  }
