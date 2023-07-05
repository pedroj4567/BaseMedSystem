 //Formato al numero
 export const formarter = (string) =>{
    const splitted = string.split('');
    const stringFormated = splitted.filter(letra => letra !== ".").join('');
    return stringFormated;
}

