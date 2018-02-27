var app = new Vue({
  el: '#app',
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
        console.log(JSON.stringify(item, null, 2));
      },
      onFiltered (filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  });