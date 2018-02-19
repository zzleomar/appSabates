
 <b-container fluid>
    <!-- User Interface controls -->
    <b-row class="t-margenTop">
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Buscar" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Ingrese Busqueda" />
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Ordenar" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- Opción de Ordenado --</option>
            </b-form-select>
            <b-input-group-button>
              <b-form-select :disabled="!sortBy" v-model="sortDesc">
                <option :value="false">Asc</option>
                <option :value="true">Desc</option>
              </b-form-select>
            </b-input-group-button>
          </b-input-group>
        </b-form-group>
      </b-col>
    
    </b-row>

    <!-- Main table element -->
    <b-table hover class='text-center thead-gris t-margenTop' show-empty
             stacked="md"
             empty-text="Actos no registrados"
             empty-filtered-text="No encontrado"
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             @filtered="onFiltered"
    >
      <template slot="ley" slot-scope="row" >{{row.value.articulo+", "+row.value.numeral}}<div v-if="row.value.literal!='UNICO'">{{" ,Literal "+row.value.literal}}</div></template>
      <template slot="acto" slot-scope="row" >{{row.value.descripcion}}</template>
      <template slot="unidades" slot-scope="row" >{{row.value+" UT"}}</template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
          </ul>
        </b-card>
      </template>
   </b-table>
      <b-col md="12" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" align="right" />
      </b-col>
  

  </b-container>