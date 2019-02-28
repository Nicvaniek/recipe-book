export class Recipe {
    public name: string;
    public imagePath: string;
    public description: string;

    constructor(name: string, description: string, image: string) {
        this.name = name;
        this.imagePath = image;
        this.description = description;
    }
}