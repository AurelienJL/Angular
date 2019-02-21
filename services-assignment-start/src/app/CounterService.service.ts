export class CounterService {
    activeToInactive: number = 0;
    inactiveToActive: number = 0;

    incrementActive() {
        this.inactiveToActive++;
        console.log(this.inactiveToActive);
    }

    incrementInactive(){
        this.activeToInactive++;
        console.log(this.activeToInactive);
    }
}