var items2 = [];

var EventBus = new Vue;

 Vue.component('NuevaPublicacion',{
    template: "#NuevaPublicacion",
    props:['nuevaPublicacion','gacetas'],
        data (){
            return {
              form:{
                selected:null,
                Decrdescripcion:"",
                selected2:null
              },
              options2:[
              {
                value: null, text: 'Seleccione la Publicación'
              },
              {
                value: 'Ley', text: 'Ley'
              },
              {
                value: 'Decreto', text: 'Decreto'
              },
              {
                value: 'Acuerdo', text: 'Acuerdo'
              },
              {
                value: 'Reglamentos', text: 'Reglamento'
              },
              {
                value: 'Resolución', text: 'Resolución'
              }],
              options:[
              {
                value: null, text: 'Seleccione la gacete', publicaciones: null
              }],
            }
        },
        methods:{
        onSubmit () {
            console.log(this.form);
            alert(JSON.stringify(this.form));
            EventBus.$emit('regresar', false);
            EventBus.$emit('nuevaPublicacion', false);
          },
        },
        computed: {

          TipoState(){
            if(this.form.selected!=null)
              return true;
          },
          DecrDescState(){
            if(this.form.Decrdescripcion=='')
              return null;
              if(this.form.Decrdescripcion.length < 3) 
                return false;
            return true;
          },
          GacetaState(){ 
          console.log(this.gacetas);  
            if(this.options.length==1){
              for(var i=0; i<this.gacetas.length; i++){
                this.options.push({
                  value: this.gacetas[i],
                  text: this.gacetas[i].fecha+" "+this.gacetas[i].tipo+" #"+this.gacetas[i].numero,
                  publicaciones: this.gacetas[i].publicaciones
                });
              }
            }
            if(this.form.selected!=null){
              return true;
            }
          },
          TipoPState(){
            if(this.form.selected2!=null){
              return true;
            }
            return null;
          },
        }
  });

 Vue.component('NuevaGaceta',{
    template: "#NuevaGaceta",
    props:['nuevaGaceta'],
        data (){
            return {
              form: {
                numero: '',
                fecha: '',
                tipoS: '',
                selected: null,
                selected2: [{value : null}],
                contDecr: 0,
                Decrdescripcion: []
              },
              cantidad: "",
              options:[
              {
                value: null, text: 'Seleccione el tipo de gaceta'
              },
              {
                value: 'Gaceta Ordinaria', text: 'Gaceta Ordinaria'
              },
              {
                value: 'Gaceta Extraordinaria', text: 'Gaceta Extraordinaria'
              }],
              options2:[
              {
                value: null, text: 'Seleccione la Publicación'
              },
              {
                value: 'Ley', text: 'Ley'
              },
              {
                value: 'Decreto', text: 'Decreto'
              },
              {
                value: 'Acuerdo', text: 'Acuerdo'
              },
              {
                value: 'Reglamentos', text: 'Reglamento'
              },
              {
                value: 'Resolución', text: 'Resolución'
              }]
        }},
        methods:{
          onSubmit () {
            console.log(this.form);
            alert(JSON.stringify(this.form));
            EventBus.$emit('regresar', false);
            EventBus.$emit('nuevaGaceta', false);
          },
            decretoNew(){
              this.form.contDecr++;
              this.form.selected2.push({value : null});
            },
            decretoRemove(){
              if (this.form.contDecr>0)
                this.form.contDecr--;
            }
        },
        computed: {
          DateState () {
            if(this.form.fecha=="")
              return null;
            else{
              var hoy = new Date();
              var dd = hoy.getDate();
              var mm = hoy.getMonth()+1; //hoy es 0!
              var yyyy = hoy.getFullYear();
              if(dd<10) {
                  dd='0'+dd
              } 
              if(mm<10) {
                  mm='0'+mm
              } 
              hoy = yyyy+'-'+mm+'-'+dd;
              return this.form.fecha < hoy ? true : false;
            }
          },
          NumeroState () {
            if(this.form.numero=='')
              return null;
            else
              return this.form.numero != '' ? true : false;
          },
          TipoState(){
            if(this.form.selected!=null)
              return true;
          },
          TipoPState(){
            if((this.cantidad==0) && (this.form.selected2[0].value==null))
              return null;
            for(var i=0; i<this.cantidad; i++)
              if(this.form.selected2[i].value == null) 
                return false;
            return true;
          },
          NDescState(){
            if((this.cantidad==0)||(this.cantidad=="")){
                return null;
              }
            else{
              return this.cantidad > 0 ? true : false;
            }
          },
          DecrDescState(){
            if(this.cantidad==0 && !this.form.Decrdescripcion[0])
              return null;
            for(var i=0; i<this.cantidad; i++)
              if(this.form.Decrdescripcion[i].length < 3) 
                return false;
            return true;
          }
        }
    });

