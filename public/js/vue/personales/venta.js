 var contribuyentes=[{
    id:"23806671",
    nombre:"Leomar Alexander",
    apellido:"Esparragoza Meneses",
    estado:"Sucre",
    municipio:"Montes",
    parroquia:"Cumanacioa",
    ubicacion:"Calle la Quinta, Casa Nro. 23",
    tipo:'Natural'
  },
  {
    id:"7654321",
    nombre:"Alas de Venezuela C.a",
    estado:"Sucre",
    municipio:"Sucre",
    parroquia:"Altagracia",
    ubicacion:"Calle Mariño, edif Nro. 23",
    tlf_oficina:"0800-2565-456",
    tipo:'Juridico'
 },
 {
    id:"23806671",
    nombre:"Leomar Alexander",
    apellido:"Esparragoza Meneses",
    estado:"Sucre",
    municipio:"Montes",
    parroquia:"Cumanacioa",
    ubicacion:"Calle la Quinta, Casa Nro. 23",
    tipo:'Natural'
 },
 {
    id:"12345671",
    nombre:"José",
    apellido:"Mejias",
    estado:"Sucre",
    municipio:"Sucre",
    parroquia:"Altagracia",
    ubicacion:"Sector xxxx, Calle xxxx",
    tipo:'Firma Personal'
 }
];

 Vue.component('Direccion',{
    template: "#DireccionVue",
    props: ['municipio','parroquia','estado','tipo','text','contribuyente'],
    data (){
        return {
          estados: [{
            value: null, text: 'Seleccione el estado'
          },
          {
            value:"Sucre",
            text:"Sucre"
          },
          {
            value:"Monagas",
            text:"Monagas"
          },
          {
            value:"Anzoateguis",
            text:"Anzoateguis"
          }],
          municipios: [{
            value: null, text: 'Seleccione el municipio'
          }],
          parroquias: [{
            value: null, text: 'Seleccione la parroquia'
          }],
          max: 100
        }
      },
      computed: {
        EstadoState(){
          if(this.estado!=null){
            alert("AJAX MUNICIPIO js/vue/personales/venta.js");
            this.municipios=[{
                value: null, text: 'Seleccione el municipio'
              },
              {
                value:"municipio 1",
                text:"municipio 1"
              },
              {
                value:"municipio 2",
                text:"municipio 2"
              },
              {
                value:"municipio 3",
                text:"municipio 3"
              }];
              if(this.municipio!=null){
                this.municipios.push({value:this.municipio,text:this.municipio});
              }
            $('#municipioC').show();
            return true;
          }
          else
            $('#municipioC').hide();
          return null;
        },
        MunicipioState(){
          if(this.municipio!=null){
            alert("AJAX PARROQUIA js/vue/personales/venta.js");
            this.parroquias=[{
                value: null, text: 'Seleccione la parroquia'
              },
              {
                value:"parroquia 1",
                text:"parroquia 1"
              },
              {
                value:"parroquia 2",
                text:"parroquia 2"
              },
              {
                value:"parroquia 3",
                text:"parroquia 3"
              }];
              if(this.parroquia!=null){
                this.parroquias.push({value:this.parroquia,text:this.parroquia});
              }
            $('#parroquiaC').show();
            return true;
          }
          else
            $('#parroquiaC').hide();
          return null;
        },
        ParroquiaState(){
          if(this.parroquia!=null)
            return true;
          return null;
        },
        direccionState(){
          if(this.text.length < 3)
            return null;
          return this.text.length <this.max ? true : false; 
        }
      },
      methods:{
        onSubmit () {
          console.log(this.contribuyente+" "+this.estado+" "+this.municipio+" "+this.parroquia+" "+this.text);
            alert(JSON.stringify(options)+" "+this.estado+" "+this.municipio+" "+this.parroquia+" "+this.text);
          }
      }
}); 
var app = new Vue({
  el: '#app',
    data () {
      return{
        id:"",
        selected:{tipo:'Natural', documento: 'Nro. Cédula'},
        options: [
          { text: 'Natural', value:{ tipo:'Natural', documento: 'Nro. Cédula'}},
          { text: 'Firma Personal', value:{ tipo: 'Firma Personal', documento: 'Rif. Personal'}},
          { text: 'Juridico', value:{ tipo:'Juridico', documento: 'Rif. Juridico'} }
        ],
        contribuyente:null,
        estados: [{
          value: null, text: 'Seleccione el estado'
        },
        {
          value:"Sucre",
          text:"Sucre"
        },
        {
          value:"Monagas",
          text:"Monagas"
        },
        {
          value:"Anzoateguis",
          text:"Anzoateguis"
        }],
        estado:null,
        text: "",
        municipios: [{
          value: null, text: 'Seleccione el municipio'
        }],
        municipio:null,
        parroquias: [{
          value: null, text: 'Seleccione la parroquia'
        }],
        parroquia:null,
        nombre:"",
        apellido:"",
        //pruebas
        contribuyentesVue:null
      }
    },
    computed: {
      IdState (){
          if(this.id == ""){
            $("#contribuyente").hide(500);
              return null;
          }
          if(this.id > 99999 && this.id <  99999999 ){
            this.contribuyente=this.buscarC(this.selected);
            $("#contribuyente").hide(500);
            if(this.contribuyente!=null){
                $("#contribuyente").show(500);              
                $('#municipioC').show(500);
                $('#parroquiaC').show(500);
                this.estado=this.contribuyente.estado;
                this.municipios=[{
                value: null, text: 'Seleccione el municipio'
                },
                {
                  value:"municipio 1",
                  text:"municipio 1"
                },
                {
                  value:"municipio 2",
                  text:"municipio 2"
                },
                {
                  value:"municipio 3",
                  text:"municipio 3"
                },
                {
                  value:this.contribuyente.municipio,
                  text:this.contribuyente.municipio
                }];
                this.municipio=this.contribuyente.municipio;
                this.parroquia=this.contribuyente.parroquia;
                this.parroquias=[{
                  value: null, text: 'Seleccione la parroquia'
                },
                {
                  value:"parroquia 1",
                  text:"parroquia 1"
                },
                {
                  value:"parroquia 2",
                  text:"parroquia 2"
                },
                {
                  value:"parroquia 3",
                  text:"parroquia 3"
                },
                {
                  value:this.contribuyente.parroquia,
                  text:this.contribuyente.parroquia
                }];
                this.text=this.contribuyente.ubicacion;
                this.nombre=this.contribuyente.nombre;
                if(this.contribuyente.tipo!="Juridico"){
                  this.apellido=this.contribuyente.apellido
                }   
                console.log(this.municipio);          
            }else{
              this.estado=null;
              this.municipio=null;
              this.parroquia=null;
              this.text="";
              this.nombre="";
              this.apellido="";
              $("#contribuyente").show(500);              
            }
            return true;       
          }
          else{
            $("#contribuyente").hide(500);
            return false;
          }
        },
        tipoState(){
          if(this.selected==null)
            this.selected=this.options[0];
          this.id="";
        },
        NombreState (){
            if(this.nombre.length < 1)
                return null;
              return this.nombre.length >2 ? true : false;        
        },
        ApellidoState (){
            if(this.apellido.length < 1)
              return null;
            return this.apellido.length >2 ? true : false;        
        }
    },
    methods:{
        buscarC (selected) {
          alert("ajax buscar contribuyente");
          //SOLO PRUEBAS

          this.contribuyentesVue=contribuyentes;
          this.contribuyentesVue = this.contribuyentesVue.filter(function (opcion) {
                    return opcion.tipo!=selected.tipo ? false : true;
              });
          for (var i = 0; i<this.contribuyentesVue.length ; i++) 
            if(this.contribuyentesVue[i].id==this.id)
              return this.contribuyentesVue[i];
          return null;
        }
    }
  });