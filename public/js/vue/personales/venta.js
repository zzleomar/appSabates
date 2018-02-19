 var auxActo=[
    { acto: {id:"12", descripcion:"Carta de Buena Conducta"}, unidades: 12, ley:{articulo:"Articulo "+"2",numeral:"Numeral "+"3",literal:"UNICO"},tipo:'Natural'},
    { acto: {id: "21", descripcion: "Apostillado de Titulo de educación Superior"}, unidades: 32, ley:{articulo:"Articulo "+"12",numeral:"Numeral "+"1",literal:"UNICO"},tipo:'Firma Personal'},
    { acto:{id:"1", descripcion:"Apostillado de Titulo de educación básica"}, unidades: 25, ley:{articulo:"Articulo "+"24",numeral:"Numeral "+"4",literal:"a"},tipo:'Juridico'},
    { acto:{id:"54", descripcion:"Registro de una empresa mixta"}, unidades: 2, ley:{articulo:"Articulo "+"24",numeral:"Numeral "+"4",literal:"b"},tipo:'Natural'},
    { acto:{id:"2", descripcion:"Licencia de Licoreria"}, unidades: 10, ley:{articulo:"Articulo "+"14",numeral:"Numeral "+"4",literal:"UNICO"},tipo:'Firma Personal'},
    { acto:{id:"2", descripcion:"Licencia de Licoreria"}, unidades: 10, ley:{articulo:"Articulo "+"14",numeral:"Numeral "+"4",literal:"UNICO"},tipo:'Juridico'}
]; 
 var contribuyentes=[{
    id:"23806671",
    nombre:"Leomar Alexander",
    apellido:"Esparragoza Meneses",
    estado:"Sucre",
    municipio:"Montes",
    parroquia:"Cumanacoa",
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
    id:"12345671",
    nombre:"Cooperativa 1",
    estado:"Sucre",
    municipio:"Montes",
    parroquia:"Cumanacoa",
    ubicacion:"Calle la Quinta, Casa Nro. 23",
    tipo:'Firma Personal'
 },
 {
    id:"12345671",
    nombre:"Mixta montes c.a",
    estado:"Sucre",
    municipio:"Sucre",
    parroquia:"Altagracia",
    ubicacion:"Sector xxxx, Calle xxxx",
    tipo:'Firma Personal'
 }
];


 Vue.component('ActosContribuyente',{
    template: "#ActosContribuyenteVue",
    props: ['tipo','contribuyente','items'],
    data (){
        return {
          items: auxActo,
          acto: null,
          fields: [
            { key: 'acto', label: 'Acto', sortable: true, 'class': 'text-center' },
            { key: 'unidades', label: 'Unidades Tributarias', sortable: true }
          ],
          currentPage: 1,
          perPage: 5,
          totalRows: items.length,
          pageOptions: [ 5, 10, 15 ],
          sortBy: null,
          sortDesc: false,
          filter: null,
          }
      },
    computed: {
      sortOptions () {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => { return { text: f.label, value: f.key } })
      }
    },
    methods:{
      onFiltered (filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      click(item2){
        this.acto=item2;
        alert("GENERAR TIMBRE "+JSON.stringify(this.contribuyente)+JSON.stringify(this.acto));
      },
      regresar(){
        $('#ActosContribuyenteID').hide(500);
        $('.contenedorAuxcontri').show(500);
        $('#containercontribuyente2').show(500);
        $('#nuevafirmabutton').show(500);
      }
    }
});

 Vue.component('Contribuyente',{
    template: "#ContribuyenteVue",
    props: ['tipo','contribuyente','identificado','itemAux','actos'],
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
          estado:null,
          municipio:null,
          parroquia:null,
          ubicacion:"",
          nombre:"",
          apellido:"",
          max: 100
        }
      },
      computed: {

        NombreState (){
          if(this.contribuyente==null){
            if(this.nombre.length < 1)
                return null;
              return (this.nombre.length >2)? true : false;        
          }
          else{
            if(this.contribuyente.nombre.length < 1){
              return true;
            }
            else{
              return (this.contribuyente.nombre.length >2)? true : false;
            }
          }
        },
        ApellidoState (){
          if(this.contribuyente==null){
            if(this.apellido.length < 1)
                return null;
              return (this.apellido.length >2)? true : false;        
          }
          else{
            if(this.contribuyente.apellido.length < 1){
              return true;
            }
            else{
              return (this.contribuyente.apellido.length >2)? true : false;
            }
          }       
        },
        EstadoState(){
          if(this.contribuyente==null){
            if(this.estado!=null){
              return true;
            }
            else{
              this.municipio=null;
              this.municipios=[{value: null, text: 'Seleccione el municipio'}];
            }
            return null;
          }
          else{
            if(this.contribuyente.estado!=null){
              alert("AJAX MUNICIPIO js/vue/personales/venta.js");
              this.ajaxmunicipio();
              return true;
            }
            else{
              this.contribuyente.municipio=null;
              this.contribuyente.municipios=[{value: null, text: 'Seleccione el municipio'}];
            }
            return null;
          }
        
        },
        MunicipioState(){
          if(this.contribuyente==null){
            if(this.municipio!=null){
              return true;
            }
            else{
              this.parroquia=null;
              this.parroquias=[{value: null, text: 'Seleccione la parroquia'}];
            }
            return null;
          }
          else{
            if(this.contribuyente.municipio!=null){
              alert("AJAX PARROQUIA js/vue/personales/venta.js");
              this.ajaxparroquia();
              return true;
            }
            else{
              this.contribuyente.parroquia=null;
              this.parroquias=[{value: null, text: 'Seleccione la parroquia'}];
            }
          }
        },
        ParroquiaState(){
          if(this.parroquia!=null||(this.contribuyente!=null&&this.contribuyente.parroquia!=null))
            return true;
          return null;
        },
        direccionState(){
          if(this.contribuyente==null){
            if(this.ubicacion.length < 3)
              return null;
            return (this.ubicacion.length <this.max) ? true : false; 
          }
          else{
            if(this.contribuyente!=null&&this.contribuyente.ubicacion.length < 3)
                return null;
              return (this.contribuyente!=null&&this.contribuyente.ubicacion.length <this.max) ? true : false; 
            }
          }
      },
      methods:{
        onSubmit () {
          if(this.contribuyente==null){
            this.contribuyente={
              id:this.identificado,
              nombre:this.nombre,
              apellido:this.apellido,
              estado:this.estado,
              municipio:this.municipio,
              parroquia:this.parroquia,
              ubicacion:this.ubicacion,
              tipo:this.tipo
            };
            console.log(this.contribuyente);
            alert(JSON.stringify(this.contribuyente));
            this.itemAux=null;
            this.itemAux=this.contribuyente;
            $('#containercontribuyente2').hide(500);
            $('.contenedorAuxcontri').hide(500);
            $('#nuevafirmabutton').hide(500);
            $('#ActosContribuyenteID').show(500);
            this.contribuyente=null;//evitar renderizado de estados, municipio y parroquia
          }
          else{
            console.log(this.contribuyente);
            alert(JSON.stringify(this.contribuyente));
            this.itemAux=null;
            this.itemAux=this.contribuyente;
            $('#containercontribuyente2').hide(500);
            $('.contenedorAuxcontri').hide(500);
            $('#nuevafirmabutton').hide(500);
            $('#ActosContribuyenteID').show(500);
          }
        },
        estadoCambio(){
          alert("AJAX MUNICIPIO js/vue/personales/venta.js");
          this.ajaxmunicipio();
          if(this.municipio!=null){
            this.municipios.push({value:this.municipio,text:this.municipio});
          }
          this.municipio=null;
          this.parroquia=null;
          if(this.contribuyente!=null){
            this.contribuyente.municipio=null;
            this.contribuyente.parroquia=null;
          }
        },
        municipioCambio(){
          this.parroquia=null;
          alert("AJAX PARROQUIA js/vue/personales/venta.js");
          this.ajaxparroquia();
          if(this.parroquia!=null){
            this.parroquias.push({value:this.parroquia,text:this.parroquia});
          }
          if(this.contribuyente!=null){
            this.contribuyente.parroquia=null;
          }
        },
        ajaxmunicipio(){
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
            value:"Montes",
            text:"Montes"
          },
          {
            value:"Sucre",
            text:"Sucre"
          }];
        },
        ajaxparroquia(){
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
            value:"Cumanacoa",
            text:"Cumanacoa"
          },
          {
            value:"Altagracia",
            text:"Altagracia"
          }];
        }
      }
}); 


