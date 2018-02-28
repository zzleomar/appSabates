var EventBus = new Vue;

 Vue.component('VerActo',{
    template: "#VerActo",
    props: ['acto'],
    data(){
      return{
        form: {
          descripcion: null,
          articulo: null,
          numeral: null,
          literal: null,
          unidades: null,
          selected: null,
          selected2: null,
        },
        gacetas:[
          {
            id: "01",
            fecha: "12-12-2011",
            tipo: "Gaceta Ordinaria",
            numero: "1231",
            publicaciones:[{
              id: "01",
              tipo: "Ley",
              descripcion: "Timbre fiscal del estado sucre"
            },
            {
              id: "02",
              tipo: "Decreto",
              descripcion: "Ajuste de Ingresos por unidad tributaria"
            }]
          },
          {
            id: "02",
            fecha: "02-12-2017",
            tipo: "Gaceta Extraordinaria",
            numero: "1232",
            publicaciones:[{
              id: "03",
              tipo: "Decreto",
              descripcion: "Reforma parcial de la ley de timbre fiscal del estado sucre"
            }]
          }
        ],
        options:[
        {
          value: null, text: 'Seleccione la gacete', publicaciones: null
        }],
        options2:[
        {
          value: null, text: 'Seleccione la publicación'
        }],
        helpArticulo: ""
      }
    },
    computed:{
      DescState () {
        if(this.form.descripcion!=null&&this.acto!=null){
          if(this.form.descripcion.length > 3){
            return true;
          }
          else{
            return false;
          }
       }
        else{
          if(this.form.descripcion==null&&this.acto!=null){
            this.form.descripcion=this.acto.acto.descripcion;
            return true;
          }
        }
      },
      ArticuloState(){
        if(this.form.articulo!=null&&this.acto!=null){
          if(this.form.articulo > 0){
              return true;
            }
            else{
              return false;
            }
        }
        else{
          if(this.form.articulo==null&&this.acto!=null){
            this.form.articulo=this.acto.articulo;
            return true;
          }
        }
      },
      NumeralState(){
        if(this.form.numeral!=null&&this.acto!=null){
          if(this.form.numeral > 0){
              return true;
            }
            else{
              return false;
            }
        }
        else{
          if(this.form.numeral==null&&this.acto!=null){
            this.form.numeral=this.acto.numeral;
            return true;
          }
        }
      },
      literalState(){
        if(this.form.literal!=null&&this.acto!=null){
          this.form.literal = this.form.literal.toLowerCase();
            if(this.form.literal=="unico")
              return null;
            return this.form.literal.length > 1||this.form.literal.length ==0 ? false : true;
        }
        else{
          if(this.form.literal==null&&this.acto!=null){
            this.form.literal=this.acto.literal;
            return true;
          }
        }
      },
      unidadesState(){
        if(this.form.unidades!=null&&this.acto!=null){
          if(this.form.unidades > 0){
              return true;
            }
            else{
              return false;
            }
        }
        else{
          if(this.form.unidades==null&&this.acto!=null){
            this.form.unidades=this.acto.unidades;
            return true;
          }
        }
      },
      GacetaState(){ 
      if(this.options.length==1&&this.acto!=null){

          for(var i=0; i<this.gacetas.length; i++){
            this.options.push({
              value: this.gacetas[i],
              text: this.gacetas[i].fecha+" "+this.gacetas[i].tipo+" #"+this.gacetas[i].numero,
              publicaciones: this.gacetas[i].publicaciones
            });

            if(this.gacetas[i].numero==this.acto.gaceta){
              this.form.selected=this.gacetas[i];
              this.form.selected2=this.acto.idpublicacion;
            }
          }          

        }
        if(this.form.selected!=null){
          this.options2 = this.options2.filter(function (opcion) {
                return opcion.value!=null ? false : true;
          });
          for(var i=0; i<this.form.selected.publicaciones.length;i++){
            this.options2.push({
              value: this.form.selected.publicaciones[i].id,
              text: this.form.selected.publicaciones[i].tipo+", "+this.form.selected.publicaciones[i].descripcion,
            });
          }
          return true;
        }   
        
      },
      PublicState(){
        if(this.form.selected2!=null&&this.acto!=null){
          for(var i=0;i<this.options2.length;i++){
              if(this.options2[i].value==this.form.selected2){
                this.helpArticulo=this.options2[i].text;
              }
          }
          return true;
        }
      },
      sortOptions () {
        return null;
        }
    },
    methods:{
      regresar(){
          this.inicializar();
          EventBus.$emit('regresar', false);
      },
      inicializar(){
          this.form.descripcion=null;
          this.form.selected=null;
          this.form.selected2=null;
          this.options=[{value: null, text: 'Seleccione la gacete', publicaciones: null}];
          this.options=[{value: null, text: 'Seleccione la publicación'}];
          this.acto=null;
          this.form.articulo=null;
          this.form.numeral=null;
          this.form.literal=null;
          this.form.unidades=null;
      },
      onSubmit () {
          this.inicializar();
        alert("ajax guardar");
        EventBus.$emit('regresar', false);
      },
      methoLiteral(){
      },
      methoLiteralblur(){
      },
      toggleAll (checked) {
      },
      info (item, index, button) {
      },
      resetModal () {
      },
      onFiltered (filteredItems) {
      },
      nuevaGaceta1(){
      },
      nuevaPublicacion(){
      },
      detalles (item, index, button) {
      },
    }
});


var app = new Vue({
  el: '#app',
  created: function(){
          EventBus.$on('regresar', function (event) {
              this.acto=null;
            }.bind(this));
        },
    data () {
      return {
        items: items,
        fields: [
          { key: 'publicacion', label: 'Publicación', sortable: true },
          { key: 'articulo', label: 'Articulo', sortable: true },
          { key: 'numeral', label: 'Numeral', sortable: false },
          { key: 'literal', label: 'Literal', sortable: false },
          { key: 'acto', label: 'Acto', sortable: true, 'class': 'text-center' },
          { key: 'unidades', label: 'Unidades Tributarias', sortable: true },
          { key: 'estado', label: 'Estado', sortable: true }
        ],
        currentPage: 1,
        perPage: 5,
        totalRows: items.length,
        pageOptions: [ 5, 10, 15 ],
        sortBy: null,
        sortDesc: false,
        filter: null,
        editar:false,
        acto:null,
        helpArticulo: ""
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
    methods: {
      detalles (item, index, button) {
        this.acto=item;
      },
      onFiltered (filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  });