export class Student{
    private _idCardNumber: string;
    private _passportPhotoUrl: string;
    private _firstName: string;
    private _lastName: string;
    private _mark: number;

    constructor(
        idCardNumber: string,
        passportPhotoUrl: string,
        firstName: string,
        lastName: string,
        mark: number,
    ){
        this._idCardNumber = idCardNumber;
        this._passportPhotoUrl = passportPhotoUrl;
        this._firstName = firstName;
        this._lastName = lastName;
        this._mark = mark;
    }

    public get idCardNumber(): string{
        return this._idCardNumber;
    }

    public set idCardNumber(idCardNumber: string){
        this._idCardNumber = idCardNumber;
    }

    public get passportPhotoUrl(): string{
        return this._passportPhotoUrl;
    }

    public set passportPhotoUrl(passportPhotoUrl: string){
        this._passportPhotoUrl = passportPhotoUrl;
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set firstName(firstName: string){
        this._firstName = firstName;
    }

    public get lastName(): string{
        return this._lastName;
    }

    public set lastName(lastName: string){
        this._lastName = lastName;
    }

    public get mark(): number{
        return this._mark;
    }

    public set mark(mark: number){
        this._mark = mark;
    }
}