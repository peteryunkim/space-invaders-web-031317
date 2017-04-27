class Spaceship {
	constructor(name, crew, phasers, shields) {
		this.name = name;
		this.phasers = phasers;
		this.shields = shields;
		this.cloaked = false;
		this.warpDrive = "disengaged";
		this.phasersCharge = "uncharged";

		if (crew.length === 0) {
			this.crew = null
			this.docked = true
		} else {
			this.crew = crew
			crew.forEach(e => {
				e.currentShip = this
			})
			this.docked = false
		}
	}


}
	
