export class User{
    private id:number;
    private nombre:string;
    private apellido:string;
    private celular:string;
    private correo:string;
    private contrasenia:string;

    constructor(nombre:string,apellido:string,celular:string,correo:string,contrasenia:string){
        this.id=0;
        this.nombre=nombre;
        this.apellido=apellido;
        this.celular=celular;
        this.correo=correo;
        this.contrasenia=contrasenia;
    }
    public setId(id:number){
        this.id=id;
    }
    public getId():number{
        return this.id;
    }
    public getNombre():string{
        return this.nombre;
    }
    public getApellido():string{
        return this.apellido;
    }
    public getCelular():string{
        return this.celular;
    }
    public getCorreo():string{
        return this.correo;
    }
    public getPassword():string{
        return this.contrasenia;
    }
}