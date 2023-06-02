const template = (data) => [
  `
          <div class='profile-picture'>
                <img
                  class='image-profile'
                  src='${data.imagePath}'
                  alt='${data.name}'
                />
                <img
                  class='back-chess'
                  src='./assets/images/chess.jpg'
                  alt='background'
                />
              </div>
              <div class='profile-description'>
                <h4>${data.name}</h4>
                <p class='position'>${data.position}</p>
                <div class='line'></div>
                <p class='position-description'>
                    ${data.description}
                </p>
              </div>
        
          
       
`,
];

export default template;
// the templates are necessary to create the cards dynamically
// the template is a function that returns an array of strings
// the array of strings is the HTML that will be used to create the cards
// the template function takes in the data for each speaker as an argument and returns an array of strings that will be used to create the cards
