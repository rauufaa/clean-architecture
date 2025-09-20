export default function authService(service) {
    const encryptPassword = (password) => service.encryptPassword(password);
  
    const comparePassword = (password, hashedPassword) =>
      service.comparePassword(password, hashedPassword);
  
    const verifyToken = (token) => service.verifyToken(token);
  
    const generateToken = (payload) => service.generateToken(payload);
  
    return {
      encryptPassword,
      comparePassword,
      verifyToken,
      generateToken
    };
  }