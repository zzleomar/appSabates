<!--<b-container class="col-12">
    <b-ul  v-for="cuenta in items">
    	<b-ul  v-for="rama in cuenta.ramas">
		    	<b-ul  v-for="subrama in rama.subramas" >
					<b-ul  v-for="especifico in subrama.especificos">
    					<b-ul  v-for="subespecifico in especifico.subespecificos">
							 <b-li class="col-3">{{ cuenta.id+"."+rama.id+"."+subrama.id+"."+especifico.id+"."+subespecifico.id }}</b-li>
							 <b-li>{{ cuenta.descripcion+rama.descripcion+subrama.descripcion+especifico.descripcion+subespecifico.descripcion }}</b-li><br>
						</b-ul>
			    	</b-ul>
		    	</b-ul>
    	</b-ul>
    </b-ul>
</b-container>
-->


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
      
   </b-table>
      <b-col md="12" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" align="right" />
      </b-col>
  

  </b-container>