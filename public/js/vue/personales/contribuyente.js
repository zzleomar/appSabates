var app = new Vue({
    el: '#app',
    data (){
      return {
        nacionalidad:[
        {
         id: "",
         text:"" 
        }],
        options: [
          { text: 'Venezolado', value: 'Nro. Cédula'},
          { text: 'Extrangero', value: 'Nro. Pasaporte' }
        ],
        estados: [],
        estado:"",
        text: "",
        municipios: [],
        municipio:"",
        parroquias: [],
        parroquia:"",
        nombre:"",
        apellido:"",
        max: 100,
        selected: 'Nro. Cédula'
      }
    },
    computed: {
      IdState (){
          return null;        
      },
      NombreState (){
          return null;        
      },
      ApellidoState (){
          return null;        
      },
      EstadoState(){
        return null;
      },
      MunicipioState(){
        return null;
      },
      ParroquiaState(){
        return null;
      },
      direccionState(){
        if(this.text.length < 3)
          return null;
        return this.text.length <this.max ? true : false; 
      }
    }
  });