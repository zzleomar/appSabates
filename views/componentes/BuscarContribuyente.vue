<div id="containercontribuyente">
  <div id="containercontribuyente2">
<h4>Documento del Contribuyente</h4>
  <hr>
  <div class="container">
    <div class="form-row">
      <div class="row col-sm-6 col-md-6 col-lg-3 col-xl-2">
        
        <b-form-group label="Tipo de Contribuyente">
          <b-form-radio-group id="contribuyenteT"
                              buttons
                              button-variant="success"
                              v-model="selected"
                              :options="tiposContribuyentes"
                              :state="tipoState"
                              name="tipo" ></b-form-radio-group>
        </b-form-group>
      </div>
    <div role="group" class="row col-sm-6 col-md-6 col-lg-8 col-xl-8">
     <div v-if="selected.tipo=='Personal'" style="margin-top:1.7rem;">
       <b-form-group>
          <b-form-select id="contribuyenteT"
                              buttons
                              button-variant="success"
                              v-model="selected2"
                              :options="tiposDocumentos"
                              :state="tipo2State"
                              name="tipo" ></b-form-select>
        </b-form-group>
     </div>
     <div v-else style="margin-top:1.7rem;">
       <b-form-group>
          <b-form-radio-group id="contribuyenteT"
                              buttons
                              button-variant="success"
                              v-model="selected2"
                              :options="tiposDocumentos"
                              :state="tipo2State"
                              name="tipo" ></b-form-radio-group>
          <model-select :options="tiposDocumentos"
                                v-model="selected2"
                                placeholder="Tipo de Rif">
         </model-select>
        </b-form-group>
     </div> 
      <div class="form-group">
        <label for="inputLive">{{ selected2.documento }}</label>
        <b-form-input id="inputLive"
                      v-model="id"
                      type="text"
                      :state="IdState"
                      aria-describedby="inputLiveHelp inputLiveFeedback"
                      placeholder="Ingrese identificación del contribuyente"></b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedback">
          Dato incorrecto, verifique el {{  selected2.documento }} del contribuyente
        </b-form-invalid-feedback>
        <b-form-text id="inputLiveHelp">
          identidad del contribuyente.
        </b-form-text>
    </div></div>
    </div></div>
<br></div>
      <div class="container oculto" id="IDcontribuyente">

    <!-- Complemento de dirección-->
      <h6 class="text-right" style="color:rgb(255, 128, 128)" v-if="contribuyente==null||contribuyente.length<1">Debe registrar el contribuyente</h6>
        <div v-if="(contribuyente==null)||(contribuyente!=null&&contribuyente.length==0)">
          <div v-if="(contribuyente==null)" is="Contribuyente" v-bind:actos="actos" role="group" class=" form-row" v-bind:tipo="selected.tipo" v-bind:itemAux="itemAux" v-bind:contribuyente="contribuyente" v-bind:identificado="id"></div>
          <div v-else is="Contribuyente" v-bind:actos="actos" role="group" class=" form-row" v-bind:tipo="selected.tipo" v-bind:itemAux="itemAux" v-bind:contribuyente="contribuyente[0]" v-bind:identificado="id" ></div>
        </div>
        <div v-else>
          <h6 class="text-right" style="color:#ffc107" v-if="contribuyente.length>1" id="msjAux">Elija el contribuyente</h6>
          <div v-for="item in contribuyente" is="Contribuyente" v-bind:actos="actos" role="group" class=" form-row" v-bind:tipo="selected.tipo" v-bind:itemAux="itemAux" v-bind:contribuyente="item" v-bind:identificado="id"></div>
          <button type="button"  v-on:click="nuevo()" class="btn btn-secondary btn-auxRegistrar" style="height: 45px;float: right;" v-if="selected.tipo=='Juridico'" id="nuevafirmabutton">Nueva Organización</button>
        </div>
  </div>
   <div class="oculto" id="IDnuevaFirma" style="clear: both;">
            <div is="Contribuyente" v-bind:actos="actos" role="group" class=" form-row" v-bind:tipo="selected.tipo" v-bind:itemAux="itemAux" v-bind:contribuyente="null" v-bind:identificado="id" ></div>
          <button type="button"  v-on:click="regresar()" class="btn btn-secondary btn-auxRegistrar" id="regresarContribuyentes" style="height: 45px;float: right;" v-if="selected.tipo=='Juridico'">Atras</button>
          </div>
</div>




