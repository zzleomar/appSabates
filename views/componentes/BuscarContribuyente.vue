<h4>Documento del Contribuyente</h4>
  <hr>
  <div class="container">
    <div class="form-row">
      <div class="col-sm-6 col-md-8 col-lg-6 col-xl-4">
        
        <b-form-group label="Tipo de Contribuyente">
          <b-form-radio-group id="contribuyenteT"
                              buttons
                              v-model="selected"
                              :options="options"
                              :state="tipoState"
                              name="tipo" />
        </b-form-group>

      </div>
    <div role="group" class="col-sm-8 col-md-4 col-lg-5 col-xl-3">
        <label for="inputLive">{{ selected.documento }}</label>
        <b-form-input id="inputLive"
                      v-model="id"
                      type="number"
                      :state="IdState"
                      aria-describedby="inputLiveHelp inputLiveFeedback"
                      placeholder="Ingrese identificación del contribuyente"></b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedback">
          Dato incorrecto, verifique el {{  selected.documento }} del contribuyente
        </b-form-invalid-feedback>
        <b-form-text id="inputLiveHelp">
          identidad del contribuyenes.
        </b-form-text>
    </div>
    </div></div>
<br>

    
  <div class="container oculto" id="contribuyente">
      <h6 class="text-right" style="color:rgb(255, 128, 128)" v-if="contribuyente==null">Debe registrar el contribuyente</h6>
      <div role="group" class=" form-row" v-if="selected.tipo!='Juridico'">
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
    <div v-else>
          <div role="group" class="col-12">
          <label for="inputLive">Nombre Del la Empresa:</label>
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
    <!-- Complemento de dirección-->
        <div is="Direccion" role="group" class=" form-row" v-bind:municipio="municipio" v-bind:parroquia="parroquia" v-bind:estado="estado" v-bind:tipo="selected.tipo"  v-bind:text="text" v-bind:contribuyente="contribuyente"></div>
  </div>

