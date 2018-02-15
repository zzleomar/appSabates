 Vue.component('DatosContribuyente',{
    template: "#contribuyenteVue",
    props: ['datos'],
    data (){
    return {
      id:"",
      options: [
        { text: 'Venezolano', value: 'Nro. Cédula'},
        { text: 'Extranjero', value: 'Nro. Pasaporte' }
      ],
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
      max: 100,
      selected: 'Nro. Cédula'
    }
  },
  computed: {
    IdState (){
    if(this.id == "")
        return null;
      return (this.id > 99999 && this.id <  99999999 ) ? true : false;       
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
    },
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
            alert("en proceso");
          }
  }
});   

var app = new Vue({
  el: '#app',
    data () {
      return {
        items: items,
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
        modalInfo: { title: '', content: '' }
      }
    },
    computed: {
      sortOptions () {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => { return { text: f.label, value: f.key } })
      },
    },
    methods: {
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
      click(item2){
        this.acto=item2;
        $("#demo").hide();
        $('#regresarVenta').removeClass('active');
        $("#ajaxMain ol").append('<li class="breadcrumb-item active">Contribuyente</li>');
        $("#contri").show();
      }
    }
  });