var app = new Vue({
  el: '#app',
    data () {
      return{
        id:"",
        actos:null,
        auxnull:null,
        itemAux:null,
        selected:{tipo:'Natural', documento: 'Nro. Cédula'},
        options: [
          { text: 'Natural', value:{ tipo:'Natural', documento: 'Nro. Cédula'}},
          { text: 'Firma Personal', value:{ tipo: 'Firma Personal', documento: 'Rif. Personal'}},
          { text: 'Juridico', value:{ tipo:'Juridico', documento: 'Rif. Juridico'} }
        ],
        contribuyente:null,
        //pruebas
        contribuyentesVue:null
      }
    },
    computed: {
      IdState (){
          if(this.id == ""){
            $("#IDcontribuyente").hide(500);
              return null;
          }
          if(this.id > 99999 && this.id <  99999999 ){
            this.contribuyente=this.buscarC(this.selected);
            $("#IDcontribuyente").hide(500);
            $("#IDcontribuyente").show(500); 
            this.ajaxActos();
            console.log(this.actos);             
            return true;       
          }
          else{
            $("#IDcontribuyente").hide(500);
            return false;
          }
        },
        tipoState(){
          if(this.selected==null)
            this.selected=this.options[0];
          this.id="";
        },
    },
    methods:{
        buscarC (selected) {
          var arreglo=[];
          var encontrado=false;
          alert("ajax buscar contribuyente");
          //SOLO PRUEBAS

          this.contribuyentesVue=contribuyentes;
          this.contribuyentesVue = this.contribuyentesVue.filter(function (opcion) {
                    return opcion.tipo!=selected.tipo ? false : true;
              });
          for (var i = 0; i<this.contribuyentesVue.length ; i++) {
            if(this.contribuyentesVue[i].id==this.id){
              arreglo.push(this.contribuyentesVue[i]);
              encontrado=true;
            }
          }
          if(encontrado)
            return arreglo;
          else
            return null;
        },
        nuevo(){
          $("#IDcontribuyente").hide(500);
          $("#IDnuevaFirma").show(500);
        },
        regresar(){
          $("#IDnuevaFirma").hide(500);
          $("#IDcontribuyente").show(500);
        },
        ajaxActos(){//para pruebas
          this.actos=null;
          this.actos=[];
          for (var i = 0; i<auxActo.length ; i++) {
            if(auxActo[i].tipo==this.selected.tipo){
              this.actos.push(auxActo[i]);
            }
          }
        }
    }
  });