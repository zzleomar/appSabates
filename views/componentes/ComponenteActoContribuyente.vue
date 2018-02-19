
 <b-container fluid>
<div v-if="tipo=='Personal'" class="col-12">
 <h5> {{'CI: '+contribuyente.id+" "+contribuyente.apellido+" "+contribuyente.nombre}}</h5>
</div>
<div v-else class="col-12">
    <div v-if="tipo=='Juridico'" class="col-12">
    <h5>{{'Rif: J-'+contribuyente.id+" "+contribuyente.nombre}}</h5>
  </div>
  <div v-else class="col-12">
    <div v-if="contribuyente!=null">
      <h5> {{'Rif: P-'+contribuyente.id+" "+contribuyente.nombre}}</h5>
    </div>
  </div>
</div>
<br>
<div class="col-12"><h4>Seleccione el acto</h4></div>
  
  <hr>
    <!-- User Interface controls -->
    <b-row class="t-margenTop">
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Buscar" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Ingrese Busqueda"></b-form-input>
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
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             @filtered="onFiltered"
             tbody-tr-class="TrVenta"
             @row-clicked="click"
      >
      <template slot="acto" slot-scope="row">{{row.value.descripcion}}</template>
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
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" align="right" ></b-pagination>
      </b-col>
      <button type="button"  v-on:click="regresar()" class="btn btn-secondary btn-auxRegistrar" style="height: 45px;float: right;">Atras</button>
  </b-container>