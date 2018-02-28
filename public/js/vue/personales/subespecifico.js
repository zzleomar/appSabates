 var app = new Vue({
  el: '#app',
    data () {
      return {
        items: cuentas,
        fields: [
          { key: 'codigo', label: 'Código', sortable: true },
          { key: 'rama', label: 'Rama', sortable: true, 'class': 'text-center' },
          { key: 'subrama', label: 'Subrama', sortable: true, 'class': 'text-center' },
          { key: 'especifico', label: 'Especifico', sortable: true, 'class': 'text-center' },
          { key: 'subespecifico', label: 'Subspecifico', sortable: true, 'class': 'text-center' },
        ],
        currentPage: 1,
        perPage: 5,
        totalRows: cuentas.length,
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
    methods:{
        onFiltered (filteredItems) {
          // Trigger pagination to update the number of buttons/pages due to filtering
          this.totalRows = filteredItems.length
          this.currentPage = 1
        }
    }

});
        