var app = new Vue({
        el: '#app',
        data (){
            return {
              form: {
                descripcion: '',
                articulo: '',
                numeral: '',
                literal: 'UNICO',
                unidades: "",
                selected: null,
                selected2: null
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
          onSubmit () {
            console.log(this.form);
            alert(JSON.stringify(this.form));
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
            publicaciones(){
              /*for(var i=0; i<this.form.selected.publicaciones.length;i++){
                this.options2.push({
                  value: this.form.selected.publicaciones[i].id,
                  text: this.form.selected.publicaciones[i].tipo+", "+this.form.selected.publicaciones[i].descripcion
                });
              }
              console.log(this.form.selected);*/

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
              $("#numeral").show();
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
              $("#literal").show();
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
               $("#articulo").show();
              return true;
            }
            $("#articulo").hide(500);
          }

        }
    });