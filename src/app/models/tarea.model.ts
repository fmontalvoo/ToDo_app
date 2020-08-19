export class TareaModel {

    private descripcion: string;
    private completada: boolean;

    constructor(descripcion: string) {
        this.descripcion = descripcion;
        this.completada = false;
    }

    setDescripcion(descripcion: string) {
        this.descripcion = descripcion;
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    setCompletada(completada: boolean) {
        this.completada = completada;
    }

    isCompletada(): boolean {
        return this.completada;
    }

    static fromJson(objects: Object[]): TareaModel[] {
        let tareas: TareaModel[] = new Array();
        for (const object of objects) {
            const tarea: TareaModel = new TareaModel('');
            tarea.setDescripcion(object['descripcion']);
            tarea.setCompletada(object['completada']);
            tareas.push(tarea);
        }
        return tareas;
    }

}