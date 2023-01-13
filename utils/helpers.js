export const formatearFecha = fecha => {
    const fechaNuevo = new Date(fecha)
    const opciones = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }
    return fechaNuevo.toLocaleDateString("es-ES", opciones)
}