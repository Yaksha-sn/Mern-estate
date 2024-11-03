export const errorHandler =(statusCode, message)=>{
    const error =new error();
    error.statusCode =statusCode;
    errormessage =message;
    return error;

};