class Usuario  {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre= nombre;
        this.apellido= apellido;
        this.libros= libros;
        this.mascotas= mascotas;
    }


getFullNames() {
    return '${this.nombre} ${this.apellido}';
}

addMascota() {
    this.mascotas.push(nombre)
    return this.mascotas;
}
countMascotas() {
    return this.mascotas.length;
}

addBook (names, autor){
    this.libros.push({names, autor})
    return this.libros;
}
getBookNames(){
    return this.libros.map ((search) => search.names);
}
};

const usuario= new Usuario(
    "Ticiano", "Barabino",
    [{
        driver: "Lewis Hamilton",
        team :"Mercedes"
    },
    {
        driver: "Charles Leclrec",
        team:"Ferrari",
    }
],
["Jack","Draco","Zeta"]
);

console.log (Usuario);
console.log (Usuario.getFullNames());
console.log (Usuario.addMascota("Perro"));
console.log (Usuario.countMascotas());
console.log (Usuario.addBook("Harry Potter", "j.k Rowling"));
console.log (Usuario.getBookNames());

