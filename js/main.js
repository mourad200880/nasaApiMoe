//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getTodaysImage(){
  let date = new Date();
  let today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`; //In JS months are 0 indexed
  const url = `https://api.nasa.gov/planetary/apod?api_key=UEGf78p0XYaK26D6XTqzDBvrX7IndJ3rZ7tcA35h&date=${today}`;

  document.querySelector('h3').innerText = today.split('').reverse().join('')
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
          document.querySelector('h3').innerText = data.date
          document.querySelector('p').innerHTML = data.explanation

        }else if( data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('p').innerHTML = data.explanation



        }
        
        

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}




function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=UEGf78p0XYaK26D6XTqzDBvrX7IndJ3rZ7tcA35h&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
          document.querySelector('h3').innerText = choice
         
        }else if( data.media_type === 'video'){
          document.querySelector('iframe').src = data.url


        }
        
        document.querySelector('p').innerText = data.explanation

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
getTodaysImage()


  