var app = new Vue({
        el: '#app',
        created: function(){
          EventBus.$on('nuevaGaceta', function (event) {
              this.gaceta=false;
            }.bind(this));
          EventBus.$on('nuevaPublicacion', function (event) {
              this.publicacion=false;
            }.bind(this));
          EventBus.$on('regresar', function (event) {
              this.actoNuevo=true;
            }.bind(this));
        },
        data (){
            return {
              //actos
              items: items2,
              fields: [
                { key: 'publicacion', label: 'Publicación', sortable: true },
                { key: 'articulo', label: 'Articulo', sortable: true },
                { key: 'numeral', label: 'Numeral', sortable: false },
                { key: 'literal', label: 'Literal', sortable: false },
                { key: 'acto', label: 'Acto', sortable: true, 'class': 'text-center' },
                { key: 'unidades', label: 'Unidades Tributarias', sortable: true }
              ],
              gaceta:false,
              publicacion:false,
              actoNuevo:true,
              currentPage: 1,
              perPage: 5,
              totalRows: items2.length,
              pageOptions: [ 5, 10, 15 ],
              sortBy: null,
              sortDesc: false,
              filter: null,
              //formulario
              form: {
                descripcion: '',
                articulo: '',
                numeral: '',
                literal: 'UNICO',
                unidades: "",
                selected: null,
                selected2: null,
              },
              otro:false,
              descripcionActo:true,

              //gacetas prueba
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
                  numero: "1231",
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
        }},
        methods:{
          otroActo(){
            this.descripcionActo=true;
            this.otro=!this.otro;
            this.form.articulo= "";
            this.form.numeral= "";
            this.form.literal= "UNICO";
            this.form.descripcion= "";
            this.form.unidades= "";
          },
          onSubmit () {
            alert(JSON.stringify(this.form));
            var Auxpublicacacion;
            for(var i=0; i<this.gacetas.length; i++){
              for(var j=0; j<this.gacetas[i].publicaciones.length; j++){
                if(this.gacetas[i].publicaciones[j].id==this.form.selected2){
                  Auxpublicacacion=this.gacetas[i].publicaciones[j].tipo+" "+this.gacetas[i].publicaciones[j].descripcion;
                }
              }
            }
            this.items.push({ acto: {id:"12", descripcion:this.form.descripcion}, unidades: this.form.unidades, publicacion: Auxpublicacacion, articulo:"Articulo "+this.form.articulo,numeral:"Numeral "+this.form.numeral,literal:"UNICO"});
            this.descripcionActo=false;
            this.otro=true;
          },
            methoLiteral(){
              if(this.form.literal=="unico")
                 this.form.literal="";
            },
            methoLiteralblur(){
              if(this.form.literal=="")
                this.form.literal="unico";
            },
            toggleAll (checked) {
              this.selected = checked ? this.flavours.slice() : []
            },
            info (item, index, button) {
              this.modalInfo.title = `Row index: ${index}`
              this.modalInfo.content = JSON.stringify(item, null, 2)
              this.$root.$emit('bv::show::modal', 'modalInfo', button)
            },
            resetModal () {
              this.modalInfo.title = ''
              this.modalInfo.content = ''
            },
            onFiltered (filteredItems) {
              // Trigger pagination to update the number of buttons/pages due to filtering
              this.totalRows = filteredItems.length
              this.currentPage = 1
            },
            nuevaGaceta1(){
              this.gaceta= true;
              this.actoNuevo=false;
            },
            nuevaPublicacion(){
              this.publicacion= true;
              this.actoNuevo=false;
            },
            
            detalles (item, index, button) {
              console.log(JSON.stringify(item, null, 2));
            },
        },
        computed:{
          DescState () {
            if(this.form.descripcion.length==0)
              return null;
            else{
                if(this.form.descripcion.length > 3){
                  return true;
                }
                else{
                  return false;
                }
              
            }
              return this.form.descripcion.length > 3 ? true : false;
          },
          ArticuloState(){
            if(this.form.articulo=="")
              return null;
            if(this.form.articulo > 0){
              $("#numeral").show(500);
              return true;
            }
            else{
              $("#numeral").hide(500);
              return false;
            }
          },
          NumeralState(){
            if(this.form.numeral=="")
              return null;
            if(this.form.numeral > 0){
              $("#unidades").show(500);
              $("#literal").show(500);
              return true;
            }
            else{
              $("#literal").hide(500);
              $("#unidades").hide(500);
              return false;
            }
          },
          literalState(){
            this.form.literal = this.form.literal.toLowerCase();
            if(this.form.literal=="unico")
              return null
              return this.form.literal.length > 1 ? false : true;
          },
          unidadesState(){
            if(this.form.unidades=="")
              return null;
            if(this.form.unidades > 0){
              return true;
            }
            else{
              return false;
            }
          },
          GacetaState(){    
            if(this.options.length==1){
              for(var i=0; i<this.gacetas.length; i++){
                this.options.push({
                  value: this.gacetas[i],
                  text: this.gacetas[i].fecha+" "+this.gacetas[i].tipo+" #"+this.gacetas[i].numero,
                  publicaciones: this.gacetas[i].publicaciones
                });
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
              this.form.selected2=null;
              return true;
            }
          },
          PublicState(){
            if(this.form.selected2!=null){
              for(var i=0;i<this.options2.length;i++){
                  if(this.options2[i].value==this.form.selected2){
                    this.helpArticulo=this.options2[i].text;
                  }
              }
               $("#articulo").show(500);
              return true;
            }
            $("#articulo").hide(500);
          },
          sortOptions () {
              // Create an options list from our fields
              return this.fields
                .filter(f => f.sortable)
                .map(f => { return { text: f.label, value: f.key } })
            }

        }
    });