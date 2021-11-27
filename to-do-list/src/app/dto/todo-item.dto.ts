export class TodoItem{
    private _id: number;
    private _description: string;
    private _isCompleted: boolean;

    constructor(
        id: number,
        description: string,
        isCompleted: boolean,
    ){
        this._id = id;
        this._description = description;
        this._isCompleted = isCompleted;
    }

    public get id(): number{
        return this._id;
    }

    public set id(id: number){
        this._id = id;
    }

    public get description(): string{
        return this._description;
    }

    public set description(description: string){
        this._description = description;
    }

    public get isCompleted(): boolean{
        return this._isCompleted;
    }

    public set isCompleted(isCompleted: boolean){
        this._isCompleted = isCompleted;
    }
}