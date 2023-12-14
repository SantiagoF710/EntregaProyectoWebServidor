
export const mostrarDatosRequest = (req, res, next) => {
    console.log('\x1b[32m', 'METHOD:', req.method);
    console.log('\x1b[32m', 'URL:', req.url);
  
    next();
  };
  