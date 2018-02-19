<div id="containercontribuyente">
  <div id="containercontribuyente2">
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
                              name="tipo" ></b-form-radio-group>
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
<br></div>
      <div class="container oculto" id="IDcontribuyente">

    <!-- Complemento de dirección-->
      <h6 class="text-right" style="color:rgb(255, 128, 128)" v-if="contribuyente==null||contribuyente.length<1">Debe registrar el contribuyente</h6>
        <div v-if="(contribuyente==null)||(contribuyente!=null&&contribuyente.length==0)">
          <div v-if="(contribuyente==null)" is="Contribuyente" v-bind:actos="actos" role="group" class=" form-row" v-bind:tipo="selected.tipo" v-bind:itemAux="itemAux" v-bind:contribuyente="contribuyente" v-bind:identificado="id"></div>
          <div v-else is="Contribuyente" v-bind:actos="actos" role="group" class=" form-row" v-bind:tipo="selected.tipo" v-bind:itemAux="itemAux" v-bind:contribuyente="contribuyente[0]" v-bind:identificado="id" ></div>
        </div>
        <div v-else>
          <h6 class="text-right" style="color:#ffc107" v-if="contribuyente.length>1">Elija el contribuyente</h6>
          <div v-for="item in contribuyente" is="Contribuyente" v-bind:actos="actos" role="group" class=" form-row" v-bind:tipo="selected.tipo" v-bind:itemAux="itemAux" v-bind:contribuyente="item" v-bind:identificado="id"></div>
          <button type="button"  v-on:click="nuevo()" class="btn btn-secondary btn-auxRegistrar" style="height: 45px;float: right;" v-if="selected.tipo=='Firma Personal'" id="nuevafirmabutton">Nueva Firma Personal</button>
        </div>
  </div>
   <div class="oculto" id="IDnuevaFirma" style="clear: both;">
            <div is="Contribuyente" v-bind:actos="actos" role="group" class=" form-row" v-bind:tipo="selected.tipo" v-bind:itemAux="itemAux" v-bind:contribuyente="null" v-bind:identificado="id" ></div>
          <button type="button"  v-on:click="regresar()" class="btn btn-secondary btn-auxRegistrar" id="regresarContribuyentes" style="height: 45px;float: right;" v-if="selected.tipo=='Firma Personal'">Atras</button>
          </div>
</div>




