<div>
                <div class="container">
                  <div class="form-row">
                      <div role="group" class="col-ms-12 col-md-4">
                        <label for="descripcion">Número de Gaceta:</label>
                        <b-form-input id="descripcion"
                                      v-model.trim="form.numero"
                                      type="number"
                                      :state="NumeroState"
                                      aria-describedby="inputLiveHelp inputLiveFeedbackDesc"
                                      placeholder="Identificación de la gaceta"></b-form-input>
                        <b-form-invalid-feedback id="inputLiveFeedbackDesc">
                          Esta información es obligatoria
                        </b-form-invalid-feedback>
                        <b-form-text id="inputLiveHelp">
                          Debe ingresar el número de la nueva gaceta
                        </b-form-text>
                      </div>
                      <div role="group" class="col-ms-12 col-md-4">
                        <label for="fecha">Fecha en Vigencia:</label>
                        <b-form-input id="fecha"
                                      v-model.trim="form.fecha"
                                      type="date"
                                      :state="DateState"
                                      aria-describedby="inputLiveHelp inputLiveFeedbackFecha"
                                      placeholder="Descripción de la gaceta"></b-form-input>
                        <b-form-invalid-feedback id="inputLiveFeedbackFecha">
                          La fecha debe ser menor a la actual
                        </b-form-invalid-feedback>
                        <b-form-text id="inputLiveHelp">
                          Fecha en la que entra en vigencia.
                        </b-form-text>
                      </div>
                      <div role="group" class="col-ms-12 col-md-4">
                      <label for="tipo">Tipo de Gaceta:</label>
                      <b-form-select v-model="form.selected" :options="options" :state="TipoState"
                                      aria-describedby="inputLiveHelp inputLiveFeedbackTipo">
                      </b-form-select>
                      <b-form-invalid-feedback id="inputLiveFeedbackTipo">
                          Debe Seleccionar un tipo de gaceta
                        </b-form-invalid-feedback>
                        <b-form-text id="inputLiveHelp">
                          Ordinaria ó Extraordinaria.
                        </b-form-text>
                      </div> 
                  </div>
                  <div class="form-row">
                        <template><div class="col-12"><div class="row"> 
                            <div role="group" class="col-ms-12 col-md-6">
                              <label for="Decrdescripcion">Publicación:</label>
                              <b-form-input id="Decrdescripcion"
                                            v-model.trim="form.Decrdescripcion[0]"
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
                            </div>
                            <div role="group" class="col-ms-12 col-md-6">
                                <label for="tipo">Tipo de Publicación:</label>
                                <b-form-select v-model="form.selected2[0].value" :options="options2" :state="TipoPState"
                                                aria-describedby="inputLiveHelp inputLiveFeedbackTipoP">
                                </b-form-select>
                                <b-form-invalid-feedback id="inputLiveFeedbackTipoP">
                                    Debe Seleccionar un tipo de publicación
                                  </b-form-invalid-feedback>
                                  <b-form-text id="inputLiveHelp">
                                    Ley, Decreto, Acuerdo, Reglamentos ó Resolución.
                                  </b-form-text>
                            </div></div></div>
                          </template>

                      <div class="form-group">
                        <button type="button"  v-on:click="onSubmit()" class="btn btn-primary botonGaceta"><i class="fa fa-fw fa-save" style="color: #00000073"></i>Guardar Gaceta</button>
                      </div>
                  </div>
              </div>
        </div>