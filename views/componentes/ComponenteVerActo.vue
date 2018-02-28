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
                  <div role="group" class="col-ms-10 col-md-5">
                      <label for="tipo">Publicación:</label>
                      <b-form-select v-model="form.selected2" :options="options2" :state="PublicState"
                                      aria-describedby="inputLiveHelp inputLiveFeedbackTipoP">
                      </b-form-select>
                      <b-form-invalid-feedback id="inputLiveFeedbackTipoP">
                          Debe Seleccionar la publicación
                        </b-form-invalid-feedback>
                        <b-form-text id="inputLiveHelp">
                          Publicación donde se describe el acto.
                        </b-form-text>
                  </div>
                </div> 
              <div>
<hr>
                
                <h6 style="text-align: right;">Descricción en la ley de Timbre Fiscal</h6>
                <div class="form-row" >
                  
                  <div role="group" class="col-md-4" id="articulo">
                      <label for="articulo">Articulo:</label>
                      <b-form-input id="articulo"
                                    v-model.trim="form.articulo"
                                    type="number"
                                    :state="ArticuloState"
                                    aria-describedby="inputLiveHelp inputLiveFeedbackArticulo"></b-form-input>
                      <b-form-invalid-feedback id="inputLiveFeedbackArticulo">
                        Debe Ingresar el Articulo
                      </b-form-invalid-feedback>
                      <b-form-text id="inputLiveHelp" v-if="helpArticulo!=null">
                        Articulo de {{ helpArticulo }}
                      </b-form-text>
                    </div>
                    <div role="group" class="col-md-4" id="numeral">
                      <label for="Numeral">Numeral:</label>
                      <b-form-input id="numeral"
                                    v-model.trim="form.numeral"
                                    type="number"
                                    :state="NumeralState"
                                    aria-describedby="inputLiveHelp inputLiveFeedbackNumeral"></b-form-input>
                      <b-form-invalid-feedback id="inputLiveFeedbackNumeral">
                        Debe Seleccionar el numeral
                      </b-form-invalid-feedback>
                      <b-form-text id="inputLiveHelp">
                        Numeral
                      </b-form-text>
                    </div>
                    <div role="group" class="col-md-2" id="literal" @click="methoLiteral">
                      <label for="Literal">Literal:</label>
                      <b-form-input id="literal"
                                    v-model.trim="form.literal"
                                    type="text"
                                    :state="literalState"
                                    aria-describedby="inputLiveHelp inputLiveFeedbackLiteral"  @focus="methoLiteral" @blur="methoLiteralblur"></b-form-input>
                      <b-form-invalid-feedback id="inputLiveFeedbackLiteral">
                        Ingrese solo la letra del abcedario
                      </b-form-invalid-feedback>
                      <b-form-text id="inputLiveHelp">
                        El valor de este campo es 'unico' en el caso de no poseer
                      </b-form-text>
                    </div>
                </div>             
                <div class="container" id="unidades">
                <hr>
                <h6 style="text-align: right;">Información del Acto</h6>
                  <div role="group" class="form-row col-12">
                      <label for="descripcion">Descripción del Acto :</label>
                      <b-form-input id="descripcion"
                                    v-model.trim="form.descripcion"
                                    type="text"
                                    :state="DescState"
                                    aria-describedby="inputLiveHelp inputLiveFeedbackDesc"
                                    placeholder="Descripción del Acto"></b-form-input>
                      <b-form-invalid-feedback id="inputLiveFeedbackDesc">
                        La descripción debe poseer mas de 3 caracteres
                      </b-form-invalid-feedback>
                      <b-form-text id="inputLiveHelp">
                        Debe poseer más de 3 caracteres.
                      </b-form-text>
                  </div>
                  <div class="form-group row" style="margin-top: 20px;">
                    <label for="example-number-input" class="col-2 col-form-label">Unidades Tributarias</label>
                    <div class="col-ms-6 col-md-4">
                        <b-form-input id="unidades"
                                      v-model.trim="form.unidades"
                                      type="number"
                                      :state="unidadesState"
                                      aria-describedby="inputLiveHelp inputLiveFeedbackUnidades"></b-form-input>
                        <b-form-invalid-feedback id="inputLiveFeedbackUnidades">
                          Ingrese un valor valido de unidades tributarias
                        </b-form-invalid-feedback>
                        <b-form-text id="inputLiveHelp">
                          ingrese un número real de unidades tributarias
                        </b-form-text>
                    </div>
                  </div>
                     
                  <button type="button"  v-on:click="onSubmit()" class="btn btn-primary btn-auxRegistrar" style="height: 45px;">Guardar</button>
                  <button type="button"  v-on:click="regresar()" class="btn btn-primary btn-auxRegistrar" style="height: 45px;">Atras</button>
                </div></div>
            </div>
