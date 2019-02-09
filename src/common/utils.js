export const convertSnakeCase = (value) => {
  return value.replace(/(?:^|\.?)([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "").replace(" ", "_")
}