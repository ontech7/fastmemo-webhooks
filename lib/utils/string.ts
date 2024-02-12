export const randomString = (length: number) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    if (result.length > 0 && Math.random() < 0.1) result += " ";
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}