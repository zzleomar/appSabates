var items2 = [];



var app = new Vue({
        el: '#app',
        data (){
            return {
              //actos
              items: items2,
              fields: [
                { key: 'ley', label: 'Ley De Timbre Fiscal', sortable: true },
                { key: 'acto', label: 'Acto', sortable: true, 'class': 'text-center' },
                { key: 'unidades', label: 'Unidades Tributarias', sortable: true }
              ],
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
              //checkbox
              flavours: ['Natural', 'Juridico', 'Firma Personal'],
              selected: ['Natural', 'Juridico', 'Firma Personal'],
              allSelected: true,
              indeterminate: false,

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
            console.log(this.form);
            alert(JSON.stringify(this.form));
            this.items.push({ acto: {id:"12", descripcion:this.form.descripcion}, unidades: this.form.unidades, ley:{articulo:"Articulo "+this.form.articulo,numeral:"Numeral "+this.form.numeral,literal:"UNICO"}});
            this.descripcionActo=false;
            this.otro=true;
          },
            methoLiteral(){
              if(this.form.literal=="unico")
                 this.form.literal="";
            },
            methoLiteralblur(){
              alert(this.form.literal);
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
            }
        },
        watch: {
          selected (newVal, oldVal) {
            // Handle changes in individual flavour checkboxes
            if (newVal.length === 0) {
              this.indeterminate = false
              this.allSelected = false
            } else if (newVal.length === this.flavours.length) {
              this.indeterminate = false
              this.allSelected = true
            } else {
              this.indeterminate = true
              this.allSelected = false
            }
          }
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