const Simulador = (data, time) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve(data);
                reject(new Error('Error en el simulador'));
            }, time)
        })

}

export default Simulador;