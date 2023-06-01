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
