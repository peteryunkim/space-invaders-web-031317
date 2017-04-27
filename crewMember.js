class CrewMember {
	
	constructor(position, currentShip) {
		this.position = position;


		if (currentShip) {
			this.currentShip = currentShip
		} else {
			this.currentShip = "Looking for a Rig"
		};
	}

		chargePhasers(){
			if (this.position === "Gunner" && this.currentShip) {
				this.currentShip.phasersCharge = "charged!"
			} else {
				return "had no effect"
			}
		}	

		engageWarpDrive() {
			if (this.position === "Pilot" && this.currentShip != "Looking for a Rig") {
				this.currentShip.warpDrive = "engaged!"
			} else {
				return "had no effect"
			}
		}

		setsInvisibility(){
			if (this.position === "Defender" && this.currentShip != "Looking for a Rig") {
				this.currentShip.cloaked = true
			} else {
				return "had no effect"
			}
		}
	


}