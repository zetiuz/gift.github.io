document.getElementById("sobre").addEventListener("click", function() {
	const carta = document.getElementById("carta");
	const solapa = document.getElementById("solapa");
	const capaInferior = document.getElementById("capa-inferior");

	if (carta.style.display === "none" || carta.style.display === "") {
		
		solapa.style.backgroundColor = "#eceff4";
		solapa.style.transform = "rotateX(180deg)";
		solapa.style.borderTop = "none";
		solapa.style.borderTopLeftRadius = "0";
		solapa.style.borderTopRightRadius = "0";
		capaInferior.style.borderTop = "none";
		capaInferior.style.borderTopLeftRadius = "0";
		capaInferior.style.borderTopRightRadius = "0";

		setTimeout(() => {
			carta.style.display = "block";
			carta.style.transition = "bottom 0.5s ease, height 1.0s ease";

			setTimeout(() => {
				carta.style.bottom = "60%";
				carta.style.height = "215px";
			}, 500);
		}, 500);

	} else {
		carta.style.bottom = "0";
		carta.style.height = "120px"

		setTimeout(() => {
			solapa.style.transform = "rotateX(0deg)";

			setTimeout(() => {
				solapa.style.backgroundColor = "#bf616a";
				solapa.style.borderTop = "solid 2px #bf616a";
				solapa.style.borderTopLeftRadius = "8px";
				solapa.style.borderTopRightRadius = "8px";

				capaInferior.style.borderTop = "solid 2px #bf616a";
				capaInferior.style.borderTopLeftRadius = "8px";
				capaInferior.style.borderTopRightRadius = "8px";
			}, 100);
		}, 750);

		setTimeout(() => {
			carta.style.display = "none";
		}, 1000);
	}
});