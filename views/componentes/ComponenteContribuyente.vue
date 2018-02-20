<div>
        <div class="contenedorAuxcontri">
  <div v-if="contribuyente==null" class="col-12">
    <div  role="group" class=" form-row" v-if="tipo!='Juridico'">
      <div role="group" class="col-6">
        <label for="inputLive">Nombre Completo:</label>
        <b-form-input id="inputLive"
                      v-model.trim="nombre"
                      type="text"
                      :state="NombreState"
                      aria-describedby="inputLiveHelp inputLiveFeedback"
                      placeholder="Ingrese el nombre"></b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedback">
          Esta Información es obligatoria
        </b-form-invalid-feedback>
        <b-form-text id="inputLiveHelp">
          Nombres.
        </b-form-text>
    </div>
      <div class="col-6">
        <label style="opacity: 0;">Apellido</label>
        <b-form-input id="inputLive"
                      v-model.trim="apellido"
                      type="text"
                      :state="ApellidoState"
                      aria-describedby="inputLiveHelp inputLiveFeedback"
                      placeholder="Ingrese los apellidos"></b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedback">
          Esta Información es obligatoria
        </b-form-invalid-feedback>
        <b-form-text id="inputLiveHelp">
          Apellidos.
        </b-form-text>
      </div>
    </div>
    <div role="group" class=" form-row" v-else>
          <div role="group" class="col-12">
          <label for="inputLive">Nombre De la Empresa:</label>
          <b-form-input id="inputLive"
                        v-model.trim="nombre"
                        type="text"
                        :state="NombreState"
                        aria-describedby="inputLiveHelp inputLiveFeedback"
                        placeholder="Ingrese el nombre"></b-form-input>
          <b-form-invalid-feedback id="inputLiveFeedback">
            Esta Información es obligatoria
          </b-form-invalid-feedback>
          <b-form-text id="inputLiveHelp">
            Nombres.
          </b-form-text>
      </div>      
    </div>
      <div class="form-row">
        <div role="group" class="col-4">
        <label for="inputLive" v-if="tipo!='Juridico'">Dirección</label>
        <label for="inputLive" v-else>Dirección De Oficina Central del Pais</label>
        <b-form-select v-model="estado" :options="estados" :state="EstadoState"
                        aria-describedby="inputLiveHelp inputLiveFeedbackTipo" @change="estadoCambio">
        </b-form-select>
        <b-form-invalid-feedback id="inputLiveFeedbackTipo">
            Debe Seleccionar el estado donde se encuentra domiciliado
          </b-form-invalid-feedback>
          <b-form-text id="inputLiveHelp">
            Estado del pais.
          </b-form-text>
        </div>
        <div role="group" class="col-4" id="municipioC">
        <label for="inputLive" >Municipio</label>
        <b-form-select v-model="municipio" :options="municipios" :state="MunicipioState"
                        aria-describedby="inputLiveHelp inputLiveFeedbackTipo" @change="municipioCambio">
        </b-form-select>
        <b-form-invalid-feedback id="inputLiveFeedbackTipo">
            Debe Seleccionar el municipio donde se encuentra domiciliado
          </b-form-invalid-feedback>
          <b-form-text id="inputLiveHelp" v-if="estado!=null">
            Municipio del Estado {{ estado }}
          </b-form-text>
          <b-form-text id="inputLiveHelp" v-else>
            Debe Seleccionar el Estado Antes del municipio
          </b-form-text>
        </div>
        <div role="group" class="col-4" id="parroquiaC">
        <label for="inputLive" >Parroquia</label>
        <b-form-select v-model="parroquia" :options="parroquias" :state="ParroquiaState"
                        aria-describedby="inputLiveHelp inputLiveFeedbackTipo">
        </b-form-select>
        <b-form-invalid-feedback id="inputLiveFeedbackTipo">
            Debe Seleccionar la parroquia donde se encuentra domiciliado
          </b-form-invalid-feedback>
          <b-form-text id="inputLiveHelp">
            Parroquia del Municipio {{ municipio }}
          </b-form-text>
        </div>
        </div>
        <div class="form-row col-12">
      <label>Ubicación</label>
      <b-form-textarea id="textarea3" v-model="ubicacion" :state="direccionState" placeholder="Avenida / Sector / Calle / Nro. de Casa o Apartamento"></b-form-textarea>
      <b-form-text id="inputLiveHelp" class='text-right'>
           {{ (max-ubicacion.length) }} de {{ max }}
          </b-form-text>
    </div> 
  
    <button type="button"  v-on:click="onSubmit()" class="btn btn-primary btn-auxRegistrar" style="height: 45px;" v-if="contribuyente==null">Registrar</button>
    <button type="button"  v-on:click="onSubmit()" class="btn btn-primary btn-auxRegistrar" style="height: 45px;" v-else>Aceptar</button>
</div>


<!-- SI existe el contribuyente -->

