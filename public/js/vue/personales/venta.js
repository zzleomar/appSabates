 Vue.component('DatosContribuyente',{
    template: "#contribuyenteVue",
    props: ['datos'],
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
      }
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
        $("#contri").show();
      }
    }
  });