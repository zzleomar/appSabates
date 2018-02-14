var app = new Vue({
        el: '#app',
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