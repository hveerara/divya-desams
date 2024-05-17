export const getBackgroundImageUrl = (category) => {
  switch (category) {
    case "Chozha Naatu Thirupathigal":
      return "url('/img/flower-red-jerberas.jpeg')";
    case "Nadu Naatu Thirupathigal":
      return "url('/img/flower-white-chrysanthemum.jpeg')";
    case "Thondai Naatu Thirupathigal":
      return "url('/img/flower-pink-humming-favs.jpeg')";
    case "Malai Naatu Thirupathigal":
      return "url('/img/flower-orange-daisy.jpeg')";
    case "Pandiya Naatu Thirupathigal":
      return "url('/img/flower-red-hibiscus.jpeg')";
    case "Vada Naatu Thirupathigal":
      return "url('/img/flower-white-chrysanthemum.jpeg')";
    case "Thirupparkadal Thirupathigal":
      return "url('/img/flower-red-rose.jpeg')";
    case "Thiruparamapada Thirupathigal":
      return "url('/img/flower-red-hibiscus.jpeg')";
    case "Mangalam":
      return "url('/img/flower-red-hibiscus.jpeg')";
    case "Prayer":
      return "url('/img/flower-white-daisies.jpeg')";
    default:
      return "";
  }
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
