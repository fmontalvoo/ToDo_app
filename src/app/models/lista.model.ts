import { TareaModel } from './tarea.model';

export class ListaModel {

    private id: number;
    private titulo: string;
    private creacion: Date;
    private finalizacion: Date;
    private tareas: TareaModel[];
    private completada: boolean;

    constructor(titulo: string) {
        this.id = new Date().getTime();
        this.titulo = titulo;
        this.creacion = new Date();
        this.tareas = new Array();
        this.completada = false;
    }

    setID(id: number) {
        this.id = id;
    }

    getID(): number {
        return this.id;
    }

    setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    getTitulo(): string {
        return this.titulo;
    }

    setCreacion(creacion: Date) {
        this.creacion = creacion;
    }

    getCreacion(): Date {
        return this.creacion;
    }

    setFinalizacion(finalizacion: Date) {
        this.finalizacion = finalizacion;
    }

    getFinalizacion(): Date {
        return this.finalizacion;
    }

    setTareas(tareas: TareaModel[]) {
        this.tareas = tareas;
    }

    getTareas(): TareaModel[] {
        return this.tareas;
    }

    setCompletada(completada: boolean) {
        this.completada = completada;
    }

    isCompletada(): boolean {
        return this.completada;
    }

    addTarea(tarea: TareaModel) {
        this.tareas.push(tarea);
    }

    static fromJson(objects: Object[]): ListaModel[] {
        let listas: ListaModel[] = new Array();
        for (const object of objects) {
            const lista: ListaModel = new ListaModel('');
            lista.setID(Number(object['id']));
            lista.setTitulo(object['titulo']);
            lista.setCompletada(object['completada']);
            lista.setCreacion(object['creacion']);
            lista.setTareas(TareaModel.fromJson(object['tareas']));
            listas.push(lista);
        }
        return listas;
    }

}