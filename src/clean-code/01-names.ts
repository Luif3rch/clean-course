;(() => {
    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]

    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map(file => file.flagged)

    // MALOS EJEMPLOS
    class AbstractUser {}
    class UserMixin {}
    class UserImplementation {}
    interface IUser {}

    // Mejor
    class User {}
    interface User {}

    // Todo: Tarea

    // día de hoy - today
    const nowDay = new Date()

    // días transcurridos - elapsed time in days
    const d: number = 23

    // número de archivos en un directorio - number of files in directory
    const numerOfFilesInDirectoy = 33

    // primer nombre - first name
    const firstName = "Fernando"

    // primer apellido - last name
    const apellido = "Herrera"

    // días desde la última modificación - days since modification
    const dsm = 12

    // cantidad máxima de clases por estudiante - max classes per student
    const max = 6
})()
