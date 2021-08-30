class Clock {
    $container;
    $time;
    $startBtn;
    $pauseBtn;
    $stopBtn;

    seconds;
    timeInterval;

    constructor() {
        this.$container = document.createElement("div");

        this.$time = document.createElement("span");
        this.$time.innerHTML = "00:00";

        this.$startBtn = document.createElement("button");
        this.$startBtn.innerHTML = "Start";
        this.$startBtn.addEventListener('click', this.start);


        this.$pauseBtn = document.createElement("button");
        this.$pauseBtn.innerHTML = "Pause";
        this.$pauseBtn.addEventListener('click', this.pause);


        this.$stopBtn = document.createElement("button");
        this.$stopBtn.innerHTML = "Stop";
        this.$stopBtn.addEventListener('click', this.stop);


        this.seconds = 0;
        this.timeInterval = null;
    }

    start = () => {
        if (this.timeInterval) {
            return;
        }
        this.timeInterval = setInterval(() => {
            this.seconds++;
            this.updateTime();
        }, 1000);

    };

    pause = () => {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
        }
    };

    stop = () => {
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
            this.seconds = 0;
            this.updateTime();
        }
    }

    updateTime = () => {
        const secondPart = this.seconds % 60;
        const minutePart = (this.seconds - secondPart) / 60;
        this.$time.innerHTML = minutePart + ':' + secondPart;
    }

    render() {
        this.$container.appendChild(this.$time);
        this.$container.appendChild(this.$startBtn);
        this.$container.appendChild(this.$pauseBtn);
        this.$container.appendChild(this.$stopBtn);

        return this.$container;
    }
}