$(".search-button").click(function () {
  let userInput = $(".search-term").val();

  let apiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;

  fetch(
    // "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1"
    apiURL
  )
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      let random = Math.floor(Math.random() * data.data.length);
      // let str1 = data.data.length;
      // console.log(str1);
      $(".main").append(`<img src=${data.data[random].images.original.url}>`);
      window.location.href = `mailto:address@dmail.com?subject=Hello there&body=<img src=${data.data[random].images.original.url}>`;
      //        console.log(data.data[0]);
    });
});
