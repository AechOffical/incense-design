class Colors {

    colorsLight: object;
    colorsDark: object;


    constructor(colorsLight: object, colorsDark: object) {
        this.colorsLight = colorsLight;
        this.colorsDark = colorsDark;
    }
}

export const colors = new Colors(
    {
        primary: "blue"
    },
    {
        primary: "blue"
    }
)