export const getHeader = (name) => {
  let header = "";

  if (name === "electronics") {
    header = "Electronic Items";
  } else if (name === "fashion") {
    header = "Fashion";
  } else if (name === "kitchen") {
    header = "Kitchen";
  } else if (name === "beauty") {
    header = "Beauty";
  } else {
    header = "Featured Products";
  }
  return header;
};