<div v-else class="col-12">
    <div  role="group" class=" form-row" v-if="tipo!='Juridico'">
      <div role="group" class="col-6">
        <label for="inputLive">Nombre Completo:</label>
        <b-form-input id="inputLive"
                      v-model.trim="contribuyente.nombre"
                      type="text"
                      :state="NombreState"
                      aria-describedby="inputLiveHelp inputLiveFeedback"
                      placeholder="Ingrese el nombre"></b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedback">
          Esta Información es obligatoria
        </b-form-invalid-feedback>
        <b-form-text id="inputLiveHelp">
          Nombres.
        </b-form-text>
    </div>
      <div class="col-6">
        <label style="opacity: 0;">Apellido</label>
        <b-form-input id="inputLive"
                      v-model.trim="contribuyente.apellido"
                      type="text"
                      :state="ApellidoState"
                      aria-describedby="inputLiveHelp inputLiveFeedback"
                      placeholder="Ingrese los apellidos"></b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedback">
          Esta Información es obligatoria
        </b-form-invalid-feedback>
        <b-form-text id="inputLiveHelp">
          Apellidos.
        </b-form-text>
      </div>
    </div>
    <div role="group" class=" form-row" v-else>
          <div role="group" class="col-12">
          <label for="inputLive">Nombre De la Empresa:</label>
          <b-form-input id="inputLive"
                        v-model.trim="contribuyente.nombre"
                        type="text"
                        :state="NombreState"
                        aria-describedby="inputLiveHelp inputLiveFeedback"
                        placeholder="Ingrese el nombre"></b-form-input>
          <b-form-invalid-feedback id="inputLiveFeedback">
            Esta Información es obligatoria
          </b-form-invalid-feedback>
          <b-form-text id="inputLiveHelp">
            Nombres.
          </b-form-text>
      </div>      
    </div>
      <div class="form-row">
        <div role="group" class="col-4">
        <label for="inputLive" v-if="tipo!='Juridico'">Dirección</label>
        <label for="inputLive" v-else>Dirección De Oficina Central del Pais</label>
        <b-form-select v-model="contribuyente.estado" :options="estados" :state="EstadoState"
                        aria-describedby="inputLiveHelp inputLiveFeedbackTipo" @change="estadoCambio">
        </b-form-select>
        <b-form-invalid-feedback id="inputLiveFeedbackTipo">
            Debe Seleccionar el estado donde se encuentra domiciliado
          </b-form-invalid-feedback>
          <b-form-text id="inputLiveHelp">
            Estado del pais.
          </b-form-text>
        </div>
        <div role="group" class="col-4" id="municipioC">
        <label for="inputLive" >Municipio</label>
        <b-form-select v-model="contribuyente.municipio" :options="municipios" :state="MunicipioState"
                        aria-describedby="inputLiveHelp inputLiveFeedbackTipo" @change="municipioCambio">
        </b-form-select>
        <b-form-invalid-feedback id="inputLiveFeedbackTipo">
            Debe Seleccionar el municipio donde se encuentra domiciliado
          </b-form-invalid-feedback>
          <b-form-text id="inputLiveHelp" v-if="estado!=null">
            Municipio del Estado {{ contribuyente.estado }}
          </b-form-text>
          <b-form-text id="inputLiveHelp" v-else>
            Debe Seleccionar el Estado Antes del municipio
          </b-form-text>
        </div>
        <div role="group" class="col-4" id="parroquiaC">
        <label for="inputLive" >Parroquia</label>
        <b-form-select v-model="contribuyente.parroquia" :options="parroquias" :state="ParroquiaState"
                        aria-describedby="inputLiveHelp inputLiveFeedbackTipo">
        </b-form-select>
        <b-form-invalid-feedback id="inputLiveFeedbackTipo">
            Debe Seleccionar la parroquia donde se encuentra domiciliado
          </b-form-invalid-feedback>
          <b-form-text id="inputLiveHelp">
            Parroquia del Municipio {{ contribuyente.municipio }}
          </b-form-text>
        </div>
        </div>
        <div class="form-row col-12">
      <label>Ubicación</label>
      <b-form-textarea id="textarea3" v-model="contribuyente.ubicacion" :state="direccionState" placeholder="Avenida / Sector / Calle / Nro. de Casa o Apartamento"></b-form-textarea>
      <b-form-text id="inputLiveHelp" class='text-right'>
           {{ (max-contribuyente.ubicacion.length) }} de {{ max }}
          </b-form-text>
    </div> 
  
    <button type="button"  v-on:click="onSubmit()" class="btn btn-primary btn-auxRegistrar" style="height: 45px;" v-if="contribuyente==null">Registrar</button>
    <button type="button"  v-on:click="onSubmit()" class="btn btn-primary btn-auxRegistrar" style="height: 45px;" v-else>Aceptar</button>
</div>
</div>
<transition name="fade" mode="in-out">
<div  v-show="aceptado">
<div is="ActosContribuyente" role="group" class=" form-row"  v-bind:contribuyente="itemAux"  v-bind:tipo="tipo" v-bind:items="actos"></div>
<button v-show="aceptado" type="button"  v-on:click="regresar()" class="btn btn-secondary btn-auxRegistrar" style="height: 45px;float: right;">Atras</button>  
  
</div>
</transition>
</div>