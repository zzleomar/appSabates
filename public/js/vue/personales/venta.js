
 var auxActo=[
          { acto: {id:"12", descripcion:"Carta de Buena Conducta"}, unidades: 12, publicacion:"Ley de Timbre Fiscal", articulo:"Articulo "+"2",numeral:"Numeral "+"3",literal:"UNICO"},
          { acto: {id: "21", descripcion: "Apostillado de Titulo de educación Superior"}, unidades: 32, publicacion:"Reforma de la Ley de Timbre Fiscal", articulo:"Articulo "+"12",numeral:"Numeral "+"1",literal:"UNICO"},
          { acto:{id:"1", descripcion:"Apostillado de Titulo de educación básica"}, unidades: 25, publicacion:"Ley de Timbre Fiscal", articulo:"Articulo "+"24",numeral:"Numeral "+"4",literal:"a"},
          { acto:{id:"54", descripcion:"Registro de una empresa mixta"}, unidades: 2, publicacion:"Ley de Timbre Fiscal", articulo:"Articulo "+"24",numeral:"Numeral "+"4",literal:"b"},
          { acto:{id:"2", descripcion:"Licencia de Licoreria"}, unidades: 10, publicacion:"Reforma de la Ley de Timbre Fiscal", articulo:"Articulo "+"14",numeral:"Numeral "+"4",literal:"UNICO"}
      ];
 var contribuyentes=[{
    id:"23806671",
    nombre:"Leomar Alexander",
    apellido:"Esparragoza Meneses",
    estado:"Sucre",
    municipio:"Montes",
    parroquia:"Cumanacoa",
    ubicacion:"Calle la Quinta, Casa Nro. 23",
    nacionalidad:'Venezolano',
    tipo:'Personal'
  },
  {
    id:"23806671",
    nombre:"Leomar Alexander",
    apellido:"Esparragoza Meneses",
    estado:"Sucre",
    municipio:"Montes",
    parroquia:"Cumanacoa",
    ubicacion:"Calle la Quinta, Casa Nro. 23",
    nacionalidad:'Venezolano',
    tipo:'Personal'
  },
  {
    id:"12345678",
    nombre:"Mikel",
    apellido:"Xass Miuld",
    estado:"Sucre",
    municipio:"Sucre",
    parroquia:"Santa Ines",
    ubicacion:"Calle xxxx Apartamento xxx",
    nacionalidad:'Extranjero',
    tipo:'Personal'
  },
  {
    id:"V-1234567-1",
    nombre:"Alas de Venezuela C.a",
    estado:"Sucre",
    municipio:"Sucre",
    parroquia:"Altagracia",
    ubicacion:"Calle Mariño, edif Nro. 23",
    tlf_oficina:"0800-2565-456",
    tipo:'Juridico',
    tipo_rif:"R-Venezolano"
 },
 {
    id:"J-1232567-1",
    nombre:"Cooperativa 1",
    estado:"Sucre",
    municipio:"Montes",
    parroquia:"Cumanacoa",
    ubicacion:"Calle la Quinta, Casa Nro. 23",
    tipo:'Juridico',
    tipo_rif:"Jurídico"
 },
 {
    id:"P-1234567-1",
    nombre:"Mixta montes c.a",
    estado:"Sucre",
    municipio:"Sucre",
    parroquia:"Altagracia",
    ubicacion:"Sector xxxx, Calle xxxx",
    tipo:'Juridico',
    tipo_rif:"Persona Natural"
 }
];

 Vue.component('ActosContribuyente',{
    template: "#ActosContribuyenteVue",
    props: ['tipo','contribuyente','items','tipo2'],
    data (){
        return {
          items: auxActo,
          acto: null,
          fields: [
          { key: 'publicacion', label: 'Publicación', sortable: true },
          { key: 'articulo', label: 'Articulo', sortable: true },
          { key: 'numeral', label: 'Numeral', sortable: false },
          { key: 'literal', label: 'Literal', sortable: false },
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
      }
    }
});

 Vue.component('Contribuyente',{
    template: "#ContribuyenteVue",
    props: ['tipo','tipo2','contribuyente','identificado','itemAux','actos'],
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
          aceptado: false,
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
            $('#msjAux').hide(500);
            this.aceptado=true;
            this.contribuyente=null;//evitar renderizado de estados, municipio y parroquia
          }
          else{
            console.log(this.contribuyente);
            alert(JSON.stringify(this.contribuyente));
            this.itemAux=null;
            this.itemAux=this.contribuyente;
            $('#containercontribuyente2').hide(500);
            $('.contenedorAuxcontri').hide(500);
            $('#msjAux').hide(500);
            $('#nuevafirmabutton').hide(500);
            this.aceptado=true;
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
        },
        regresar(){
            this.aceptado=false;
          $('.contenedorAuxcontri').show(500);
          $('#containercontribuyente2').show(500);
            $('#msjAux').show(500);
          $('#nuevafirmabutton').show(500);
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
        selected:{tipo:'Personal', documento: 'Nacionalidad'},
        selected2:{tipo:'Venezolano', documento: 'Nro. Cédula'},
        tiposContribuyentes: [
          { text: 'Personal', value:{ tipo:'Personal', documento: 'Nacionalidad'}},
          { text: 'R.I.F.', value:{ tipo: 'Juridico', documento: 'Tipo de Rif'}}
        ],
        tiposDocumentos: [
          { text: 'Venezolano', value:{ tipo:'Venezolano', documento: 'Nro. Cédula'}},
          { text: 'Extranjero', value:{ tipo: 'Extranjero', documento: 'Nro. Pasaporte'}}
        ],
        Documentos1: [
          { text: 'Venezolano', value:{ tipo:'Venezolano', documento: 'Nro. Cédula'}},
          { text: 'Extranjero', value:{ tipo: 'Extranjero', documento: 'Nro. Pasaporte'}}
        ],
        Documentos2: [
          { text: 'V-', value:{ tipo: 'R-Venezolano', documento: 'Nro. Rif Personal', text:'V-'}},
          { text: 'E-', value:{ tipo: 'R-Extranjero', documento: 'Nro. Rif Personal', text:'E-'}},
          { text: 'P-', value:{ tipo: 'Persona Natural', documento: 'Nro. Rif Personal', text:'P-'}},
          { text: 'G-', value:{ tipo: 'Gubernamental', documento: 'Nro. Rif Gubernamental', text:'G-'}},
          { text: 'J-', value:{ tipo: 'Jurídico', documento: 'Nro. Rif Jurídico', text:'J-'}},
          { text: 'C-', value:{ tipo: 'Comunal', documento: 'Nro. Rif Del Consejo Comunal', text:'C-'}}
        ],
        Documentos3: [
          { text: 'Venezolano [V-]', value:{ tipo: 'R-Venezolano', documento: 'Nro. Rif Personal', text:'V-'}},
          { text: 'Extranjero [E-]', value:{ tipo: 'R-Extranjero', documento: 'Nro. Rif Personal', text:'E-'}},
          { text: 'Persona [P-]', value:{ tipo: 'Persona Natural', documento: 'Nro. Rif Personal', text:'P-'}},
          { text: 'Gubernamental [G-]', value:{ tipo: 'Gubernamental', documento: 'Nro. Rif Gubernamental', text:'G-'}},
          { text: 'Jurídico [J-]', value:{ tipo: 'Jurídico', documento: 'Nro. Rif Jurídico', text:'J-'}},
          { text: 'Comunal [C-]', value:{ tipo: 'Comunal', documento: 'Nro. Rif Del Consejo Comunal', text:'C-'}}
        ],
        contribuyente:null,
        formatoRifV: new RegExp("^V-([0-9]{6,8})-([0-9]{1})$"),
        formatoRifE: new RegExp("^E-([0-9]{6,8})-([0-9]{1})$"),
        formatoRifG: new RegExp("^G-([0-9]{6,8})-([0-9]{1})$"),
        formatoRifP: new RegExp("^P-([0-9]{6,8})-([0-9]{1})$"),
        formatoRifJ: new RegExp("^J-([0-9]{6,8})-([0-9]{1})$"),
        formatoRifC: new RegExp("^C-([0-9]{6,8})-([0-9]{1})$"),
        formatoRif2: new RegExp("^([VEGPJC]{1})-$"),
        formatoCP: new RegExp("^[0-9]{6,8}$"),
        ejem: "23806671",
        //pruebas
        contribuyentesVue:null
      }
    },
    computed: {
      IdState (){
        var aux=false;
          if(this.id == "" || this.formatoRif2.test(this.id)){
            $("#IDcontribuyente").hide(500);
              return null;
          }
          if(this.selected.tipo=='Personal'&&this.formatoCP.test(this.id)){
            aux=true;
          }
          else{
            if(this.selected.tipo!='Personal'){
              switch(this.selected2.tipo){
                case 'R-Venezolano':{
                  if(this.formatoRifV.test(this.id))
                    aux=true;
                  break;
                }
                case 'R-Extranjero':{
                  if(this.formatoRifE.test(this.id))
                    aux=true;
                  break;
                }
                case 'Persona Natural':{
                  if(this.formatoRifP.test(this.id))
                    aux=true;
                  break;
                }
                case 'Gubernamental':{
                  if(this.formatoRifG.test(this.id))
                    aux=true;
                  break;
                }
                case 'Jurídico':{
                  if(this.formatoRifJ.test(this.id))
                    aux=true;
                  break;
                }
                case 'Comunal':{
                  if(this.formatoRifC.test(this.id))
                    aux=true;
                  break;
                }
              }
            }
          }
          if(aux){
            this.contribuyente=this.buscarC(this.selected,this.selected2);
            $("#IDcontribuyente").hide(500);
            $("#IDcontribuyente").show(500); 
            this.ajaxActos();
            return true;
          }
          else{
            $("#IDcontribuyente").hide(500);
            return false;
          }
        },
        tipoState(){
          if(this.selected==null){
            this.selected=this.tiposContribuyentes[0];
          }
          else{
            if(this.selected.tipo=='Personal'){
              this.tiposDocumentos=this.Documentos1;
              this.ejem="23806671";
              this.selected2={tipo:'Venezolano', documento: 'Nro. Cédula'};
            }
            else{
              this.tiposDocumentos=this.Documentos3;
              this.ejem="V-23806671-1";
              this.selected2={ tipo: 'R-Venezolano', documento: 'Nro. Rif Personal', text:'V-'};
            }
          }
          this.id="";
        },
        tipo2State(){
          if(this.selected2==null){
            this.selected2=this.tiposDocumentos[0];
          }
          else{
            if(this.selected.tipo!='Personal'){
                this.id=this.selected2.text+"";
            }
            else{
                this.id="";
            }
          }
        },
    },
    methods:{
        buscarC (selected,selected2) {
          var arreglo=[];
          var encontrado=false;
          alert("ajax buscar contribuyente");
          //SOLO PRUEBAS

          this.contribuyentesVue=contribuyentes;
          this.contribuyentesVue = this.contribuyentesVue.filter(function (opcion) {
                  if(selected.tipo=='Juridico'){
                    return (opcion.tipo!=selected.tipo||opcion.tipo_rif!=selected2.tipo) ? false : true;
                  }
                  else{
                    return (opcion.tipo!=selected.tipo&&opcion.nacionalidad!=selected2.tipo) ? false : true;
                  }
              });

          console.log(this.contribuyentesVue);
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
          alert("ajax actos");
          this.actos=auxActo;
        },
        reset () {
          this.item = {}
        },
        selectOption () {
          // select option from parent component
          this.item = this.options[0]
        },
        reset2 () {
          this.item2 = ''
        },
        selectOption2 () {
          // select option from parent component
          this.item2 = this.options2[0].value
        },
    }
  });