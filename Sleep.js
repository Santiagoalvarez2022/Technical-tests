/**
 * Dado un entero positivo millis, escriba una función asíncrona que duerma durante millis milisegundos. Puede resolver cualquier valor.
 * @param {number} millis
 */
//1 <= millis <= 1000
/** 
 * let t = Date.now()k
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */


async function sleep(millis) {
    try {
        if(millis<1 || millis>1000) throw Error("El parametro no cumple las condiciones")

        
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve()
                }, millis)
            })
     

    } catch (error) {
        //por si el numero de "millis" no cumple las condiciones
        //throw error ("no cumple las condiciones")
        console.log(error.message);
    }
} 

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
