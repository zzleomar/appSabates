

<div class="container">
<br><div v-if="datos!=null">
<h4>Información del Acto</h4>
  <hr>
  <div class="row">
    <div class="col-6 centerHorizontal">
      <label>Descricción del Acto: </label>{{ datos.acto.descripcion}}
    </div>
    <div class="costo-timbre">
      <label>{{ datos.unidades+"UT = "+(datos.unidades*valor)+"Bs."}}</label>
    </div>
  </div>
 <h1 > {{ datos.id }}  </h1>
</div>  
<h4>Ingrese datos del Contribuyente</h4>
  <hr>
    <div class="form-row">
      <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
        
        <b-form-group label="Nacionalidad">
          <b-form-radio-group id="Venezolano"
                              buttons
                              v-model="selected"
                              :options="options"
                              name="nacionalidad" />
        </b-form-group>

      </div>
    <div role="group" class="col-sm-6 col-md-6 col-lg-8 col-xl-9">
        <label for="inputLive">{{ selected }}</label>
        <b-form-input id="inputLive"
                      v-model="id"
                      type="number"
                      :state="IdState"
                      aria-describedby="inputLiveHelp inputLiveFeedback"
                      placeholder="Ingrese identificación del contribuyente"></b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedback">
          <!-- This will only be shown if the preceeding input has an invalid state -->
          Dato incorrecto, verifique el {{  selected }} del contribuyente
        </b-form-invalid-feedback>
        <b-form-text id="inputLiveHelp">
          <!-- this is a form text block (formerly known as help block) -->
          identidad del contribuyenes.
        </b-form-text>
    </div>
    </div>

    <div role="group" class=" form-row">
      <div role="group" class="col-6">
        <label for="inputLive">Nombre Completo:</label>
        <b-form-input id="inputLive"
                      v-model.trim="nombre"
                      type="text"
                      :state="NombreState"
                      aria-describedby="inputLiveHelp inputLiveFeedback"
                      placeholder="Ingrese el nombre"></b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedback">
          <!-- This will only be shown if the preceeding input has an invalid state -->
          Esta Información es obligatoria
        </b-form-invalid-feedback>
        <b-form-text id="inputLiveHelp">
          <!-- this is a form text block (formerly known as help block) -->
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
          <!-- This will only be shown if the preceeding input has an invalid state -->
          Esta Información es obligatoria
        </b-form-invalid-feedback>
        <b-form-text id="inputLiveHelp">
          <!-- this is a form text block (formerly known as help block) -->
          Apellidos.
        </b-form-text>
      </div>
    </div>

    <div role="group" class=" form-row">
      <div role="group" class="col-4">
        <label for="inputLive">Dirección De hospedaje</label>
        <b-form-select v-model="estado" :options="estados" :state="EstadoState"
                        aria-describedby="inputLiveHelp inputLiveFeedbackTipo">
        </b-form-select>
        <b-form-invalid-feedback id="inputLiveFeedbackTipo">
            Debe Seleccionar el estado donde se encuentra domiciliado
          </b-form-invalid-feedback>
          <b-form-text id="inputLiveHelp">
            Estado del pais.
          </b-form-text>
        </div>
        <div role="group" class="col-4 oculto" id="municipioC">
        <label for="inputLive" style="opacity:0">Municipio</label>
        <b-form-select v-model="municipio" :options="municipios" :state="MunicipioState"
                        aria-describedby="inputLiveHelp inputLiveFeedbackTipo">
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
        <div role="group" class="col-4 oculto" id="parroquiaC">
        <label for="inputLive" style="opacity:0">Parroquia</label>
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
    <div class="form-row">
      <label>Ubicación</label>
      <b-form-textarea id="textarea3" v-model="text" :state="direccionState" placeholder="Avenida / Sector / Calle / Nro. de Casa o Apartamento"></b-form-textarea>
      <b-form-text id="inputLiveHelp" class='text-right'>
           {{ (max-text.length) }} de {{ max }}
          </b-form-text>
    </div>
                  <button type="button"  class="btn btn-secondary btn-auxRegistrar " id="regresarVenta" style="height: 45px;">Regresar</button>
                  <button type="button"  v-on:click="onSubmit()" class="btn btn-primary btn-auxRegistrar" style="height: 45px;">Registrar</button>
    </div>
</div>
