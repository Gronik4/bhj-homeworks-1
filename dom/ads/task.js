class Slider{
    constructor(container) {
       this.container = container;
       this.rotatorObject = container.querySelectorAll('.rotator__case');
       this.j = 0;
       this.last = this.j;
       this.interval;
       
       this.start();
       this.hendler();
    }
    
    start() {
      this.interval = setInterval(() =>{
          this.hendler();
       },0)
    }
    
    hendler() {
       clearInterval(this.interval);
       if(this.j === this.rotatorObject.length) {
          this.j = 0;
       }
       this.rotatorObject[this.last].classList.remove('rotator__case_active');
       this.rotatorObject[this.last = this.j].classList.add('rotator__case_active');
       this.rotatorObject[this.last].style.color = `${this.rotatorObject[this.last].dataset.color}`; 
       
       this.interval = setInterval(() => {
          this.hendler();
          }, this.rotatorObject[this.j++].dataset.speed);
    }
 }
 
 new Slider(document.getElementById('rotator'));