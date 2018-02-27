<div class="container">
    <h6 style="text-align: right;">Gaceta Oficial</h6>
  <div class="form-row">
    <div role="group" class="col-ms-10 col-md-5">
      <label for="tipo">Gaceta:</label>
      <b-form-select v-model="form.selected" 
                      :options="options" 
                      :state="GacetaState"
                      aria-describedby="inputLiveHelp inputLiveFeedbackTipo">
      </b-form-select>
      <b-form-invalid-feedback id="inputLiveFeedbackTipo">
          Debe Seleccionar una gaceta
        </b-form-invalid-feedback>
        <b-form-text id="inputLiveHelp">
          Gaceta donde se hace la publicación del nuevo acto.
        </b-form-text>
    </div>
      <div role="group" class="col-ms-12 col-md-6">
          <label for="tipo">Tipo de Publicación:</label>
          <b-form-select v-model="form.selected2" :options="options2" :state="TipoPState"
                          aria-describedby="inputLiveHelp inputLiveFeedbackTipoP">
          </b-form-select>
          <b-form-invalid-feedback id="inputLiveFeedbackTipoP">
              Debe Seleccionar un tipo de publicación
            </b-form-invalid-feedback>
            <b-form-text id="inputLiveHelp">
              Ley, Decreto, Acuerdo, Reglamentos ó Resolución.
            </b-form-text>
      </div>
    <div class="col-12"><div class="row"> 
      <div role="group" class="col-ms-12 col-md-6">
        <label for="Decrdescripcion">Publicación:</label>
        <b-form-input id="Decrdescripcion"
                      v-model.trim="form.Decrdescripcion"
                      type="text"
                      :state="DecrDescState"
                      aria-describedby="inputLiveHelp inputLiveFeedbackDesc"
                      placeholder="Descripción de la publicación"></b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedbackDesc">
          La descripción debe poseer mas de 3 caracteres
        </b-form-invalid-feedback>
        <b-form-text id="inputLiveHelp">
          Debe poseer más de 3 caracteres.
        </b-form-text>
      </div></div></div>
  </div>
    <button type="button"  v-on:click="onSubmit()" class="btn btn-primary btn-auxRegistrar" style="height: 45px;">Registrar</button>
  </div></div>
</div>