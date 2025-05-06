class c extends HTMLElement{constructor(){super()}connectedCallback(){let e=this.getAttribute("path"),o=this.getAttribute("nav-active");e==null&&(e=""),this.innerHTML=`
	<header class="headerBancoppel">
	   <nav class="headerBancoppel--nav navbar-expand-lg">
		  <div class="headerBancoppel--sup ">
			 <div class="custom-container">
				<div class="row">
				   <div class="col-6 col-xl-7 headerBancoppel--sup--main">
					  <a href="https://www.bancoppel.com/main/index.html" id="link-logo" data-name="Logo BanCoppel" class="text-decoration-none">
						 <img src="${e}img/Logotipo-2025.png" alt="Logo BanCoppel" />
					  </a>
					  <a href="https://www.bancoppel.com/main/index.html" class="active" data-name="Personas">
						 <h5>Personas</h5>
					  </a>
					  <a href="https://www.bancoppel.com/empresas/" data-name="Empresas">
						 <h5>BanCoppel para Empresas</h5>
					  </a>
				   </div>
				   <div class="col-6 col-xl-5 headerBancoppel--sup--accesos">
	
					  <a href="https://www.bancoppel.com/BanCoppelWeb/index_r.html" class="headerBancoppel-icon icon-icon-avatar" id="link-sesion-nav" data-name="Sesión"></a>
	
					  <a href="https://www.bancoppel.com/preguntas_frecuentes/" class="headerBancoppel-icon icon-icon-ayuda" id="link-sucursal-nav" data-name="Ayuda" target="_blank" rel='noopener noreferrer'><span>Queremos
							ayudarte</span></a>
	
					  <a href="https://www.bancoppel.com/geolocalizacion/" class="headerBancoppel-icon icon-icon-place" id="link-ayuda-nav" data-name="Sucursales"><span>Sucursales
							BanCoppel</span></a>
	
					  <a href="https://www.bancoppel.com/BanCoppelWeb/index.html" id="btnBanca" data-name="Banca">
						 <custom-boton tipo="primario" texto-boton="Entrar a mi Banca"></custom-boton></a>
	
					  <button class="navbar-toggler icon-icon-ham" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	
					  </button>
				   </div>
				</div>
	
			 </div>
		  </div>
	
		  <div class="headerBancoppel--subnivel" id="navbarSupportedContent">
			 <div class="custom-container" id="accordionExample">
				<div class="headerBancoppel--subnivel--logo">
				   <a href="https://www.bancoppel.com/main/index.html" target="_blank" rel='noopener noreferrer' id="link-logo" class="text-decoration-none">
					  <img src="${e}img/logo-bancoppel-color-2025.png" alt="Logo BanCoppel" />
				   </a>
	
				   <button class="navbar-toggler icon-icon-ham" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	
				   </button>
	
				</div>
				<ul class="headerBancoppel--subnivel--uno">
				   <li class="li-nivel-uno" id="nav-tarjetas">
					  <span class="accordion-button collapsed" data-name="Tarjetas de Crédito" data-bs-target="#accordion-1" data-bs-toggle="collapse" aria-expanded="false">
						 Tarjetas
						 de Crédito
					  </span>
					  <div id="accordion-1" class="accordion-collapse collapse headerBancoppel--subnivel--dos" data-bs-parent="#accordionExample">
	
						 <ul>
							<li><a href="https://www.bancoppel.com/credito_bcopp/tdc.html" data-name="Tarjeta de Crédito BanCoppel">Tarjeta de Crédito BanCoppel</a></li>
	
							<li><a href="https://www.bancoppel.com/credito_bcopp/tdco.html" data-name="Tarjeta de Crédito BanCoppel Oro">Tarjeta de Crédito BanCoppel Oro</a></li>
	
							<li><a href="https://www.bancoppel.com/credito_bcopp/tdcp.html" data-name="Tarjeta de Crédito BanCoppel Platinum">Tarjeta de Crédito BanCoppel Platinum</a></li>
	
							<li><a href="https://www.bancoppel.com/credito_bcopp/tdci.html" data-name="Tarjeta de Crédito BanCoppel Infinite">Tarjeta de Crédito BanCoppel Infinite</a></li>
	
							<li><a href="https://www.bancoppel.com/credito_bcopp/concursobancoppeltepremia.html" data-name="Concurso BanCoppel te Premia">Concurso BanCoppel te Premia</a></li>
	
							<!-- <li><a href="https://www.bancoppel.com/credito_bcopp/tdcg.html" data-name="Tarjeta BanCoppel Grupo Coppel">Tarjeta BanCoppel Grupo Coppel</a></li> -->
						 </ul>
					  </div>
				   </li>
	
				   <li class="li-nivel-uno" id="nav-cuentas"><span class="accordion-button collapsed" data-bs-target="#accordion-2" data-bs-toggle="collapse" aria-expanded="false" data-name="Cuentas">Cuentas</span>
	
					  <div id="accordion-2" class="accordion-collapse collapse headerBancoppel--subnivel--dos" data-bs-parent="#accordionExample">
						 <ul>
							<div class="headerBancoppel--subnivel--title">
							   <img src="${e}img/icon-dinero.png" alt="">
							   <h5><strong>Ahorro</strong></h5>
							</div>
	
							<li><a href="https://www.bancoppel.com/ahorro_bcopp/cuenta_efectiva.html" data-name="Cuenta Efectiva Digital">Cuenta Efectiva Digital</a></li>
	
							<li><a href="https://www.bancoppel.com/ahorro_bcopp/cuenta_efectiva_jovenes.html" data-name="Cuenta Efectiva Jóvenes">Cuenta Efectiva Jóvenes <br> (De 14 a 16 años)</a></li>
	
							<li><a href="https://www.bancoppel.com/ahorro_bcopp/cuenta_efectiva_cheques.html" data-name="Cuenta Efectiva Cheques">Cuenta Efectiva Cheques</a></li>
	
							<!-- <li><a href="https://www.bancoppel.com/ahorro_bcopp/bancoppel_clic.html" data-name="Cuenta BanCoppel Clic">Cuenta BanCoppel Clic</a></li> -->
	
							<!-- <li><a href="https://www.bancoppel.com/ahorro_bcopp/producto_basico.html" data-name="Producto Básico General">Producto Básico General</a></li> -->
	
							<li><a href="https://sorteoefectivo.bancoppel.com/" data-name="Sorteo Efectivo BanCoppel">Sorteo Efectivo BanCoppel</a></li>
	
							<li><a href="https://www.bancoppel.com/credito_bcopp/concursobancoppeltepremia.html" data-name="Concurso BanCoppel te Premia">Concurso BanCoppel te Premia</a></li>
						 </ul>
	
						 <ul>
							<div class="headerBancoppel--subnivel--title">
							   <img src="${e}img/icon-tienda.png" alt="">
							   <h5><strong>Nómina</strong></h5>
							</div>
							<li><a href="https://www.bancoppel.com/nomina_personas/cuenta_nomina.html" data-name="Cuenta Nómina BanCoppel">Cuenta Nómina BanCoppel</a></li>
							<li><a href="https://www.bancoppel.com/nomina_personas/portabilidad_personas.html" data-name="Portabilidad de Nómina">Portabilidad de Nómina</a></li>
	
							<li><a href="https://www.bancoppel.com/nomina_personas/anticipo.html" data-name="Anticipo de Nómina">Anticipo de Nómina</a></li>
	
							<li><a href="https://www.bancoppel.com/nomina_personas/prestamo_directo.html" data-name="Préstamo Directo Nómina">Préstamo Directo Nómina</a></li>
	
							<!-- <li><a href="https://www.bancoppel.com/producto_basico/basico_nomina.html" data-name="Producto Básico de Nómina">Producto Básico de Nómina</a></li> -->
						 </ul>
	
						 <custom-monetizacion path="${e}" imagen-desktop="img/imagen-portabilidad.png" imagen-mobile="img/banner-nomina.png" titulo="Pasa tu nómina a BanCoppel" descripcion="Solicita tu portabilidad desde la app y recibe beneficios exclusivos" link="https://www.bancoppel.com/descubre-mas/portabilidad-de-nomina-bancoppel/" texto-link="Quiero cambiarme"></custom-monetizacion>
	
					  </div>
	
	
				   </li>
	
				   <li class="li-nivel-uno" id="nav-prestamos"><span class="accordion-button collapsed" data-bs-target="#accordion-3" data-name="Préstamos" data-bs-toggle="collapse" aria-expanded="false">Préstamos</span>
					  <div id="accordion-3" class="accordion-collapse collapse headerBancoppel--subnivel--dos" data-bs-parent="#accordionExample">
	
						 <ul>
							<li><a href="https://www.bancoppel.com/credito_bcopp/prestamo.html" data-name="Préstamo Personal BanCoppel">Préstamo Personal BanCoppel</a></li>
	
							<li><a href="https://www.bancoppel.com/credito_bcopp/prestamo-digital.html" data-name="Préstamo Digital BanCoppel">Préstamo Digital BanCoppel</a></li>
	
							<li><a href="https://www.bancoppel.com/credito_bcopp/prestamo-mas-bancoppel.html" data-name="Préstamo Más BanCoppel">Préstamo Más BanCoppel</a></li>
						 </ul>
					  </div>
	
				   </li>
	
				   <li class="li-nivel-uno" id="nav-ahorro">
					  <span class="accordion-button collapsed" data-bs-target="#accordion-4" data-name="Ahorro e Inversiones" data-bs-toggle="collapse" aria-expanded="false">Ahorro e Inversiones</span>
	
					  <div id="accordion-4" class="accordion-collapse collapse headerBancoppel--subnivel--dos" data-bs-parent="#accordionExample">
						 <ul>
							<li><a href="https://www.bancoppel.com/ahorro_bcopp/apartados.html" data-name="Apartados">Apartados</a></li>
	
							<li><a href="https://www.bancoppel.com/inversion_bcopp/inversion.html" data-name="Inversión Creciente">Inversión Creciente</a></li>
	
							<li><a href="https://www.bancoppel.com/inversion_bcopp/pagare.html" data-name="Pagaré">Pagaré</a></li>
	
							<li><a href="https://sorteoefectivo.bancoppel.com/" data-name="Sorteo Efectivo BanCoppel">Sorteo Efectivo BanCoppel</a></li>
						 </ul>
	
					  </div>
	
				   </li>
	
				   <li class="li-nivel-uno" id="nav-seguros">
					  <span class="accordion-button collapsed" data-bs-target="#accordion-5" data-name="Seguros" data-bs-toggle="collapse" aria-expanded="false">Seguros</span>
					  <div id="accordion-5" class="accordion-collapse collapse headerBancoppel--subnivel--dos" data-bs-parent="#accordionExample">
	
						 <ul>
							<li><a href="https://www.bancoppel.com/seguro_efectivo/index.html" data-name="Seguro Efectivo">Seguro Efectivo </a></li>
	
							<li><a href="https://www.bancoppel.com/bancoppel_contigo/index.html" data-name="BanCoppel Contigo">BanCoppel Contigo</a></li>
	
							<li><a href="https://www.bancoppel.com/asistencia_bancoppel/index.html" data-name="Asistencia BanCoppel">Asistencia BanCoppel</a></li>
	
							<li><a href="https://www.bancoppel.com/SeguroPaisanoProtegido/index.html" data-name="Paisano Protegido">Paisano Protegido</a></li>
						 </ul>
					  </div>
				   </li>
	
				   <li class="li-nivel-uno" id="nav-envio">
					  <span class="accordion-button collapsed" data-bs-target="#accordion-6" data-name="Envío de dinero" data-bs-toggle="collapse" aria-expanded="false">Envío de dinero</span>
					  <div id="accordion-6" class="accordion-collapse collapse headerBancoppel--subnivel--dos" data-bs-parent="#accordionExample">
	
						 <ul>
							<li><a href="https://www.bancoppel.com/remesas/remesas.html" data-name="Remesas">Remesas</a></li>
	
							<li><a href="https://www.bancoppel.com/remesas/efectivo.html" data-name="Envío a ventanilla">Envío a ventanilla</a></li>
	
							<li><a href="https://www.bancoppel.com/remesas/abono-cuenta.html" data-name="Envío directo a cuenta">Envío directo a cuenta</a></li>
	
							<li><a href="https://www.bancoppel.com/remesas/cobro-app.html" data-name="Cobro en App BanCoppel">Cobro en App BanCoppel</a></li>
	
						 </ul>
	
						 <custom-monetizacion path="${e}" imagen-desktop="img/banner-remesas-d.jpg" imagen-mobile="img/banner-remesas.png" titulo="Cobra tus remesas en la App BanCoppel " descripcion="Tu dinero siempre cerca en cualquier momento." texto-boton="Descargar app" link-boton="https://bancoppel.onelink.me/YK9R/s2z3z88q" texto-link="Descargar app" link="https://bancoppel.onelink.me/YK9R/s2z3z88q"></custom-monetizacion>
	
	
					  </div>
	
				   </li>
				   <li class="li-nivel-uno" id="nav-servicios">
					  <span class="accordion-button collapsed" data-bs-target="#accordion-7" data-name="Servicios digitales" data-bs-toggle="collapse" aria-expanded="false">Servicios digitales</span>
					  <div id="accordion-7" class="accordion-collapse collapse headerBancoppel--subnivel--dos" data-bs-parent="#accordionExample">
	
						 <ul>
							<li><a href="https://www.bancoppel.com/banca_personal_bcopp/express.html" data-name="App BanCoppel">App BanCoppel</a></li>
	
							<li><a href="https://www.bancoppel.com/banca_personal_bcopp/main.html" data-name="Banca en línea">Banca en línea</a></li>
	
							<li><a href="https://www.bancoppel.com/sinfilas/home/" target="_blank" rel="noopener noreferrer" data-name="SIN FILAS">SIN FILAS</a></li>
	
							<li><a href="https://www.bancoppel.com/servicios_bcopp/pago_servicios.html?v=2" data-name="Pago de servicios">Pago de servicios</a></li>
						 </ul>
	
						 <custom-monetizacion path="${e}" imagen-desktop="img/app-qr.png" imagen-portrait="img/mockup-app-p.jpg" imagen-mobile="img/imagen-app-mobile.jpg" titulo="App BanCoppel" descripcion="Transfiere, paga e invierte desde la palma de tu mano." texto-boton="Descargar" link-boton="https://bancoppel.onelink.me/YK9R/s2z3z88q" texto-link="Conoce más" link="https://www.bancoppel.com/banca_personal_bcopp/express.html"></custom-monetizacion>
	
					  </div>
	
				   </li>
				</ul>
				<ul class="headerBancoppel--subnivel--uno headerBancoppel--menu-bottom">
				   <a href="https://www.bancoppel.com/geolocalizacion/">
					  <li class="icon-icon-place">Sucursales BanCoppel</li>
				   </a>
				   <a href="https://www.bancoppel.com/empresas/">
					  <li class="icon-icon-lugares">BanCoppel para Empresas</li>
				   </a>
				</ul>
			 </div>
		  </div>
	   </nav>
	   <div class="overlay" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></div>
	</header>
	`,o&&document.getElementById(o).classList.add("active")}}window.customElements.define("custom-header",c);const l=window.matchMedia("(max-width:1279px)"),i=()=>{const a=document.querySelector(".overlay"),e=document.querySelectorAll(".headerBancoppel--subnivel .li-nivel-uno");if(l.matches===!0){var o=document.querySelector(".headerBancoppel--subnivel");o.addEventListener("shown.bs.collapse",function(){a.classList.add("open")}),o.addEventListener("hidden.bs.collapse",function(){a.classList.remove("open")})}else{document.querySelector(".headerBancoppel--subnivel").classList.remove("show"),a.classList.remove("open");for(const t of e)t.addEventListener("mouseenter",()=>{a.classList.add("open"),a.classList.remove("close")}),t.addEventListener("mouseleave",()=>{a.classList.add("close"),a.classList.remove("open"),setTimeout(()=>{a.classList.remove("close")},500)})}};l.addListener(i);i();const s=document.querySelectorAll(".headerBancoppel--subnivel--uno .accordion-button");for(const a of s)a.addEventListener("click",()=>{let e=a.getAttribute("data-name");dataLayer.push({nd1:"Menú superior",nd2:e,nd3:"",nd4:"",event:"clicMenuSuperiorGeneral"})});const r=document.querySelector(".headerBancoppel--sup--accesos a[data-name=Banca]");r.addEventListener("click",()=>{dataLayer.push({nd1:"Menú superior",nd2:"Banca",nd3:"Web",nd4:"",event:"clicMenuSuperiorGeneral"})});const d=document.querySelector(".headerBancoppel--sup--accesos a#link-sesion-nav");d.addEventListener("click",()=>{dataLayer.push({nd1:"Menú superior",nd2:"Banca",nd3:"Mobile",nd4:"",event:"clicMenuSuperiorGeneral"})});const m=document.querySelectorAll(".headerBancoppel--sup--main a");for(const a of m)a.addEventListener("click",()=>{let e=a.getAttribute("data-name");dataLayer.push({nd1:"Menú superior",nd2:e,nd3:"",nd4:"",event:"clicMenuSuperiorGeneral"})});const u=document.querySelectorAll(".headerBancoppel--sup--accesos a:not(#btnBanca, #link-sesion-nav)");for(const a of u)a.addEventListener("click",()=>{let e=a.getAttribute("data-name");dataLayer.push({nd1:"Menú superior",nd2:e,nd3:"",nd4:"",event:"clicMenuSuperiorGeneral"})});const h=document.querySelectorAll(".headerBancoppel .li-nivel-uno a");for(const a of h)a.addEventListener("click",()=>{let e=a.closest(".li-nivel-uno"),o=a.getAttribute("data-name");dataLayer.push({nd1:"Menu superior",nd2:e.querySelector("span").innerText+" - "+o,nd3:"",nd4:"",event:"clicMenuSuperiorGeneral"})});const n=window.matchMedia("(max-width:1279px)"),p=()=>{const a=document.querySelectorAll(".headerBancoppel--subnivel--uno .accordion-button");if(n.matches===!0)for(const e of a)e.setAttribute("data-bs-toggle","collapse");else if(n.matches===!1)for(const e of a)e.setAttribute("data-bs-toggle","")};n.addListener(p);p();
