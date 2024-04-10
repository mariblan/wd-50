function myFavouriteColor(color) {
  let message;

  switch (color) {
    case "blue":
      message = "The color is blue.";
      break;
    case "red":
      message = "The color is red.";
      break;
    default:
      message = "It's not a color that I know.";
      break;
  }
  console.log(message);
}

// const color = "orange";
myFavouriteColor("blue")
myFavouriteColor("red")
myFavouriteColor("orange")
