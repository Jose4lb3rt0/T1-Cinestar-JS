const getCine = async()=>{
    const id = new URLSearchParams(window.location.search).get('id')
    const data = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}`)
    const data1 = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/tarifas`)
    const data2 = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/peliculas`)

    if(data.status = 200){
        const cine = await data.json()
        const tarifas = await data1.json()
        const peliculas = await data2.json()

        let htmlTarifas = '';
        tarifas.forEach(tarifa => {
            htmlTarifas += `
            <div class="fila">
                <div class="celda-titulo">${tarifa.DiasSemana}</div>
                <div class="celda">${tarifa.Precio}</div>
            </div>
            `
        });

        let htmlPeliculas = '';
        peliculas.forEach(pelicula => {
            htmlPeliculas += `
            <div class="fila">
                <div class="celda-titulo">${pelicula.Titulo}</div>
                <div class="celda">${pelicula.Horarios}</div>
            </div>
            `
        });

        let html = `
        <h2>${cine.RazonSocial}</h2>
        <div class="cine-info">
            <div class="cine-info datos">
                <p>${cine.Direccion} - ${cine.Detalle}</p>
                <p>Teléfono: ${cine.Telefonos}</p>
                <br/>
                <div class="tabla">

                ${htmlTarifas}

                </div>
                <div class="aviso">
                    <p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
                </div>
            </div>
            <img src="img/cine/${cine.id}.2.jpg"/>
            <br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
            <div class="cine-info peliculas">
                <div class="tabla">

                ${htmlPeliculas}

                </div>
            </div>
        </div>
        <div>
            <img style="float:left;" src="img/cine/${cine.id}.3.jpg" alt="Imagen del cine"/>
            <span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
                Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
                <br/><br/>
                Visitános y diviértete con nosotros. 
                <br/><br/>
                <b>CINESTAR</b>, siempre pensando en tí. 
            </span>		
        </div>
        `
        document.getElementById('contenido-interno').innerHTML=html
    }
}
/*
<h2>Cinestar Excelsior</h2>
				<div class="cine-info">
					<div class="cine-info datos">
						<p>Jirón de la Unión 780 - Lima</p>
						<p>Teléfono: 714-1865 anexo 865</p>
						<br/>
						<div class="tabla">
							<div class="fila">
								<div class="celda-titulo">Lunes y Miércoles</div>
								<div class="celda">S/. 4.00</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">Martes</div>
								<div class="celda">S/. 3.50</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">Jueves y Viernes</div>
								<div class="celda">S/. 6.50</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">Sábado, Domingo y Feriados</div>
								<div class="celda">S/. 7.50</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">Adulto mayor y niños hasta 8 años (sábados, domingos y feriados)</div>
								<div class="celda">S/. 4.00</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">3D - Lunes y Miércoles</div>
								<div class="celda">S/. 7.50</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">3D - Martes</div>
								<div class="celda">S/. 6.00</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">3D - Jueves a Domingo y Feriados</div>
								<div class="celda">S/. 11.00</div>
							</div>
						</div>
						<div class="aviso">
							<p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
						</div>
					</div>
					<img src="img/cine/1.2.jpg"/>
					<br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
					<div class="cine-info peliculas">
						<div class="tabla">
							<div class="fila">
								<div class="celda-cabecera">Películas</div>
								<div class="celda-cabecera">Horarios</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">GUERRERO</div>
								<div class="celda">13:00 / 13:30 / 14:00 / 15:00 / 15:30 / 16:00 / 17:00 / 17:30 / 18:00 / 19:00 / 20:00 / 21:00 / 21:55</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">LA LEYENDA DE LA BELLA DURMIENTE</div>
								<div class="celda">19:45 / 21:30</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">ROGUE ONE</div>
								<div class="celda">13:00 / 14:00 / 15:30 / 16:30 / 18:00 / 19:00 / 19:30 / 20:30 / 21:30 / 21:55</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">MOANA</div>
								<div class="celda">13:00 / 15:15 / 17:30</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<img style="float:left;" src="img/cine/1.3.jpg" alt="Imagen del cine"/>
					<span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
						Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
						<br/><br/>
						Visitános y diviértete con nosotros. 
						<br/><br/>
						<b>CINESTAR</b>, siempre pensando en tí. 
					</span>		
				</div>
*/