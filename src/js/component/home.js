import React from "react";

//include images into your bundle

import { NavBar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { GroupCard } from "./groupCard.js";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron
					title="A War Welcome"
					description="Loremp ipson blabla bl , por que tu por que yo"
					buttonLabel="Find out more!"
					buttonURL="https://reactjs.org/"
				/>
				<div className="row">
					<GroupCard
						title="Paul Mccartney"
						description="James Paul McCartney es un cantautor, compositor, músico, multiinstrumentista, escritor y actor británico"
						buttonLabel="Find out more!"
						buttonURL="https://es.wikipedia.org/wiki/Paul_McCartney"
						imgUrl="https://rock101online.mx/wp-content/uploads/2019/06/Paul-McCartney-840x658.jpg"
					/>
					<GroupCard
						title="Bob Dylan"
						description="Bob Dylan, ​ registrado al nacer como Robert Allen Zimmerman, es un músico, compositor, cantante y poeta estadounidense, ampliamente considerado como una de las figuras más prolíficas e influyentes en la música popular del siglo XX y de comienzos del siglo XXI.​​​"
						buttonLabel="Find out more!"
						buttonURL="https://es.wikipedia.org/wiki/Bob_Dylan"
						imgUrl="https://www.radiojai.com/wp-content/uploads/2020/10/bobdylan.jpg"
					/>
					<GroupCard
						title="Mick Jagger"
						description="Michael Philip Jagger, ​ conocido profesionalmente como Mick Jagger, es un cantante, compositor, músico y actor británico, reconocido por ser el principal cantante de la banda de rock The Rolling Stones."
						buttonLabel="Find out more!"
						buttonURL="https://es.wikipedia.org/wiki/Mick_Jagger"
						imgUrl="https://pbs.twimg.com/profile_images/890611271028137984/_5xAXOi-.jpg"
					/>
					<GroupCard
						title="Elvis Presley"
						description="Elvis Aaron Presley​ fue uno de los cantantes estadounidenses e iconos culturales más populares del siglo XX, conocido ampliamente bajo su nombre de pila, Elvis. Se hace referencia a él frecuentemente como «El Rey del Rock and Roll» o simplemente «El Rey»."
						buttonLabel="Find out more!"
						buttonURL="https://es.wikipedia.org/wiki/Elvis_Presley"
						imgUrl="https://cdns-images.dzcdn.net/images/artist/935d35a45e061e7640a0becfa42cef6e/500x500.jpg"
					/>
				</div>
			</div>
			<div className="col-12">
				<p className="credits col-12">Copyright @ Your Website 2021</p>
			</div>
		</div>
	);
}
