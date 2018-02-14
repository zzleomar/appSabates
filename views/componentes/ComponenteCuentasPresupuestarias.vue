<b-container class="col-12">
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
